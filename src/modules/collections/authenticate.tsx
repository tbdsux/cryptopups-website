/*
Authentication based from

WAX: https://developer.wax.io/waa/waxjs-demo/
Anchor: https://github.com/greymass/anchor-link-demo-multipass/ && code help from `https://caittoken.io/`
*/

import { useAuthFunctions, useWaxUser } from '@cryptopuppie/next-waxauth';
import { useHasMounted } from '../../hooks/useHasMounted';

const MyCollectionsAuthenticate = () => {
  const mounted = useHasMounted();

  const { isLoggedIn } = useWaxUser();
  const { logout, loginWithAnchor, loginWithCloudWallet } = useAuthFunctions();

  // return a blank page if not mounted, this is to prevent unnecessary render and showing of elements
  if (!mounted) return <></>;

  return (
    <>
      {isLoggedIn ? (
        <div className="w-4/5 lg:w-3/4 mx-auto text-sm mt-8">
          <button
            onClick={logout}
            className="hover:underline text-right bg-stone-100 hover:bg-stone-200 py-1 px-3 rounded-full text-xs float-right"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="text-center mt-8">
          <button
            type="button"
            title="Authenticate your account with WAX Cloud Wallet"
            className="m-2 py-2 px-6 rounded-md font-medium tracking-wide text-white bg-orange-500 hover:bg-orange-600"
            onClick={loginWithCloudWallet}
          >
            Login with WAX Cloud Wallet
          </button>

          <button
            type="button"
            title="Authenticate your account with Anchor"
            className="m-2 py-2 px-6 rounded-md font-medium tracking-wide text-white bg-blue-500 hover:bg-blue-600"
            onClick={loginWithAnchor}
          >
            Login with Anchor
          </button>
        </div>
      )}
    </>
  );
};

export default MyCollectionsAuthenticate;
