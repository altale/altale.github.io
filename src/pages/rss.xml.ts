import type { APIRoute } from 'astro';
import { makeRss } from '../utils/rss';

export const GET: APIRoute = ({ site }) => makeRss('en', site!);
