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
    <a href={data?.data ? data.data.redirect : '#'} className="group">
      <strong className="text-pastel-purple italic text-lg font-black">What&apos;s New</strong>
      <div
        className={`h-96 w-full bg-gray-200 rounded-3xl mt-8 relative ${
          data?.data ? '' : 'animate-pulse'
        }`}
      >
        {data?.data ? (
          <Image
            src={data.data.banner}
            alt="What's New"
            fill
            className="object-cover h-full w-full rounded-3xl"
            sizes="(max-width: 768px) 83.33vw,
              (max-width: 1024px) 80vw,
              (max-width: 1280px) 66.67vw,
              91"
          />
        ) : (
          <></>
        )}
      </div>
    </a>
  );
};

export default WhatsNew;
