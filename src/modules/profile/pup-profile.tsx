import { useWaxUser } from '@cryptopuppie/next-waxauth';
import useGetToken from '../../hooks/useGetToken';

const PupProfile = () => {
  const { user } = useWaxUser();
  const authData = useGetToken();

  return (
    <div className="bg-pastel-violet text-white p-12 rounded-3xl">
      <div className="flex items-center justify-between">
        <span className="font-alt uppercase tracking-wide text-xl">Pup Profile</span>

        <p className="font-medium text-lg">
          Token ID: <span>{authData?.token}</span>
        </p>
      </div>

      <div className="flex items-end justify-between mt-12">
        <div className="inline-flex items-end">
          <div className="h-28 w-28 rounded-full bg-white"></div>
          <span className="text-5xl ml-6 font-medium">{user?.wallet}</span>
        </div>

        <a className="">view on bloks</a>
      </div>
    </div>
  );
};

export default PupProfile;
