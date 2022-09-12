import Image from 'next/image';
import { datumFilter } from '../../lib/datum-filter';
import { Datum } from '../dps-calc/apitypes';

type ShowCollectionsItemsProps = {
  data: Datum[];
};

const ShowCollectionsItems = ({ data: x }: ShowCollectionsItemsProps) => {
  const xdata = Object.entries(datumFilter(x));

  return (
    <ul
      className={`${
        xdata.length > 0 &&
        'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 4xl:grid-cols-8 gap-10'
      } p-6 h-112 py-4 rounded-xl overflow-auto border`}
    >
      {xdata.length > 0 ? (
        xdata.map(([, { data: k, count }], index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center shadow-2xl rounded-xl pt-1 pb-3"
          >
            <Image
              src={`https://atomichub-ipfs.com/ipfs/${k.data.img}`}
              height="400"
              width="300"
              objectFit="contain"
              alt={k.name.trim()}
            />
            <span>
              {k.name.trim()}{' '}
              {count > 1 && (
                <small>
                  <strong>(x{count})</strong>
                </small>
              )}
            </span>
          </li>
        ))
      ) : (
        <p>You have no items...</p>
      )}
    </ul>
  );
};

export default ShowCollectionsItems;
