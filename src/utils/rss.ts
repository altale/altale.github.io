import rss from '@astrojs/rss';
import { SITE } from '../config';
import { LANG_META, type Lang } from '../i18n';
import { getPosts, postUrl } from './posts';

export async function makeRss(lang: Lang, site: URL) {
  const posts = await getPosts(lang);
  return rss({
    title: SITE.name,
    description: SITE.description[lang],
    site,
    customData: `<language>${LANG_META[lang].html}</language>`,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: postUrl(p),
      categories: p.data.tags,
    })),
  });
}
