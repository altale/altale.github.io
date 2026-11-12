# altale.github.io

基于 Astro 的个人博客，推送到 `master` 后由 GitHub Actions 自动构建并发布到 GitHub Pages。

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 输出到 dist/
```

## 改站点文字

站名、首页标题、近况、通知、分类、关于等都在 `src/config.ts`，方括号里的是占位。

## 写文章

在 `src/content/posts/` 下新建 `.md`（文件名就是网址，如 `hello.md` → `/posts/hello/`）：

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

文章编号（No.001…）按发布日期自动生成。
