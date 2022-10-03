import { IAsset } from '@cryptopuppie/useatomicassets';
import Image from 'next/image';
import AssetListDetails from './asset-details';

interface AssetListProps {
  asset: IAsset;
}

const AssetList = ({ asset }: AssetListProps) => {
  return (
    <li className="mx-auto flex flex-col border rounded-lg text-center relative bg-gray-100">
      <div className="relative rounded-t-lg">
        <AssetListDetails asset={asset} />

        <div className="p-2">
          <Image
            src={`https://atomichub-ipfs.com/ipfs/${asset.data.img}`}
            alt={asset.name}
            height="300"
            width="200"
            className={`cursor-pointer z-30`}
            objectFit="contain"
          />
        </div>
      </div>

      <hr />

      <strong className="mt-1 py-3 text-stone-900">{asset.name}</strong>
    </li>
  );
};

export default AssetList;
