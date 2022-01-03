import { RefObject, useEffect } from 'react';
import useSWR from 'swr';
import Container from '../../components/container';
import { PUPITEMS_API, PUPPYCARDS_API, PUPSKINS_API } from './apilinks';
import { WAXResponseProps } from './apitypes';
import DPS_Calculate from './calculate';
import ShowItems from './show-items';

type DPS_FetchProps = {
  wallet: string;
  btnGetRef: RefObject<HTMLButtonElement>;
  data?: {
    pupskins: WAXResponseProps;
    pupcards: WAXResponseProps;
    pupitems: WAXResponseProps;
  };
};

const DPS_Fetch = ({ wallet, btnGetRef, data }: DPS_FetchProps) => {
  // pupskins
  const { data: pupskinsData } = useSWR<WAXResponseProps>(
    wallet ? PUPSKINS_API.replace('{{owner}}', wallet) : null,
    { revalidateOnFocus: false, fallbackData: data?.pupskins } // do not revalidate on focus
  );

  // pupcards
  const { data: puppycardsData } = useSWR<WAXResponseProps>(
    wallet ? PUPPYCARDS_API.replace('{{owner}}', wallet) : null,
    { revalidateOnFocus: false, fallbackData: data?.pupcards } // do not revalidate on focus
  );

  // pupitems
  const { data: pupitemsData } = useSWR<WAXResponseProps>(
    wallet ? PUPITEMS_API.replace('{{owner}}', wallet) : null,
    { revalidateOnFocus: false, fallbackData: data?.pupitems } // do not revalidate on focus
  );

  useEffect(() => {
    if (pupskinsData && puppycardsData && pupitemsData) {
      if (btnGetRef.current) {
        btnGetRef.current.innerHTML = 'Get';
        btnGetRef.current.disabled = false;
      }
      // setDone(true);
    }
  }, [btnGetRef, pupitemsData, puppycardsData, pupskinsData]);

  if (!pupskinsData || !puppycardsData || !pupitemsData) {
    return <div className="text-sm tracking-wide text-center">Fetching...</div>;
  }

  // if (pupsSkinsError || puppyCardsError || pupitemsError) {
  //   return (
  //     <div className="text-sm tracking-wide text-center">
  //       Request failed, maybe WAX ID is wrong?
  //       {pupsSkinsError}
  //     </div>
  //   );
  // }

  return (
    <Container className="w-5/6 2xl:w-3/4 3xl:w-2/3 mx-auto">
      <h3 className="mb-4 font-bold tracking-wide text-neutral-500">@{wallet}</h3>

      <DPS_Calculate
        owner={wallet}
        data={{
          pupskins: pupskinsData.data,
          puppycards: puppycardsData.data,
          pupitems: pupitemsData.data
        }}
      />

      <hr className="my-4" />

      {puppycardsData.data.length > 0 && (
        <div className="my-4 w-4/5 mx-auto">
          <h4 className="text-warmGray-700 text-2xl font-black tracking-wide leading-loose">
            Puppy Cards
          </h4>

          <ShowItems owner={wallet} data={puppycardsData.data} />
        </div>
      )}

      {pupskinsData.data.length > 0 && (
        <div className="my-4 w-4/5 mx-auto">
          <h4 className="text-warmGray-700 text-2xl font-black tracking-wide leading-loose">
            Pup Skins
          </h4>

          <ShowItems owner={wallet} data={pupskinsData.data} />
        </div>
      )}

      {pupitemsData.data.length > 0 && (
        <div className="my-4 w-4/5 mx-auto">
          <h4 className="text-warmGray-700 text-2xl font-black tracking-wide leading-loose">
            Pup Items
          </h4>

          <ShowItems owner={wallet} data={pupitemsData.data} />
        </div>
      )}
    </Container>
  );
};

export default DPS_Fetch;
