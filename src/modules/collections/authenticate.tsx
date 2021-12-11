/*
Authentication based from

WAX: https://developer.wax.io/waa/waxjs-demo/
Anchor: https://github.com/greymass/anchor-link-demo-multipass/ && code help from `https://caittoken.io/`
*/

import * as waxjs from '@waxio/waxjs/dist';
import AnchorLink, { LinkSession } from 'anchor-link';
import AnchorLinkBrowserTransport from 'anchor-link-browser-transport';
import useAuth from '../../hooks/useAuth';
import { useHasMounted } from '../../hooks/useHasMounted';
import { AuthUser } from '../../types/auth';
import { APIResponseProps } from '../../types/responses';

const chainId = '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4';
const endpoint = 'https://wax.greymass.com';
const dapp = 'worldofcryptopups.cf';

// wax cloud
const wax = new waxjs.WaxJS({ rpcEndpoint: endpoint, tryAutoLogin: false });

// anchor
const anchorTransport = new AnchorLinkBrowserTransport();
const anchorLink = new AnchorLink({
  transport: anchorTransport,
  verifyProofs: true,
  chains: [{ chainId: chainId, nodeUrl: endpoint }]
});

const MyCollectionsAuthenticate = () => {
  const mounted = useHasMounted();
  const { session, setSession } = useAuth();

  const logoutHandler = async () => {
    if (session?.type === 'anchor') {
      await anchorLink.clearSessions(dapp);
    }

    fetch('/api/auth/logout', {
      method: 'GET'
    }).then(() => {
      setSession(undefined);
    });
  };

  // wax cloud wallet login
  const waxWalletLogin = async () => {
    const userAccount = await wax.login();

    loginHandler(userAccount, 'wax-cloud');
  };

  // anchor login
  const anchorLogin = async () => {
    let wallet_session: LinkSession | null;

    const sessionList = await anchorLink.listSessions(dapp);
    if (sessionList && sessionList.length > 0) {
      wallet_session = await anchorLink.restoreSession(dapp);
    } else {
      wallet_session = await anchorLink
        .login(dapp)
        .then((d) => d.session)
        .catch(() => null);
    }

    if (!wallet_session) return;

    const userAccount = String(wallet_session?.auth).split('@')[0];

    // login
    loginHandler(userAccount, 'anchor');
  };

  // LOGIN WRAPPER
  const loginHandler = (userAccount: string | unknown, type: string) => {
    if (userAccount) {
      // login
      fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          wallet: userAccount,
          type: type
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((r) => r.json())
        .then((d: APIResponseProps<AuthUser>) => {
          if (d.error) {
            console.error(d);
            return;
          }
          setSession(d.data);
        })
        .catch(() => {
          console.error(
            'There was a problem trying to login! If the problem persists, please send this message to the discord server: '
          );
        });
    }
  };

  // return a blank page if not mounted, this is to prevent unnecessary render and showing of elements
  if (!mounted) return <></>;

  return (
    <>
      {session ? (
        <div className="w-4/5 lg:w-3/4 mx-auto text-sm mt-8">
          <button
            onClick={logoutHandler}
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
            onClick={waxWalletLogin}
          >
            Login with WAX Cloud Wallet
          </button>

          <button
            type="button"
            title="Authenticate your account with Anchor"
            className="m-2 py-2 px-6 rounded-md font-medium tracking-wide text-white bg-blue-500 hover:bg-blue-600"
            onClick={anchorLogin}
          >
            Login with Anchor
          </button>
        </div>
      )}
    </>
  );
};

export default MyCollectionsAuthenticate;
