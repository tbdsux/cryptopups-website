import { NextSeo } from 'next-seo';
import { useEffect, useRef, useState } from 'react';
import CustomPageHeader from '../../components/custom-page-header';
import CustomLayout from '../../layouts/custom';
import { WAXResponseProps } from './apitypes';
import DPS_Fetch from './fetch';
import DPSListTable from './table-list';

type DPSCalculatorPageProps = {
  wallet?: string;
  data?: {
    pupitems: WAXResponseProps;
    pupcards: WAXResponseProps;
    pupskins: WAXResponseProps;
  };
};

const DPSCalculatorPage = ({ wallet: w, data }: DPSCalculatorPageProps) => {
  const [fetch, setFetch] = useState(w ? true : false);
  const [done, setDone] = useState(false);
  const [wallet, setWallet] = useState(w || '');

  const inputWaxID = useRef<HTMLInputElement>(null);
  const btnGetRef = useRef<HTMLButtonElement>(null);

  const fetcher = () => {
    // disable the button
    if (btnGetRef.current) {
      btnGetRef.current.disabled = true;
      btnGetRef.current.innerHTML = 'Fetching...';
    }

    const v = inputWaxID.current?.value;
    if (!v) {
      setFetch(false);
      return;
    }

    setWallet(v.trim());
    setFetch(true);
  };

  useEffect(() => {
    if (done) {
      if (btnGetRef.current) {
        btnGetRef.current.innerHTML = 'Get';
        btnGetRef.current.disabled = false;
        setDone(false);
      }
    }
  }, [done]);

  return (
    <CustomLayout>
      {/* start seo */}
      <NextSeo
        title="DPS Calculator"
        description="Calculate your DPS by entering your WAX wallet below"
        openGraph={{
          title: 'DPS Calculator',
          description: 'Calculate your DPS by entering your WAX wallet below'
        }}
      />
      {/* end seo */}

      <CustomPageHeader
        title="DPS Calculator"
        description="Calculate your DPS by entering your WAX wallet below"
      >
        <div className="text-center mt-8">
          <div>
            <input
              ref={inputWaxID}
              type="text"
              className="py-2 px-4 rounded-xl tracking-wide border border-warmGray-400"
              placeholder="Enter your WAX id"
              defaultValue={wallet}
            />
            <button
              onClick={fetcher}
              ref={btnGetRef}
              className="py-2 px-4 rounded-xl ml-2 bg-warmGray-600 hover:bg-warmGray-700 text-white tracking-wide disabled:opacity-80"
            >
              Get
            </button>
          </div>

          {/* <button className=" py-2 px-8 rounded-full text-sm">
            Authenticate Account
          </button> */}
        </div>
      </CustomPageHeader>

      <div className="py-8">
        {fetch ? (
          <DPS_Fetch wallet={wallet} btnGetRef={btnGetRef} data={data} />
        ) : (
          <div className="text-center tracking-wide text-sm text-warmGray-700">
            Please enter your <strong>WAX ID</strong> and click the button to fetch and calculate
            your DPS.
          </div>
        )}
      </div>

      <hr />

      <DPSListTable />
    </CustomLayout>
  );
};

export default DPSCalculatorPage;
