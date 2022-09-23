import { useWaxUser } from '@cryptopuppie/next-waxauth';
import { NextSeo } from 'next-seo';
import PageLayout from '../../layouts/page-layout';
import ProfileInventory from './inventory/container';
import MyCards from './my-cards';
import PupProfile from './pup-profile';
import SeasonDPS from './season-dps';

const ProfilePage = () => {
  const { isLoggedIn } = useWaxUser();

  return (
    <PageLayout title="My Collection" description="View your pawsome pup collection here!">
      {/* start seo */}
      <NextSeo title="My Collection" description="View your pawsome pup collection here!" />
      {/* end seo */}

      <div className="w-11/12 md:w-5/6 lg:w-4/5 mx-auto">
        {!isLoggedIn ? (
          <div className="text-center">
            <p className="text-lg font-medium text-gray-900">
              You are currently not authenticated. Please login with your wax wallet.
            </p>
          </div>
        ) : (
          <>
            <PupProfile />

            <SeasonDPS />

            <MyCards />

            <ProfileInventory />
          </>
        )}
      </div>
    </PageLayout>
  );
};

export default ProfilePage;
