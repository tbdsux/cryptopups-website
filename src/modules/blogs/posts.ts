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

export const BASE_POSTS = isDev ? 'BlogPosts' : 'BLOGPOSTS';
