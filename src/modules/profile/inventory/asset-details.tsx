import { IAsset } from '@cryptopuppie/useatomicassets';
import { InformationCircleIcon, XIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import AssetDetailsHidden from './asset-details-hidden';

interface AssetListDetailsProps {
  asset: IAsset;
}

const filteredKeys = ['name', 'img', 'backimg', 'authenticity card', 'description', 'video'];

const AssetListDetails = ({ asset }: AssetListDetailsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const filterData = Object.entries(asset.data).filter(
    ([key]) => !filteredKeys.includes(key.toLowerCase())
  );

  return (
    <>
      {isOpen ? (
        <div className="absolute z-50 h-full w-full bg-gray-100 p-2 rounded-t-lg">
          <button onClick={close} className="absolute top-1 right-1 z-40">
            <XIcon aria-hidden="true" className="h-5 w-5" />
          </button>

          <AssetDetailsHidden data={filterData} template={asset.template?.template_id} />
        </div>
      ) : (
        <></>
      )}

      <span className="absolute top-1 left-1 z-40 text-xs font-bold bg-gray-300 p-1 rounded-lg">
        #{asset.template_mint}
      </span>

      <button onClick={open} className="absolute top-1 right-1 text-black z-40">
        <InformationCircleIcon aria-hidden="true" className="h-5 w-5" />
      </button>
    </>
  );
};

export default AssetListDetails;
