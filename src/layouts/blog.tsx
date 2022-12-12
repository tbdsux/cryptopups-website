import { ReactNode } from 'react';
import Container from '../components/container';
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
      <Container className="w-11/12 md:w-5/6 lg:w-4/5 xl:w-2/3 2xl:w-3/5 3xl:w-1/2">
        <PostHeader post={post} />

        <hr className="my-6 " />

        <div className=" mt-4 mb-16">{children}</div>
      </Container>
    </DefaultLayout>
  );
};

export default BlogLayout;
