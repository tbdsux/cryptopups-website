import Image from 'next/image';
import { PostProps } from './posts';

export interface PostHeaderProps {
  post: PostProps;
}

const PostHeader = ({ post }: PostHeaderProps) => {
  return (
    <div className="pt-36">
      {post.poster ? (
        <div className="relative rounded-3xl h-72 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[34rem] 2xl:h-[38rem] 3xl:h-[42rem] w-full mb-6">
          <Image
            src={post.poster}
            fill
            alt={post.title}
            priority
            className="h-full w-full object-cover rounded-3xl"
            sizes="(max-width: 768px) 83.33vw,
              (max-width: 1024px) 80vw,
              (max-width: 1280px) 66.67vw,
              (max-width: 1536px) 60vw,
              (max-width: 2048px) 50vw,
              91.67vw"
          />
        </div>
      ) : (
        <></>
      )}

      <h3 className="text-4xl font-black text-pastel-purple">{post.title}</h3>
      <p className="py-1 text-gray-700">{post.synopsis}</p>

      <small className="text-gray-500 font-medium italic">
        @{post.author} | {new Date(post.created_at * 1000).toString()}
      </small>
    </div>
  );
};

export default PostHeader;
