import { useWaxUser } from '@cryptopuppie/next-waxauth';
import Image from 'next/image';
import useGetToken from '../../hooks/useGetToken';
import useGetWaxProfile from '../../hooks/useGetWaxProfile';

const PupProfile = () => {
  const { user } = useWaxUser();
  const authData = useGetToken();
  const profile = useGetWaxProfile();

  return (
    <div className="bg-pastel-violet text-white p-12 rounded-3xl">
      <div className="flex items-center justify-between flex-wrap">
        <span className="font-alt uppercase tracking-wide text-xl">Pup Profile</span>

        <p className="font-medium w-full sm:w-auto text-right text-lg">
          Token ID: <span>{authData?.token}</span>
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
