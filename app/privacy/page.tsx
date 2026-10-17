import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = pageMetadata(
  "Privacy Policy",
  "How Gardner Underwater collects, uses and protects your information, including email signups, analytics and cookies, and how to reach us about your data.",
  "/privacy",
);

const UPDATED = "October 17, 2026";

export default function PrivacyPage() {
  return (
    <article className="section">
      <div className="container learn-reading">
        <header>
          <h1>Privacy Policy</h1>
          <p className="article-meta">Last updated {UPDATED}</p>
        </header>
        <div className="article-prose">
          <p>
            This policy explains what information Gardner Underwater
            (“we,” “us”) collects through{" "}
            gardnerunderwater.com, how we use it and the choices you have. We
            keep it short because we collect very little.
          </p>

          <h2>What we collect</h2>
          <p>
            <strong>Your email address, when you ask for it to be used.</strong>{" "}
            If you unlock our free downloads, we collect the email address you
            enter.
          </p>
          <p>
            <strong>What you send us.</strong> Our contact form opens a
            pre-filled message in your own email app. We receive only what you
            choose to send, by email.
          </p>
          <p>
            <strong>Usage information.</strong> Like most websites, we collect
            information about how the site is used, such as pages viewed,
            links clicked, the page that referred you, your browser and device
            type, and an approximate location derived from your IP address. We
            don’t collect payment information on this site.
          </p>

          <h2>How we use it</h2>
          <ul>
            <li>To give you the downloads you asked for.</li>
            <li>
              To send you occasional emails about training and dive planning.
              Every email includes an unsubscribe link.
            </li>
            <li>To reply when you contact us.</li>
            <li>
              To understand which pages and resources are useful, so we can
              improve the site.
            </li>
            <li>To keep the site secure and working.</li>
          </ul>

          <h2>Cookies and similar technologies</h2>
          <ul>
            <li>
              <strong>Downloads library.</strong> When you unlock the
              downloads, we set a cookie named <code>gu_library</code> so your
              library stays unlocked on that device for up to a year. It
              doesn’t contain your email address.
            </li>
            <li>
              <strong>Analytics.</strong> We use Vercel Web Analytics and
              PostHog to measure how the site is used. PostHog may store an
              identifier in a first-party cookie or in your browser’s
              local storage so it can recognize repeat visits. We don’t
              use advertising cookies.
            </li>
            <li>
              <strong>Videos.</strong> Embedded YouTube videos use
              YouTube’s privacy-enhanced mode.
            </li>
          </ul>
          <p>
            You can block or delete cookies in your browser settings. If you
            delete the <code>gu_library</code> cookie, enter your email again to
            unlock the downloads.
          </p>

          <h2>Who we share it with</h2>
          <p>
            We don’t sell your personal information, and we don’t
            share it for targeted advertising. We share it only with service
            providers that help us run the site, under their own privacy terms:
          </p>
          <ul>
            <li>
              <strong>Kit</strong> stores our email list and sends our emails.
            </li>
            <li>
              <strong>Vercel</strong> hosts the site and provides web analytics.
            </li>
            <li>
              <strong>PostHog</strong> provides product analytics.
            </li>
          </ul>
          <p>
            We may also disclose information if the law requires it, or to
            protect the rights and safety of our students, visitors or
            business.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep your email address until you unsubscribe or ask us to
            delete it. Analytics data is kept for as long as our analytics
            providers retain it.
          </p>

          <h2>Your choices and rights</h2>
          <p>
            You can unsubscribe from our emails at any time using the link in
            any email. You can also ask us to tell you what personal information
            we hold about you, to correct it or to delete it. Depending on where
            you live, including California, you may have additional rights
            under local law, and we won’t treat you differently for using
            them. To make a request, email us at the address below.
          </p>

          <h2>Children</h2>
          <p>
            This site isn’t directed to children under 13, and we
            don’t knowingly collect personal information from them. If
            you think a child has given us information, contact us and we will
            delete it.
          </p>

          <h2>Security</h2>
          <p>
            We use reputable service providers and limit who can access your
            information. No method of transmission or storage is completely
            secure, but we take reasonable steps to protect what you share with
            us.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If we change this policy, we’ll update the date at the top of
            this page.
          </p>

          <h2>Contact</h2>
          <p>
            Questions or requests about your information:{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>. Gardner
            Underwater, San Diego, California. You can also reach us through
            our <Link href="/contact">contact page</Link>.
          </p>
        </div>
      </div>
    </article>
  );
}
