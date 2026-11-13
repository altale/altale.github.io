import { getCollection, type CollectionEntry } from 'astro:content';
import { LANGS, localize, type Lang } from '../i18n';

export type Post = CollectionEntry<'posts'> & {
  lang: Lang;
  slug: string;
  no: string;
  readMin: number;
};

// 文章放在 src/content/posts/<lang>/<slug>.md，id 形如 "en/hello"
function splitId(id: string) {
  const i = id.indexOf('/');
  return { lang: id.slice(0, i) as Lang, slug: id.slice(i + 1) };
}

/** 所有语言的已发布文章。编号按 slug 计：同一篇的中英版本共用一个编号，按首次发布日期递增。 */
async function allPosts(): Promise<Post[]> {
  const raw = await getCollection('posts', (p) => import.meta.env.DEV || !p.data.draft);
  const items = raw
    .map((p) => ({ ...p, ...splitId(p.id), readMin: readMinutes(p.body ?? '') }))
    .filter((p) => (LANGS as readonly string[]).includes(p.lang));

  const first = new Map<string, number>();
  for (const p of items) {
    const t = p.data.date.valueOf();
    if (!first.has(p.slug) || t < first.get(p.slug)!) first.set(p.slug, t);
  }
  const order = [...first.entries()]
    .sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]))
    .map(([slug]) => slug);

  return items.map((p) => ({ ...p, no: String(order.indexOf(p.slug) + 1).padStart(3, '0') }));
}

/** 某个语言的文章，按日期从新到旧 */
export async function getPosts(lang: Lang): Promise<Post[]> {
  return (await allPosts())
    .filter((p) => p.lang === lang)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** 给文章页用的 getStaticPaths */
export async function postPaths(lang: Lang) {
  const all = await allPosts();
  const posts = await getPosts(lang);
  return posts.map((post, i) => ({
    params: { slug: post.slug },
    props: {
      post,
      newer: posts[i - 1],
      older: posts[i + 1],
      alternates: Object.fromEntries(all.filter((p) => p.slug === post.slug).map((p) => [p.lang, postUrl(p)])),
    },
  }));
}

function readMinutes(body: string) {
  const cjk = (body.match(/[一-鿿]/g) ?? []).length;
  const words = body.replace(/[一-鿿]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(cjk / 400 + words / 220));
}

export const fmt = (d: Date) => d.toISOString().slice(0, 10);
export const fmtSlash = (d: Date) => fmt(d).replaceAll('-', '/');
export const md = (d: Date) => fmt(d).slice(5);

export const postUrl = (p: { lang: Lang; slug: string }) => localize(p.lang, `/posts/${p.slug}/`);
