import { GITHUB } from '../config';

export type PrState = 'merged' | 'open' | 'closed';
export interface PullRequest {
  repo: string;
  title: string;
  url: string;
  date: Date;
  state: PrState;
}

let cache: Promise<PullRequest[] | null> | undefined;

/**
 * 构建时拉取最近的 PR。Actions 里有 GITHUB_TOKEN 时带上以提高限额，本地匿名也能用。
 * 失败返回 null，不让构建失败。
 */
export function getPullRequests(): Promise<PullRequest[] | null> {
  cache ??= fetchPullRequests();
  return cache;
}

async function fetchPullRequests(): Promise<PullRequest[] | null> {
  const q = encodeURIComponent(`author:${GITHUB.user} type:pr`);
  const url = `https://api.github.com/search/issues?q=${q}&sort=created&order=desc&per_page=${GITHUB.prCount}`;
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'astro-blog-build',
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(url, { headers, signal: AbortSignal.timeout(10_000) });
    if (!res.ok) {
      console.warn(`[github] PR 请求失败：${res.status} ${res.statusText}`);
      return null;
    }
    const json = (await res.json()) as { items?: any[] };
    return (json.items ?? []).map((it) => ({
      repo: String(it.repository_url ?? '').replace('https://api.github.com/repos/', ''),
      title: it.title,
      url: it.html_url,
      date: new Date(it.created_at),
      state: it.pull_request?.merged_at ? 'merged' : it.state === 'open' ? 'open' : 'closed',
    }));
  } catch (e) {
    console.warn(`[github] PR 请求失败：${(e as Error).message}`);
    return null;
  }
}
