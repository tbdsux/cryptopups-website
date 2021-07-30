import Image from 'next/image';
import { Datum } from '../dps-calc/apitypes';

type ShowCollectionsItemsProps = {
  data: Datum[];
};

const ShowCollectionsItems = ({ data }: ShowCollectionsItemsProps) => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 p-6 h-112 py-4 rounded-xl overflow-auto border">
      {data.map((k, index) => (
        <li key={index} className="inline-flex flex-col items-center shadow-2xl rounded-xl py-2">
          <Image
            src={`https://wax.atomichub.io/ipfs/${k.data.img}`}
            height="400"
            width="300"
            objectFit="contain"
            alt={k.name.trim()}
          />
          <span>{k.name.trim()}</span>
        </li>
      ))}
    </ul>
  );
};

export default ShowCollectionsItems;
