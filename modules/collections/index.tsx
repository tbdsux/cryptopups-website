import * as waxjs from "@waxio/waxjs/dist";
import { NextSeo } from "next-seo";
import CustomPageHeader from "../../components/custom-page-header";
import CustomLayout from "../../layout/custom";

const wax = new waxjs.WaxJS("https://wax.greymass.com");

const MyCollectionsPage = () => {
  // wax cloud wallet login
  const waxWalletLogin = async () => {
    const userAccount = wax.login();

    if (userAccount) {
      // login
      fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({
          wallet: userAccount,
          type: "wax-cloud",
        }),
      })
        .then((r) => r.json())
        .then((d) => {
          console.log(d);
        })
        .catch((e) => {
          console.error(e);
        });
    }
  };

  // scatter login
  const scatterLogin = () => {};

  // anchor login
  const anchorLogin = () => {};

  return (
    <CustomLayout>
      {/* start seo */}
      <NextSeo
        title="My Collections"
        description="View your collections that you have bought from us"
      />
      {/* end seo */}

      <CustomPageHeader
        title="My Collections"
        description="View your collections that you have bought from us"
      >
        <div className="text-center mt-8">
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
          >
            Login with Scatter
          </button>
        </div>
      </CustomPageHeader>
    </CustomLayout>
  );
};

export default MyCollectionsPage;
