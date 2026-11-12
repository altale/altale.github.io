import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORIES } from '../config';

export type Post = CollectionEntry<'posts'> & { no: string; readMin: number };

/** 已发布文章，按日期从新到旧；编号按发布顺序自动生成（No.001 起）。 */
export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('posts', (p) => import.meta.env.DEV || !p.data.draft);
  const asc = all.sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
  return asc
    .map((p, i) => ({
      ...p,
      no: 'No.' + String(i + 1).padStart(3, '0'),
      readMin: readMinutes(p.body ?? ''),
    }))
    .reverse();
}

function readMinutes(body: string) {
  const cjk = (body.match(/[一-鿿]/g) ?? []).length;
  const words = body.replace(/[一-鿿]/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(cjk / 400 + words / 220));
}

export const fmt = (d: Date) => d.toISOString().slice(0, 10);

export const categoryOf = (id: string) => CATEGORIES.find((c) => c.id === id);

export const postUrl = (p: { id: string }) => `/posts/${p.id}/`;
