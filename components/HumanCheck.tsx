"use client";

// Cloudflare Turnstile widget for contact forms (same file on every site except deadreckon.io).
// Usually invisible; it only shows a checkbox when Cloudflare needs one.
// Renders nothing when NEXT_PUBLIC_TURNSTILE_SITE_KEY is unset.
import { useEffect, useRef } from "react";

type Turnstile = {
  render: (el: HTMLElement, options: Record<string, unknown>) => string;
  getResponse: (id: string) => string | undefined;
  reset: (id: string) => void;
  remove: (id: string) => void;
};
declare global {
  interface Window { turnstile?: Turnstile }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";
const SCRIPT_URL = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

let loading: Promise<void> | null = null;
function loadScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  loading ??= new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => { loading = null; reject(new Error("Turnstile did not load")); };
    document.head.appendChild(script);
  });
  return loading;
}

let widgetId: string | undefined;
let mountedAt = 0;

export function HumanCheck() {
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    mountedAt = Date.now();
    if (!SITE_KEY) return;
    let cancelled = false;
    let id: string | undefined;
    loadScript().then(() => {
      if (cancelled || !box.current || !window.turnstile) return;
      id = window.turnstile.render(box.current, { sitekey: SITE_KEY, size: "flexible", appearance: "interaction-only" });
      widgetId = id;
    }).catch(() => {});
    return () => {
      cancelled = true;
      if (id && window.turnstile) window.turnstile.remove(id);
      if (widgetId === id) widgetId = undefined;
    };
  }, []);
  if (!SITE_KEY) return null;
  return <div ref={box} style={{ minHeight: 0 }} />;
}

export const HUMAN_CHECK_MESSAGE = "Please wait a moment for the security check to finish, then send again.";

// Fields to add to the JSON body. Waits up to 10 seconds for the token.
// Throws HUMAN_CHECK_MESSAGE if the check has not finished.
export async function humanFields(): Promise<Record<string, string | number>> {
  const formMs = mountedAt ? Date.now() - mountedAt : 0;
  if (!SITE_KEY) return { formMs };
  for (let i = 0; i < 20; i++) {
    const token = widgetId && window.turnstile ? window.turnstile.getResponse(widgetId) : "";
    if (token) return { "cf-turnstile-response": token, formMs: mountedAt ? Date.now() - mountedAt : formMs };
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  throw new Error(HUMAN_CHECK_MESSAGE);
}

// Tokens work once: call after any failed submission so a retry gets a fresh one.
export function resetHumanCheck() {
  if (widgetId && window.turnstile) window.turnstile.reset(widgetId);
}
