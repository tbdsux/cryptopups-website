import { useWaxUser } from '@cryptopuppie/next-waxauth';
import Container from '../../components/container';
import useGetSchemaAssets from '../../hooks/useGetSchemaAssets';
import ShowCollectionsItems from './show-collections-items';

const ShowCollections = () => {
  const { user } = useWaxUser();
  const wallet = user?.wallet;

  const pupskinsData = useGetSchemaAssets('pupskincards', wallet);
  const puppycardsData = useGetSchemaAssets('puppycards', wallet);
  const pupitemsData = useGetSchemaAssets('pupitems', wallet);

  if (!pupskinsData || !puppycardsData || !pupitemsData) {
    return <div className="text-sm tracking-wide text-center">Fetching...</div>;
  }

  return (
    <Container className="w-5/6">
      <div className="my-4">
        <h4 className="text-warmGray-700 text-2xl font-black tracking-wide leading-loose">
          Puppy Cards
        </h4>
        <ShowCollectionsItems data={puppycardsData} />
      </div>

      <div className="my-4">
        <h4 className="text-warmGray-700 text-2xl font-black tracking-wide leading-loose">
          Pup Skins
        </h4>
        <ShowCollectionsItems data={pupskinsData} />
      </div>

      <div className="my-4">
        <h4 className="text-warmGray-700 text-2xl font-black tracking-wide leading-loose">
          Pup Items
        </h4>
        <ShowCollectionsItems data={pupitemsData} />
      </div>
    </Container>
  );
};

export default ShowCollections;
