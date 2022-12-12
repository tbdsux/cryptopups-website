import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import BlogLayout from '../../layouts/blog';
import { ApolProfile } from '../../lib/assets';
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

      <hr className="my-8" />

      <div className="text-center">
        <Image src={ApolProfile} height={100} width={100} alt="Apple A. Apol" className="mx-auto" />

        <strong className="font-black text-2xl text-pastel-purple">Apple A. Apol</strong>
        <p className="text-gray-600 text-lg my-1">
          Mayor of Puptown, god of all things pup, dog treat connoisseur, and{' '}
          <a
            className="text-pastel-red hover:underline font-semibold"
            href="https://twitter.com/Rustytheredpan2"
          >
            Rusty&apos;s
          </a>{' '}
          punching bag.
        </p>
        <ul className="flex items-center justify-center">
          <li>
            <a
              className="text-pastel-red hover:underline font-medium"
              href="https://twitter.com/apppllleee_pie"
            >
              Twitter
            </a>
          </li>

          <span className="mx-2 text-gray-600">|</span>

          <li>
            <a
              className="text-pastel-red hover:underline font-medium"
              href="https://discord.io/worldofcryptopups"
            >
              Discord
            </a>
          </li>

          <span className="mx-2 text-gray-600">|</span>

          <li>
            <a
              className="text-pastel-red hover:underline font-medium"
              href="https://www.twitch.tv/apppllleee_pie"
            >
              Twitch
            </a>
          </li>
        </ul>
      </div>
    </BlogLayout>
  );
};

export default PostPage;
