import { ReactNode } from 'react';
import PostHeader from '../modules/blogs/post-header';
import { PostProps } from '../modules/blogs/posts';
import DefaultLayout from './default';

export interface BlogLayoutProps {
  children: ReactNode;
  post: PostProps;
}

const BlogLayout = ({ children, post }: BlogLayoutProps) => {
  return (
    <DefaultLayout>
      <PostHeader post={post} />

      <hr className="my-6 w-11/12 md:w-5/6 lg:w-4/5 xl:w-2/3 mx-auto" />

      <div className="w-11/12 md:w-5/6 lg:w-4/5 xl:w-2/3 mx-auto mt-4 mb-32">{children}</div>
    </DefaultLayout>
  );
};

export default BlogLayout;
