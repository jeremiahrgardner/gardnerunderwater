import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { fileURLToPath } from 'node:url';

export function generateArticleStubs(root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')) {
 const plan = JSON.parse(fs.readFileSync(path.join(root,'docs/seo/articles.json'),'utf8'));
 const directory = path.join(root,'content/learn'); fs.mkdirSync(directory,{recursive:true});
 let created = 0;
 for (const article of plan.articles) {
  const {title,slug,cluster,isPillar,pillar,wave,primaryKeyword,secondaryKeywords,ctaCourse,ctaPage,extraLinks,angle} = article;
  const filename = path.join(directory,`${slug}.mdx`);
  const data = {title,description:`TODO(jeremiah): Write the meta description for ${slug}.`,slug,cluster,isPillar,pillar,wave,primaryKeyword,secondaryKeywords,ctaCourse,ctaPage,extraLinks,answer:`TODO(jeremiah): Write the approved 40–60 word answer for ${slug}.`,faqs:[{q:`TODO(jeremiah): Supply reader questions for ${slug}.`,a:`TODO(jeremiah): Write approved FAQ answers for ${slug}.`}],video:{youtubeId:'',title:'',uploadDate:''},publishedAt:null,lastReviewed:null,draft:true};
  const body = `<!-- Editorial angle: ${angle.replace(/-->/g,'')} -->\n\n## Overview\n<!-- TODO(jeremiah): Write and approve this article's introduction and scope. -->\n\n## Details\n<!-- TODO(jeremiah): Write the article body following the editorial angle; add verified sources and tables as appropriate. -->\n\n## Put it into practice\n<!-- TODO(jeremiah): Add approved practical guidance and relevant internal links. -->\n`;
  try {fs.writeFileSync(filename,matter.stringify(body,data),{flag:'wx'});created++;} catch(error) {if(error.code!=='EEXIST') throw error;}
 }
 return created;
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) console.log(`Created ${generateArticleStubs()} article stubs; existing files preserved.`);
