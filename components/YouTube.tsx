export function YouTube({ id, title = "Dive Table video" }: { id: string; title?: string }) {
  if (!/^[A-Za-z0-9_-]{11}$/.test(id)) return null;
  return <iframe className="learn-video" src={`https://www.youtube-nocookie.com/embed/${id}`} title={title} loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />;
}
