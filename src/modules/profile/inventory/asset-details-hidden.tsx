import useGetAssetListingPrice from '../../../hooks/useGetAssetListingPrice';

interface AssetDetailsHiddenProps {
  data: [string, any][];
  template?: string | number;
}

const AssetDetailsHidden = ({ data, template }: AssetDetailsHiddenProps) => {
  const assetMarket = useGetAssetListingPrice(template);

  return (
    <div className="flex flex-col">
      <ul className="mt-6 px-1 h-full">
        {data.map(([i, value], index) => (
          <li key={index} className="text-sm flex items-center justify-between flex-wrap m-1">
            <span className="first-letter:uppercase lowercase underline">{i}:</span>

            <span className="font-medium">{value}</span>
          </li>
        ))}
      </ul>

      <hr className="my-3" />

      <ul className="">
        <li className="text-sm flex items-center justify-between flex-wrap m-1">
          <span className="first-letter:uppercase lowercase font-medium text-gray-700">
            Lowest Listing:
          </span>

          <span className="font-bold truncate w-full text-right">
            {assetMarket ? (Number(assetMarket?.listing_price) / 100000000).toFixed(1) : '-'} WAX
          </span>
        </li>
      </ul>
    </div>
  );
};

export default AssetDetailsHidden;
