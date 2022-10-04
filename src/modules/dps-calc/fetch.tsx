import { IAsset } from '@cryptopuppie/useatomicassets';
import { RefObject, useEffect } from 'react';
import Container from '../../components/container';
import useGetSchemaAssets from '../../hooks/useGetSchemaAssets';
import DPS_Calculate from './calculate';
import ShowItems from './show-items';

type DPS_FetchProps = {
  wallet: string;
  btnGetRef: RefObject<HTMLButtonElement>;
  data?: {
    pupskins: IAsset[];
    pupcards: IAsset[];
    pupitems: IAsset[];
  };
};

const DPS_Fetch = ({ wallet, btnGetRef, data }: DPS_FetchProps) => {
  const pupskins = useGetSchemaAssets('pupskincards', wallet, data?.pupskins);
  const puppycards = useGetSchemaAssets('puppycards', wallet, data?.pupcards);
  const pupitems = useGetSchemaAssets('pupitems', wallet, data?.pupitems);

  useEffect(() => {
    if (pupskins && puppycards && pupitems) {
      if (btnGetRef.current) {
        btnGetRef.current.innerHTML = 'Get';
        btnGetRef.current.disabled = false;
      }
      // setDone(true);
    }
  }, [btnGetRef, pupitems, puppycards, pupskins]);

  if (!pupskins || !puppycards || !pupitems) {
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
          pupskins: pupskins,
          puppycards: puppycards,
          pupitems: pupitems
        }}
      />

      <hr className="my-4" />

      {puppycards.length > 0 && (
        <div className="my-4 md:w-4/5 mx-auto">
          <h4 className="text-warmGray-700 text-2xl font-black tracking-wide leading-loose">
            Puppy Cards
          </h4>

          <ShowItems owner={wallet} data={puppycards} />
        </div>
      )}

      {pupskins.length > 0 && (
        <div className="my-4 md:w-4/5 mx-auto">
          <h4 className="text-warmGray-700 text-2xl font-black tracking-wide leading-loose">
            Pup Skins
          </h4>

          <ShowItems owner={wallet} data={pupskins} />
        </div>
      )}

      {pupitems.length > 0 && (
        <div className="my-4 md:w-4/5 mx-auto">
          <h4 className="text-warmGray-700 text-2xl font-black tracking-wide leading-loose">
            Pup Items
          </h4>

          <ShowItems owner={wallet} data={pupitems} />
        </div>
      )}
    </Container>
  );
};

export default DPS_Fetch;
