// 站点的文字都集中在这里改。方括号里的是占位，换成你自己的内容即可。

export const SITE = {
  name: 'ALTALE',
  subtitle: '[一句话副标题]',
  since: 2026,
  author: 'altale',
  // 首页大标题，用 \n 换行
  headline: '写代码，\n也写生活',
  intro: '[一两句介绍这个博客：主要写什么、写给谁看。]',
  description: '[站点描述，用于 SEO 和 RSS]',
  license: 'CC BY-NC 4.0',
};

export const NAV = [
  { no: '01', label: '首页', en: 'HOME', href: '/' },
  { no: '02', label: '归档', en: 'ARCHIVE', href: '/archive/' },
  { no: '03', label: '标签', en: 'TAGS', href: '/archive/#tags' },
  { no: '04', label: '关于', en: 'ABOUT', href: '/#about' },
];

// 首页右上“近况 / NOW”卡片
export const NOW = {
  updated: '2026-11-13',
  items: [
    { label: '在做', value: '[正在做的项目]' },
    { label: '在读', value: '[正在读的书]' },
    { label: '在学', value: '[最近在学的东西]' },
  ],
};

// 首页“通知”表，最新的放最前
export const NOTICES = [
  { date: '2026-11-13', kind: '改版', text: '站点用 Astro 重建，旧版主页下线。' },
];

// 分类：id 写进文章 frontmatter 的 category 字段
export const CATEGORIES = [
  { id: 'tech', code: 'A', name: '技术笔记', en: 'NOTES', desc: '[这个分类写什么]' },
  { id: 'life', code: 'B', name: '日常观察', en: 'JOURNAL', desc: '[这个分类写什么]' },
  { id: 'works', code: 'C', name: '制作物', en: 'PROJECTS', desc: '[这个分类写什么]' },
] as const;

export const ABOUT = {
  name: 'altale',
  bio: '[一两句自我介绍：做什么、在意什么。]',
  links: [
    { label: 'GitHub', href: 'https://github.com/altale' },
    { label: 'RSS', href: '/rss.xml' },
  ],
};
