import useSWR from "swr";
import Container from "../../components/container";
import { WAXResponseProps } from "./apitypes";
import DPS_Calculate from "./calculate";
import ShowItems from "./show-items";

type DPS_FetchProps = {
  wallet: string;
};

const PUPSKINS_API = `https://wax.api.atomicassets.io/atomicassets/v1/assets?owner={{owner}}&collection_name=cryptopuppie&schema_name=pupskincards&page=1&limit=1000&order=desc&sort=asset_id`;
const PUPPYCARDS_API = `https://wax.api.atomicassets.io/atomicassets/v1/assets?owner={{owner}}&collection_name=cryptopuppie&schema_name=puppycards&page=1&limit=1000&order=desc&sort=asset_id`;
const PUPITEMS_API = `https://wax.api.atomicassets.io/atomicassets/v1/assets?owner={{owner}}&collection_name=cryptopuppie&schema_name=pupitems&page=1&limit=1000&order=desc&sort=asset_id`;

const DPS_Fetch = ({ wallet }: DPS_FetchProps) => {
  // pupskins
  const { data: pupskinsData, error: pupsSkinsError } =
    useSWR<WAXResponseProps>(
      wallet ? PUPSKINS_API.replace("{{owner}}", wallet) : null
    );

  // pupcards
  const { data: puppycardsData, error: puppyCardsError } =
    useSWR<WAXResponseProps>(
      wallet ? PUPPYCARDS_API.replace("{{owner}}", wallet) : null
    );

  // pupitems
  const { data: pupitemsData, error: pupitemsError } = useSWR<WAXResponseProps>(
    wallet ? PUPITEMS_API.replace("{{owner}}", wallet) : null
  );

  if (!pupskinsData || !puppycardsData || !pupitemsData) {
    return <div>Fetching...</div>;
  }

  if (pupsSkinsError || puppyCardsError || pupitemsError) {
    return <div>Request failed, maybe WAX ID is wrong?</div>;
  }

  return (
    <Container className="w-5/6 mx-auto">
      <DPS_Calculate
        owner={wallet}
        data={{
          pupskins: pupskinsData.data,
          puppycards: puppycardsData.data,
          pupitems: pupitemsData.data,
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
