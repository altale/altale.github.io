// 站点的文字都集中在这里改。每段文字都有 en / zh 两个版本，方括号里的是占位。

export const SITE = {
  name: 'ALTALE',
  author: 'altale',
  license: 'CC BY-NC 4.0',
  // 页眉站名下方的一句身份小字
  identity: { en: '[ONE-LINE IDENTITY, E.G. DEVELOPER]', zh: '[一句身份，如 DEVELOPER]' },
  description: { en: '[Site description for SEO and RSS]', zh: '[站点描述，用于 SEO 和 RSS]' },
};

// 首页侧栏 PROFILE
export const PROFILE = {
  avatar: 'https://github.com/altale.png',
  bio: {
    en: '[Two or three sentences about yourself: what you are working on, what you care about, and what you will write about here.]',
    zh: '[两三句自我介绍：现在在做什么、关心什么、这里会写些什么。]',
  },
  // 信息表：mono 表示值用等宽字体；href 可选
  info: [
    { key: 'GITHUB', value: { en: '@altale', zh: '@altale' }, href: 'https://github.com/altale', mono: true },
    { key: 'MAIL', value: { en: '[Email]', zh: '[邮箱]' }, mono: true },
    { key: 'BASED', value: { en: '[Location]', zh: '[所在地]' } },
  ],
};

// 首页“最近的 PR”从这个 GitHub 用户拉取（构建时）
export const GITHUB = {
  user: 'altale',
  prCount: 5,
};

// 侧栏 MENU 与页眉导航共用；href 为站内路径时会自动加语言前缀
export const NAV = [
  { no: '01', href: '/#posts', label: { en: 'Writing', zh: '文章' }, sub: 'WRITING' },
  { no: '02', href: '/#prs', label: { en: 'PRs', zh: 'PR' }, sub: 'GITHUB' },
  { no: '03', href: '/rss.xml', label: { en: 'Subscribe', zh: '订阅' }, sub: 'RSS' },
];
