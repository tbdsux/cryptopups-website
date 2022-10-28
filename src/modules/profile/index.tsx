import { useAuthFunctions, useWaxUser } from '@cryptopuppie/next-waxauth';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import PageLayout from '../../layouts/page-layout';
import { AnchorLogo, WaxIcon } from '../../lib/assets';
import { isDev } from '../../lib/config';
import ProfileInventory from './inventory/container';
import MyCards from './my-cards';
import PupProfile from './pup-profile';
import SeasonDPS from './season-dps';

const ProfilePage = () => {
  const { isLoggedIn } = useWaxUser();
  const { loginWithCloudWallet, loginWithAnchor } = useAuthFunctions();

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

            <div className="text-center mt-8">
              {!isDev ? (
                <button
                  type="button"
                  title="Authenticate your account with WAX Cloud Wallet"
                  className="m-2 py-2 px-6 rounded-2xl font-medium tracking-wide text-white bg-orange-500 hover:bg-orange-600 inline-flex items-center"
                  onClick={loginWithCloudWallet}
                >
                  <Image src={WaxIcon} alt="Wax Cloud Wallet" height={32} width={32} className="" />

                  <span className="ml-2 text-sm">Login with WAX Cloud Wallet</span>
                </button>
              ) : (
                <></>
              )}

              <button
                type="button"
                title="Authenticate your account with Anchor"
                className="m-2 py-2 px-6 rounded-2xl font-medium tracking-wide text-white bg-blue-500 hover:bg-blue-600 inline-flex items-center"
                onClick={loginWithAnchor}
              >
                <Image
                  src={AnchorLogo}
                  alt="Wax Cloud Wallet"
                  height={32}
                  width={32}
                  className=""
                />

                <span className="ml-2 text-sm">Login with Anchor</span>
              </button>
            </div>
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
