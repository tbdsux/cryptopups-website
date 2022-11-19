import Image from 'next/image';
import { PostProps } from './posts';

export interface PostHeaderProps {
  post: PostProps;
}

const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <div className="pt-36 w-11/12 md:w-5/6 lg:w-4/5 xl:w-2/3 mx-auto">
      {post.poster ? (
        <div className="relative h-64 w-full mb-6">
          <Image src={post.poster} fill alt={post.title} className="h-full w-full object-cover" />
        </div>
      ) : (
        <></>
      )}

      <h3 className="text-4xl font-black text-pastel-purple text-justify">{post.title}</h3>

      <small className="text-gray-600 font-medium">
        @{post.author} | {new Date(post.created_at * 1000).toString()}
      </small>
    </div>
  );
};

export default PostHeader;
