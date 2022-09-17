import { IAsset } from '@cryptopuppie/useatomicassets';
import Image from 'next/image';

interface AssetListProps {
  asset: IAsset;
}

const AssetList = ({ asset }: AssetListProps) => {
  return (
    <Image
      src={`https://atomichub-ipfs.com/ipfs/${asset.data.img}`}
      alt={asset.name}
      height="300"
      width="200"
      className={`cursor-pointer`}
      objectFit="contain"
    />
  );
};

export default AssetList;
