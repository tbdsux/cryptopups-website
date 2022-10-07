import { useWaxUser } from '@cryptopuppie/next-waxauth';
import { CheckIcon, DuplicateIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useGetToken from '../../hooks/useGetToken';
import useGetWaxProfile from '../../hooks/useGetWaxProfile';

const PupProfile = () => {
  const { user } = useWaxUser();
  const authData = useGetToken();
  const profile = useGetWaxProfile();

  const [copied, setCopied] = useState(false);

  const copyToken = () => {
    if (!authData) return;

    navigator.clipboard.writeText(authData.token);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  }, [copied]);

  return (
    <div className="bg-pastel-violet text-white p-12 rounded-3xl">
      <div className="flex items-center justify-between flex-wrap">
        <span className="font-alt uppercase tracking-wide text-xl">Pup Profile</span>

        <p className="font-medium w-full sm:w-auto text-right sm:text-lg flex items-center justify-end">
          Token ID:
          <span className="inline-flex items-center ml-2">
            {authData?.token}
            <button
              onClick={copyToken}
              title={copied ? 'Token has been copied' : 'Copy Token'}
              className=" ml-1"
            >
              {copied ? (
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              ) : (
                <DuplicateIcon aria-hidden="true" className="h-5 w-5" />
              )}
            </button>
          </span>
        </p>
      </div>

      <div className="flex items-center md:items-end justify-center md:justify-between flex-col md:flex-row mt-12">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:items-end">
          <div className="bg-white p-1 rounded-full flex items-center justify-center">
            <Image
              src={`https://atomichub-ipfs.com/ipfs/${profile}`}
              alt={`${user?.wallet}'s avatar`}
              height={120}
              width={120}
              className="rounded-full object-contain"
            />
          </div>
          <span className="text-4xl lg:text-5xl ml-0 md:ml-6 font-medium">{user?.wallet}</span>
        </div>

        <a className="mt-4 md:mt-0">view on bloks</a>
      </div>
    </div>
  );
};

export default PupProfile;
