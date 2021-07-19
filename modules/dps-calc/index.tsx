import { useRef, useState } from "react";
import CustomPageHeader from "../../components/custom-page-header";
import CustomLayout from "../../layout/custom";
import DPS_Fetch from "./fetch";

const DPSCalculatorPage = () => {
  const [fetch, setFetch] = useState(false);
  const [wallet, setWallet] = useState("");

  const inputWaxID = useRef<HTMLInputElement>(null);

  const fetcher = () => {
    const v = inputWaxID.current?.value;
    if (!v) {
      setFetch(false);
      return;
    }

    setWallet(v.trim());
    setFetch(true);
  };

  return (
    <CustomLayout title="DPS Calculator">
      <CustomPageHeader
        title="DPS Calculator"
        description="Calculate your DPS by entering your WAX wallet below"
      >
        <div className="text-center mt-8">
          <div className="text-sm">
            <input
              ref={inputWaxID}
              type="text"
              className="py-2 px-4 rounded-xl tracking-wide border border-warmGray-400"
              placeholder="Enter your WAX id"
            />
            <button
              onClick={fetcher}
              className="py-2 px-4 rounded-xl ml-2 bg-warmGray-600 hover:bg-warmGray-700 text-white tracking-wide"
            >
              Get
            </button>
          </div>

          {/* <button className=" py-2 px-8 rounded-full text-sm">
            Authenticate Account
          </button> */}
        </div>
      </CustomPageHeader>

      <div className="py-12">
        {fetch ? (
          <DPS_Fetch wallet={wallet} />
        ) : (
          <div className="text-center tracking-wide text-sm text-warmGray-700">
            Please enter your <strong>WAX ID</strong> and click the button to
            fetch and calculate your DPS.
          </div>
        )}
      </div>
    </CustomLayout>
  );
};

export default DPSCalculatorPage;
