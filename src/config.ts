// 站点的文字都集中在这里改。每段文字都有 en / zh 两个版本，方括号里的是占位。

export const SITE = {
  name: 'ALTALE',
  since: 2026,
  author: 'altale',
  license: 'CC BY-NC 4.0',
  subtitle: { en: '[One-line subtitle]', zh: '[一句话副标题]' },
  // 首页大标题，用 \n 换行
  headline: { en: 'Writing code,\nand writing life', zh: '写代码，\n也写生活' },
  intro: {
    en: '[A sentence or two about this blog: what you write about and who it is for.]',
    zh: '[一两句介绍这个博客：主要写什么、写给谁看。]',
  },
  description: { en: '[Site description for SEO and RSS]', zh: '[站点描述，用于 SEO 和 RSS]' },
};

export const NAV = [
  { no: '01', href: '/', label: { en: 'Home', zh: '首页' }, sub: 'HOME' },
  { no: '02', href: '/archive/', label: { en: 'Archive', zh: '归档' }, sub: 'ARCHIVE' },
  { no: '03', href: '/archive/#tags', label: { en: 'Tags', zh: '标签' }, sub: 'TAGS' },
  { no: '04', href: '/#about', label: { en: 'About', zh: '关于' }, sub: 'ABOUT' },
];

// 首页右上 Now / 近况 卡片
export const NOW = {
  updated: '2026-11-13',
  items: [
    { label: { en: 'Building', zh: '在做' }, value: { en: '[What you are working on]', zh: '[正在做的项目]' } },
    { label: { en: 'Reading', zh: '在读' }, value: { en: '[What you are reading]', zh: '[正在读的书]' } },
    { label: { en: 'Learning', zh: '在学' }, value: { en: '[What you are learning]', zh: '[最近在学的东西]' } },
  ],
};

// 首页 Notice / 通知 表，最新的放最前
export const NOTICES = [
  {
    date: '2026-11-13',
    kind: { en: 'Update', zh: '更新' },
    text: { en: 'The site is now available in English and Chinese.', zh: '站点支持中英双语，默认显示英文。' },
  },
  {
    date: '2026-11-13',
    kind: { en: 'Redesign', zh: '改版' },
    text: { en: 'Rebuilt the site with Astro; the old homepage is retired.', zh: '站点用 Astro 重建，旧版主页下线。' },
  },
];

// 分类：id 写进文章 frontmatter 的 category 字段
export const CATEGORIES = [
  { id: 'tech', code: 'A', label: 'NOTES', name: { en: 'Tech notes', zh: '技术笔记' }, desc: { en: '[What this category covers]', zh: '[这个分类写什么]' } },
  { id: 'life', code: 'B', label: 'JOURNAL', name: { en: 'Journal', zh: '日常观察' }, desc: { en: '[What this category covers]', zh: '[这个分类写什么]' } },
  { id: 'works', code: 'C', label: 'PROJECTS', name: { en: 'Projects', zh: '制作物' }, desc: { en: '[What this category covers]', zh: '[这个分类写什么]' } },
] as const;

export const ABOUT = {
  name: 'altale',
  bio: {
    en: '[A sentence or two about yourself: what you do and what you care about.]',
    zh: '[一两句自我介绍：做什么、在意什么。]',
  },
  links: [
    { label: 'GitHub', href: 'https://github.com/altale', external: true },
    { label: 'RSS', href: '/rss.xml', external: false },
  ],
};
