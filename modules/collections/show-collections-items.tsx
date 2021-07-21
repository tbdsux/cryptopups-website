import Image from "next/image";
import { Datum } from "../dps-calc/apitypes";

type ShowCollectionsItemsProps = {
  data: Datum[];
};

const ShowCollectionsItems = ({ data }: ShowCollectionsItemsProps) => {
  return (
    <ul className="grid grid-cols-4 h-112 py-4 rounded-xl overflow-auto border">
      {data.map((k, index) => (
        <li key={index} className="inline-flex flex-col items-center">
          <Image
            src={`https://wax.atomichub.io/ipfs/${k.data.img}`}
            height="300"
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
