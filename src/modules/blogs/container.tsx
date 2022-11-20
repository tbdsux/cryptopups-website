import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import { InternalAPIResponseProps } from '../../types/responses';
import { PostProps } from './posts';
import WhatsNew from './whats-new';

const BlogsContainer = () => {
  const { data } = useSWR<InternalAPIResponseProps<PostProps[]>>('/api/blogs', fetcher);

  return (
    <div>
      <WhatsNew />

      <div className="mt-8">
        <strong className="text-pastel-purple italic text-lg font-black">All Blogs</strong>

        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 mt-8">
          {data ? (
            data.data
              ?.sort((x, y) => y.created_at - x.created_at)
              .map((post) => (
                <li
                  className="rounded-2xl flex flex-col group relative shadow-xl border border-gray-100"
                  key={post.slug}
                >
                  <div className="w-full h-52 relative rounded-t-2xl bg-gray-200">
                    {post.poster ? (
                      <Image
                        src={post.poster}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 83.33vw,
              (max-width: 1024px) 80vw,
              (max-width: 1280px) 66.67vw,
              (max-width: 1536px) 60vw,
              (max-width: 2048px) 50vw,
              91.67vw"
                        className="object-cover w-full h-full rounded-t-2xl z-20"
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="w-full p-6">
                    <strong className="line-clamp-3 text-xl font-bold text-gray-800">
                      {post.title}
                    </strong>

                    <p className="line-clamp-2 text-gray-700 my-1">{post.synopsis}</p>

                    <p className="text-right my-2">
                      <small className="text-gray-500">
                        {new Date(post.created_at * 1000).toDateString()}
                      </small>
                    </p>

                    <Link
                      href={`/blogs/${post.slug}`}
                      className="text-sm py-2 px-6 rounded-full font-medium bg-orange-400 hover:bg-orange-500 text-white duration-300"
                    >
                      Read more
                    </Link>
                  </div>
                </li>
              ))
          ) : (
            <p className="mt-4 text-sm text-gray-700">loading...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default BlogsContainer;
