import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import BlogLayout from '../../layouts/blog';
import { PostProps } from './posts';

export interface PostPageProps {
  post: PostProps;
}

const PostPage: NextPage<PostPageProps> = ({ post }) => {
  return (
    <BlogLayout post={post}>
      <NextSeo title={`${post.title} - Blogs`} description={post.synopsis ?? ''} />

      <div className="prose xl:prose-lg max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </BlogLayout>
  );
};

export default PostPage;
