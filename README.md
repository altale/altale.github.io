# altale.github.io

基于 Astro 的个人博客，推送到 `master` 后由 GitHub Actions 自动构建并发布到 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
```

## 语言

站点是中英双语，默认英文：

- 英文：`/`、`/archive/`、`/posts/<slug>/`、`/rss.xml`
- 中文：`/zh/`、`/zh/archive/`、`/zh/posts/<slug>/`、`/zh/rss.xml`

页头右侧有 EN / 中文 切换。界面文字在 `src/i18n.ts`。

## 改站点文字

站名、首页标题、近况、通知、分类、关于等都在 `src/config.ts`，每段都有 `en` / `zh` 两个版本，方括号里的是占位。

## 写文章

英文文章放 `src/content/posts/en/`，中文放 `src/content/posts/zh/`。文件名就是网址：`en/hello.md` → `/posts/hello/`，`zh/hello.md` → `/zh/posts/hello/`。

两个目录里文件名相同，就算同一篇文章的两个语言版本：语言切换会互相跳转，编号也相同。只写一种语言也可以，切换语言时会回到另一语言的首页。

frontmatter 示例：

```md
---
title: 文章标题
description: 一句话摘要（可选）
date: 2026-11-13
category: tech        # tech / life / works，对应 config.ts 里的分类
tags: [astro, 部署]
cover: /images/xxx.jpg # 可选，图片放 public/images/
draft: false          # true 时只在本地 dev 可见
---

## 二级标题会自动编号并进入目录

<div class="note">这样写会渲染成“提示 / NOTE”框。</div>
```

文章编号（No.001…）按首次发布日期自动生成。
