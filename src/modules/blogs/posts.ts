import { isDev } from '../../lib/config';

export interface PostProps {
  author: string;
  content: string;
  title: string;
  synopsis: string | null;
  poster: string | null;
  created_at: number;
  slug: string;
  key?: string; // auto added by deta base
}

export interface WhatsNewProps {
  banner: string;
  redirect: string;
  key?: string; // auto added by base
}

export const BASE_POSTS = isDev ? 'BlogPosts' : 'BLOGPOSTS';
export const BASE_WHATS_NEW = isDev ? 'DevBlogWhatsNew' : 'BlogWhatsNew';
