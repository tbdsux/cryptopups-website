import Image from 'next/image';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import { InternalAPIResponseProps } from '../../types/responses';
import { WhatsNewProps } from './posts';

const WhatsNew = () => {
  const { data } = useSWR<InternalAPIResponseProps<WhatsNewProps | null>>(
    '/api/blogs/whats-new',
    fetcher
  );

  return (
    <>
      <strong className="text-pastel-purple italic text-lg font-black">What&apos;s New</strong>
      <div
        className={`h-72 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[34rem] 2xl:h-[38rem] 3xl:h-[42rem] w-full bg-gray-200 rounded-3xl mt-8 relative overflow-hidden ${
          data?.data ? '' : 'animate-pulse'
        }`}
      >
        {data?.data ? (
          <a href={data?.data ? data.data.redirect : '#'} className="group h-full w-full">
            <Image
              src={data.data.banner}
              alt="What's New"
              fill
              className="object-cover rounded-3xl object-center group-hover:scale-105 duration-500"
              sizes="(max-width: 768px) 83.33vw,
              (max-width: 1024px) 80vw,
              (max-width: 1280px) 66.67vw,
              (max-width: 1536px) 60vw,
              (max-width: 2048px) 50vw,
              91.67vw"
            />
          </a>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default WhatsNew;
