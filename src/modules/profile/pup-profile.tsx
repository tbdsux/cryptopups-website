import { useWaxUser } from '@cryptopuppie/next-waxauth';
import useGetToken from '../../hooks/useGetToken';

const PupProfile = () => {
  const { user } = useWaxUser();
  const authData = useGetToken();

  return (
    <div className="bg-pastel-violet text-white p-12 rounded-3xl">
      <div className="flex items-center justify-between flex-wrap">
        <span className="font-alt uppercase tracking-wide text-xl">Pup Profile</span>

        <p className="font-medium w-full text-right text-lg">
          Token ID: <span>{authData?.token}</span>
        </p>
      </div>

      <div className="flex items-center md:items-end justify-center md:justify-between flex-col md:flex-row mt-12">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:items-end">
          <div className="h-28 w-28 rounded-full bg-white"></div>
          <span className="text-4xl lg:text-5xl ml-0 md:ml-6 font-medium">{user?.wallet}</span>
        </div>

        <a className="mt-4 md:mt-0">view on bloks</a>
      </div>
    </div>
  );
};

export default PupProfile;
