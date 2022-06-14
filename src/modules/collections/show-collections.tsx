import useSWR from 'swr';
import Container from '../../components/container';
import useAuth from '../../hooks/useAuth';
import fetcher from '../../lib/fetcher';
import { PUPITEMS_API, PUPPYCARDS_API, PUPSKINS_API } from '../dps-calc/apilinks';
import { WAXResponseProps } from '../dps-calc/apitypes';
import ShowCollectionsItems from './show-collections-items';

const ShowCollections = () => {
  const { session } = useAuth();
  const wallet = session?.wallet;

  // pupskins
  const { data: pupskinsData, error: pupsSkinsError } = useSWR<WAXResponseProps>(
    wallet ? PUPSKINS_API.replace('{{owner}}', wallet) : null,
    fetcher,
    { revalidateOnFocus: false } // do not revalidate on focus
  );

  // pupcards
  const { data: puppycardsData, error: puppyCardsError } = useSWR<WAXResponseProps>(
    wallet ? PUPPYCARDS_API.replace('{{owner}}', wallet) : null,
    fetcher,
    { revalidateOnFocus: false } // do not revalidate on focus
  );

  // pupitems
  const { data: pupitemsData, error: pupitemsError } = useSWR<WAXResponseProps>(
    wallet ? PUPITEMS_API.replace('{{owner}}', wallet) : null,
    fetcher,
    { revalidateOnFocus: false } // do not revalidate on focus
  );

  if (!pupskinsData || !puppycardsData || !pupitemsData) {
    return <div className="text-sm tracking-wide text-center">Fetching...</div>;
  }
  return (
    <Container className="w-5/6">
      <div className="my-4">
        <h4 className="text-warmGray-700 text-2xl font-black tracking-wide leading-loose">
          Puppy Cards
        </h4>
        <ShowCollectionsItems data={puppycardsData.data} />
      </div>

      <div className="my-4">
        <h4 className="text-warmGray-700 text-2xl font-black tracking-wide leading-loose">
          Pup Skins
        </h4>
        <ShowCollectionsItems data={pupskinsData.data} />
      </div>

      <div className="my-4">
        <h4 className="text-warmGray-700 text-2xl font-black tracking-wide leading-loose">
          Pup Items
        </h4>
        <ShowCollectionsItems data={pupitemsData.data} />
      </div>
    </Container>
  );
};

export default ShowCollections;
