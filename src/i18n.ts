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
  sideNavAria: 'Sidebar navigation',
  profileAria: 'Profile and navigation',
  postSideAria: 'Post info and navigation',
  archiveSideAria: 'Tag filter and navigation',
  builtWith: 'Built with Astro',
  avatarAlt: 'Avatar',
  // 横条
  latest: 'Latest',
  firstPostSoon: 'First post coming soon',
  posts: 'Writing',
  archive: 'Archive',
  quote: (t: string) => `“${t}”`,
  back: '← BACK',
  // 首页
  postsTitle: 'Writing',
  byTag: '▶ Browse by tag',
  noPosts: '— No posts yet —',
  prTitle: 'Recent pull requests',
  viewAll: '▶ View all',
  prEmpty: '— PR data is unavailable right now —',
  prState: { merged: 'Merged', open: 'Open', closed: 'Closed' },
  // 文章页
  readTime: (n: number) => `~${n} min`,
  tocAria: 'Table of contents',
  tagsAria: 'Tags',
  breadcrumbAria: 'Breadcrumb',
  noteLabel: '',
  prev: '◀ PREV',
  next: 'NEXT ▶',
  firstPost: 'This is the first post',
  latestPost: 'This is the latest post',
  copy: 'COPY',
  copied: 'COPIED',
  // 归档
  archiveTitle: 'Archive',
  all: 'All',
  allTags: 'All tags',
  filterAria: 'Filter by tag',
  yearTitle: (y: number | string) => `${y}`,
  postCount: enCount,
  filterEmpty: '— No posts with this tag —',
};

const zh: typeof en = {
  langAria: '语言',
  navAria: '主导航',
  sideNavAria: '侧栏导航',
  profileAria: '个人信息与导航',
  postSideAria: '文章信息与导航',
  archiveSideAria: '标签筛选与导航',
  builtWith: 'Built with Astro',
  avatarAlt: '头像',
  latest: '最新',
  firstPostSoon: '第一篇文章筹备中',
  posts: '文章',
  archive: '归档',
  quote: (t) => `《${t}》`,
  back: '← BACK',
  postsTitle: '文章',
  byTag: '▶ 按标签浏览',
  noPosts: '— 还没有文章 —',
  prTitle: '最近的 PR',
  viewAll: '▶ 查看全部',
  prEmpty: '— 暂时拿不到 PR 数据 —',
  prState: { merged: '已合并', open: '进行中', closed: '已关闭' },
  readTime: (n) => `约 ${n} 分钟`,
  tocAria: '目录',
  tagsAria: '标签',
  breadcrumbAria: '面包屑',
  noteLabel: '提示',
  prev: '◀ PREV',
  next: 'NEXT ▶',
  firstPost: '已经是第一篇',
  latestPost: '已经是最新一篇',
  copy: 'COPY',
  copied: 'COPIED',
  archiveTitle: '归档',
  all: '全部',
  allTags: '全部标签',
  filterAria: '按标签筛选',
  yearTitle: (y) => `${y} 年`,
  postCount: (n) => `${n} 篇`,
  filterEmpty: '— 该标签下暂无文章 —',
};

export const UI: L<typeof en> = { en, zh };
