import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateArticles, getRelatedArticles, getArticles, getRenderableArticles } from '../lib/articles.ts';
const answer = Array(45).fill('fixture').join(' ');
const pillar = {title:'Fixture',description:'Test description',slug:'fixture',cluster:'propulsion',isPillar:true,pillar:null,wave:1,primaryKeyword:'fixture',secondaryKeywords:[],ctaCourse:'tech-1',ctaPage:null,extraLinks:[],answer,faqs:[],publishedAt:'2026-01-01',lastReviewed:'2026-01-01',draft:false,body:'## Fixture\n\nTest fixture only.'};
test('valid published metadata passes', () => assert.deepEqual(validateArticles([pillar]).errors, []));
for (const [name, patch] of Object.entries({answer:{answer:'Short'},description:{description:'a'.repeat(161)},course:{ctaCourse:'unknown'},pillar:{isPillar:false,pillar:'missing'},date:{lastReviewed:null},link:{body:'[broken](/learn/missing)'},courseLink:{extraLinks:['/courses/missing']},placeholder:{body:'TODO(jeremiah): approval'}})) {
 test(`published ${name} blocks publication; draft only warns`, () => {
  assert.ok(validateArticles([{...pillar,...patch}]).errors.length);
  const result = validateArticles([{...pillar,...patch,draft:true}]);
  assert.equal(result.errors.length,0); assert.ok(result.warnings.length);
 });
}
test('published articles cannot link to draft articles', () => {
 const draft = {...pillar,slug:'draft',draft:true};
 assert.match(validateArticles([{...pillar,body:'[Draft](/learn/draft)'},draft]).errors.join('\n'), /unresolved link/);
});
test('production readers and related lists exclude all drafts', () => {
 assert.ok(getArticles().every(a => !a.draft));
 if (process.env.VERCEL_ENV !== 'preview' && process.env.NODE_ENV !== 'development') assert.deepEqual(getRenderableArticles(),getArticles());
 assert.ok(getRelatedArticles(pillar).every(a => !a.draft));
});
