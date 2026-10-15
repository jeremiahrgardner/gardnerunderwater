import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { clusters, getArticle, getRenderableArticles, getRelatedArticles, formatArticleDate } from "@/lib/articles";
import { courses } from "@/lib/courses";
import { pageMetadata } from "@/lib/metadata";
import { absoluteUrl, jsonLd, site } from "@/lib/site";
import { MinimumGasCalculator } from "@/components/MinimumGasCalculator";
import { YouTube } from "@/components/YouTube";
import { ArticleCard } from "@/components/ArticleCard";
export const dynamicParams = false;
export function generateStaticParams() { return getRenderableArticles().map(a => ({slug:a.slug})); }
export async function generateMetadata({params}: {params:Promise<{slug:string}>}) {
 const article = getArticle((await params).slug); if (!article) notFound();
 return {...pageMetadata(article.title, article.description, `/learn/${article.slug}`), robots: article.draft ? {index:false,follow:false} : undefined,
 openGraph:{type:"article" as const,title:article.title,description:article.description,url:`/learn/${article.slug}`,images:["/social.jpg"],publishedTime:article.publishedAt || undefined,modifiedTime:article.lastReviewed || undefined}};
}
export default async function ArticlePage({params}: {params:Promise<{slug:string}>}) {
 const article = getArticle((await params).slug); if (!article) notFound();
 const cluster = clusters.find(c => c.slug === article.cluster)!;
 const course = courses.find(c => c.slug === article.ctaCourse);
 const related = getRelatedArticles(article);
 const crumbs = [{name:"Learn",path:"/learn"},{name:cluster.name,path:`/learn/topic/${cluster.slug}`},{name:article.title,path:`/learn/${article.slug}`}];
 const graph: object[] = [{"@type":"Article",headline:article.title,description:article.description,datePublished:article.publishedAt || undefined,dateModified:article.lastReviewed || undefined,author:{"@id":`${site.url}/about#jeremiah-gardner`},publisher:{"@id":`${site.url}/#organization`},image:absoluteUrl("/social.jpg"),mainEntityOfPage:absoluteUrl(`/learn/${article.slug}`)}, {"@type":"BreadcrumbList",itemListElement:crumbs.map((c,i) => ({"@type":"ListItem",position:i+1,name:c.name,item:absoluteUrl(c.path)}))}];
 if (article.video?.youtubeId && article.video.uploadDate) graph.push({"@type":"VideoObject",name:article.video.title,description:article.description,uploadDate:article.video.uploadDate,thumbnailUrl:`https://i.ytimg.com/vi/${article.video.youtubeId}/hqdefault.jpg`,embedUrl:`https://www.youtube-nocookie.com/embed/${article.video.youtubeId}`});
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd({"@context":"https://schema.org","@graph":graph})}} /><article className="section"><div className="container learn-reading">
 {article.draft && <aside className="learn-draft" role="note"><strong>Draft · preview only</strong><p>Owner review required. This page is excluded from production and search indexing.</p></aside>}
 <nav aria-label="Breadcrumb" className="breadcrumbs">{crumbs.map((c,i) => <span key={c.path}>{i>0 && <span aria-hidden="true"> › </span>}{i<2 ? <Link href={c.path}>{c.name}</Link> : c.name}</span>)}</nav>
 <header><h1>{article.title}</h1><div className="learn-answer">{article.answer}</div><p className="article-meta">By <Link href="/about">Jeremiah Gardner</Link> · Last reviewed {article.lastReviewed ? <time dateTime={article.lastReviewed}>{formatArticleDate(article.lastReviewed)}</time> : "Pending owner review"}</p></header>
 <div className="article-prose"><MDXRemote source={article.body.replace(/<!--[\s\S]*?-->/g, "")} components={{YouTube, MinimumGasCalculator}} options={{mdxOptions:{remarkPlugins:[remarkGfm]}}} /></div>
 {!!article.faqs?.length && <section className="article-prose"><h2>Frequently asked questions</h2>{article.faqs.map((faq,i) => <div key={i}><h3>{faq.q}</h3><p>{faq.a}</p></div>)}</section>}
 <aside className="learn-course"><h2>{course?.title || "Find your next training step"}</h2>{course && <p>{course.tagline || course.desc.split(/(?<=[.!?])\s+/)[0]}</p>}<Link className="btn btn-dark" data-course-cta="true" data-course={course?.slug || ""} href={course ? `/courses/${course.slug}` : article.ctaPage || "/training"}>{course ? "Explore this course" : "Explore our approach"}</Link></aside>
 {related.length>0 && <section><h2>Related reading</h2><div className="article-grid">{related.map(a => <ArticleCard key={a.slug} article={a} />)}</div></section>}
 <aside className="learn-author"><h2>Jeremiah Gardner</h2><p>TODO(jeremiah): Supply an approved author headshot and two-line bio.</p><p><Link href="/about">About Jeremiah</Link> · <a href="https://jeremiahgardner.com">jeremiahgardner.com</a></p></aside>
 </div></article></>;
}
