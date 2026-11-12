export const LANGS = ['en', 'zh'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';
export type L<T = string> = Record<Lang, T>;

export const LANG_META: L<{ html: string; label: string; og: string }> = {
  en: { html: 'en', label: 'EN', og: 'en_US' },
  zh: { html: 'zh-CN', label: '中文', og: 'zh_CN' },
};

/** 给站内路径加语言前缀：英文不加，中文加 /zh */
export const localize = (lang: Lang, path: string) =>
  lang === DEFAULT_LANG ? path : `/${lang}${path}`;

/** 去掉路径里的语言前缀 */
export function stripLang(path: string) {
  for (const l of LANGS) {
    if (l === DEFAULT_LANG) continue;
    if (path === `/${l}` || path.startsWith(`/${l}/`)) return path.slice(l.length + 1) || '/';
  }
  return path;
}

const enCount = (n: number) => `${n} ${n === 1 ? 'post' : 'posts'}`;

const en = {
  langAria: 'Language',
  navAria: 'Main navigation',
  footerNavAria: 'Footer navigation',
  since: 'SINCE',
  readLatest: 'Read the latest',
  noPostYet: 'First post coming soon',
  allPosts: 'All posts',
  nowTitle: 'Now',
  updatedOn: 'Updated',
  subscribe: 'Subscribe via RSS →',
  notice: 'Notice',
  categories: 'Categories',
  latest: 'Latest posts',
  viewAll: 'View all posts →',
  noPosts: '— No posts yet —',
  postCount: enCount,
  disclaimer: 'Opinions here are my own, as of the time of writing.',
  footArchive: 'Archive',
  footAbout: 'About',
  backToTop: '↑ Back to top',
  archiveTitle: 'Archive',
  archiveMeta: (n: number) => `${enCount(n)} · newest first`,
  tagsLabel: 'TAGS',
  categoriesLabel: 'CATEGORIES',
  all: 'All',
  filterAria: 'Filter by tag or category',
  filterEmpty: '— No posts match this filter —',
  breadcrumbAria: 'Breadcrumb',
  info: 'Info',
  published: 'Published',
  updated: 'Updated',
  category: 'Category',
  reading: 'Reading',
  readTime: (n: number) => `~${n} min`,
  toc: 'INDEX',
  tocAria: 'Table of contents',
  byline: (author: string, license: string) => `Written by ${author} · Licensed under ${license}`,
  moreTag: (t: string) => `More #${t} posts →`,
  prev: '← PREV',
  next: 'NEXT →',
  firstPost: 'This is the first post',
  latestPost: 'This is the latest post',
};

const zh: typeof en = {
  langAria: '语言',
  navAria: '主导航',
  footerNavAria: '页脚导航',
  since: 'SINCE',
  readLatest: '阅读最新文章',
  noPostYet: '第一篇文章筹备中',
  allPosts: '全部文章',
  nowTitle: '近况 / NOW',
  updatedOn: '更新于',
  subscribe: '订阅 RSS →',
  notice: '通知',
  categories: '分类',
  latest: '最新文章',
  viewAll: '查看全部文章 →',
  noPosts: '— 还没有文章 —',
  postCount: (n) => `${n} 篇`,
  disclaimer: '本站内容仅代表作者本人当时的看法。',
  footArchive: '归档 Archive',
  footAbout: '关于 About',
  backToTop: '↑ 回到顶部',
  archiveTitle: '归档',
  archiveMeta: (n) => `共 ${n} 篇 · 按年份倒序`,
  tagsLabel: 'TAGS / 标签',
  categoriesLabel: 'CATEGORIES / 分类',
  all: '全部',
  filterAria: '按标签或分类筛选',
  filterEmpty: '— 该筛选下暂无文章 —',
  breadcrumbAria: '面包屑',
  info: '文章信息',
  published: '发布',
  updated: '更新',
  category: '分类',
  reading: '阅读',
  readTime: (n) => `约 ${n} 分钟`,
  toc: 'INDEX / 目录',
  tocAria: '目录',
  byline: (author, license) => `作者：${author} · 本文以 ${license} 许可发布`,
  moreTag: (t) => `更多 #${t} 文章 →`,
  prev: '← PREV',
  next: 'NEXT →',
  firstPost: '已经是第一篇',
  latestPost: '已经是最新一篇',
};

export const UI: L<typeof en> = { en, zh };
