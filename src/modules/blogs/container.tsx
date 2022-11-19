import Image from 'next/image';
import Link from 'next/link';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import { InternalAPIResponseProps } from '../../types/responses';
import { PostProps } from './posts';

const BlogsContainer = () => {
  const { data } = useSWR<InternalAPIResponseProps<PostProps[]>>('/api/blogs', fetcher);

  return (
    <div>
      <h3>All Blogs</h3>

      <ul>
        {data ? (
          data.data
            ?.sort((x, y) => y.created_at - x.created_at)
            .map((post) => (
              <li
                className="rounded-lg border flex items-center my-3 group relative"
                key={post.slug}
              >
                <div className="w-64 h-52 relative rounded-l-lg bg-gray-200">
                  {post.poster ? (
                    <Image
                      src={post.poster}
                      alt={post.title}
                      fill
                      className="object-cover w-full h-full rounded-l-lg z-20"
                    />
                  ) : (
                    <></>
                  )}
                </div>
                <div className="w-full p-6">
                  <strong className="line-clamp-1 text-xl font-bold text-gray-800 leading-loose">
                    {post.title}
                  </strong>
                  <p className="line-clamp-2 text-gray-700">{post.synopsis}</p>

                  <div className="flex items-center justify-between mt-3">
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="text-sm py-2 px-6 rounded-lg bg-gray-400 hover:bg-gray-500 text-white duration-300"
                    >
                      Read More
                    </Link>

                    <small className="text-gray-500">
                      {new Date(post.created_at * 1000).toString()}
                    </small>
                  </div>
                </div>
              </li>
            ))
        ) : (
          <p className="mt-4 text-sm text-gray-700">loading...</p>
        )}
      </ul>
    </div>
  );
};

export default BlogsContainer;
