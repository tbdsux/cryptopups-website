import useGetAssetListingPrice from '../../../hooks/useGetAssetListingPrice';

interface AssetDetailsHiddenProps {
  data: [string, any][];
  template?: string | number;
}

const AssetDetailsHidden = ({ data, template }: AssetDetailsHiddenProps) => {
  const assetMarket = useGetAssetListingPrice(template);

  return (
    <div className="">
      <ul className="mt-6 flex flex-col h-full">
        {data.map(([i, value], index) => (
          <li key={index} className="text-sm flex items-center justify-between flex-wrap m-1">
            <span className="text-gray-600 first-letter:uppercase lowercase underline">{i}:</span>

            <span className="font-medium text-right">{value}</span>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-0">
        <hr className="my-3" />

        <ul className="mb-2">
          <li className="text-sm flex items-center justify-between flex-wrap m-1">
            <span className="first-letter:uppercase lowercase font-medium text-gray-700">
              Lowest Listing price:
            </span>

            <span className="font-bold truncate w-full text-left ml-4">
              {assetMarket ? (Number(assetMarket?.listing_price) / 100000000).toFixed(1) : '-'} WAX
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AssetDetailsHidden;
