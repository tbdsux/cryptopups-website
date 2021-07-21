import ScatterJS from "@scatterjs/core";
import ScatterEOS from "@scatterjs/eosjs2";
import * as waxjs from "@waxio/waxjs/dist";
import AnchorLink, { LinkSession } from "anchor-link";
import AnchorLinkBrowserTransport from "anchor-link-browser-transport";
import { Api, JsonRpc } from "eosjs";
import useAuth from "../../hooks/useAuth";
import { AuthUser } from "../../types/auth";
import { APIResponseProps } from "../../types/responses";
ScatterJS.plugins(new ScatterEOS());

const chainId =
  "1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4";
const endpoint = "https://wax.greymass.com";
const dapp = "cryptopups.cf";

// scatter
const network = ScatterJS.Network.fromJson({
  name: "WAX Blockchain",
  host: "wax.greymass.com",
  port: 443,
  protocol: "https",
  chainId: chainId,
  token: {
    symbol: "WAX",
    contract: "eosio.token",
    decimals: 8,
  },
});
const rpc = new JsonRpc(network.fullhost());

// wax cloud
const wax = new waxjs.WaxJS(endpoint, undefined, undefined, false);

// anchor
const anchorTransport = new AnchorLinkBrowserTransport();
const anchorLink = new AnchorLink({
  transport: anchorTransport,
  verifyProofs: true,
  chains: [{ chainId: chainId, nodeUrl: endpoint }],
});

const MyCollectionsAuthenticate = () => {
  const { session, setSession } = useAuth();

  const logoutHandler = async () => {
    if (session?.type === "anchor") {
      await anchorLink.clearSessions(dapp);
    }

    fetch("/api/auth/logout", {
      method: "GET",
    }).then(() => {
      setSession(undefined);
    });
  };

  // wax cloud wallet login
  const waxWalletLogin = async () => {
    const userAccount = await wax.login();

    if (userAccount) {
      // login
      fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          wallet: userAccount,
          type: "wax-cloud",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then((d: APIResponseProps<AuthUser>) => {
          setSession(d.data);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  // TODO: scatter login
  const scatterLogin = () => {
    ScatterJS.connect("WorldOfCryptopups", { network }).then(
      (connected: any) => {
        if (!connected) return console.error("no scatter");

        const eos = ScatterJS.eos(network, Api, { rpc });

        ScatterJS.login().then((id: any) => {
          if (!id) return console.error("no identity");
          const account = ScatterJS.account("eos");

          console.log(account);
        });
      }
    );
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
        .catch((e) => null);
    }

    if (!wallet_session) return;

    const userAccount = String(wallet_session?.auth).split("@")[0];

    console.log(userAccount);
  };

  return (
    <>
      {session ? (
        <div className="w-4/5 lg:w-3/4 mx-auto text-sm">
          <button
            onClick={logoutHandler}
            className="hover:underline text-right bg-gray-100 hover:bg-gray-200 py-1 px-3 rounded-full text-xs float-right"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="text-center mt-8 text-sm">
          <button
            className="mx-1 py-2 border px-6 rounded-xl"
            onClick={waxWalletLogin}
          >
            Login with Wallet
          </button>

          <button
            className="mx-1 py-2 border px-6 rounded-xl"
            onClick={anchorLogin}
          >
            Login with Anchor
          </button>

          <button
            className="mx-1 py-2 border px-6 rounded-xl"
            onClick={scatterLogin}
            disabled
          >
            Login with Scatter
          </button>
        </div>
      )}
    </>
  );
};

export default MyCollectionsAuthenticate;
