import { NextSeo } from 'next-seo';
import { useEffect, useRef, useState } from 'react';
import CustomPageHeader from '../../components/custom-page-header';
import CustomLayout from '../../layouts/custom';
import { WAXResponseProps } from './apitypes';
import DPS_Fetch from './fetch';

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
          <div className="w-full xs:w-4/5 md:w-3/4 lg:w-3/5 xl:w-1/2 mx-auto flex flex-wrap items-center justify-center">
            <input
              ref={inputWaxID}
              type="text"
              placeholder="Enter your WAX wallet address"
              maxLength={13} // <13 is wax
              className="py-3 px-4 text-neutral-800 font-bold rounded-lg tracking-wide border border-warmGray-400 w-full placeholder-neutral-400"
              defaultValue={wallet}
            />
            <button
              onClick={fetcher}
              ref={btnGetRef}
              className="py-3 px-8 rounded-lg m-2 bg-pastel-purple opacity-80 hover:opacity-100 duration-300 font-bold uppercase text-white tracking-wide disabled:opacity-80"
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
    </CustomLayout>
  );
};

export default DPSCalculatorPage;
