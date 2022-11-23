import useGetUserAssets from '../../../hooks/useGetUserAssets';
import AssetList from './asset-list';
import AssetsLoadingPlaceholder from './loading';
import { useInventory } from './provider';

const ShowAssets = () => {
  const { category, rarity, pupname } = useInventory();
  const assets = useGetUserAssets();

  return (
    <div className="h-screen overflow-auto p-6 mt-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-7 gap-6 lg:gap-8">
        {assets ? (
          assets
            .filter((i) => {
              if (category != 'None') {
                return category == i.schema.schema_name;
              }

              return true;
            })
            .filter((i) => {
              if (rarity != 'None') {
                return (
                  rarity == i.data.League?.toLowerCase() || rarity == i.data.league?.toLowerCase()
                );
              }

              return true;
            })
            .filter((i) => {
              if (pupname != 'None') {
                return (
                  i.data['Item Owner']?.toLowerCase().includes(pupname?.toLowerCase()) || // this filter is for pupitems
                  i.data['item owner']?.toLowerCase().includes(pupname?.toLowerCase()) || // this filter is for pupitems
                  i.data.name.toLowerCase().includes(pupname?.toLowerCase()) // filter for both puppycards and pupskincards
                );
              }

              return true;
            })
            .map((i, index) => <AssetList key={index} asset={i} />)
        ) : (
          <AssetsLoadingPlaceholder />
        )}
      </ul>
    </div>
  );
};

export default ShowAssets;
