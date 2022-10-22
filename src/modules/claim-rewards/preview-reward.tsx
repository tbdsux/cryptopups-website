import { useGetTemplateID } from '@cryptopuppie/useatomicassets';
import { Dialog } from '@headlessui/react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useState } from 'react';
import BaseModal from '../../components/modal';
import { useGallery } from '../gallery/provider';

const PreviewRewardModal = () => {
  const { set } = useGallery();

  const { data } = useGetTemplateID({
    templateID: set.reward,
    collectionName: 'cryptopuppie'
  });

  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <>
      <BaseModal
        open={isOpen}
        closeModal={() => setIsOpen(false)}
        className="max-w-md bg-white p-6 rounded-lg text-left"
      >
        <div className="flex items-center justify-between">
          <Dialog.Title className="font-bold tracking-wide text-gray-600" as="h3">
            Preview Rewards
          </Dialog.Title>

          <button
            onClick={close}
            title="Close Preview"
            className="text-gray-400 hover:text-gray-500 duration-300"
          >
            <XCircleIcon aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-4">
          <div className="flex flex-col items-center">
            <Image
              src={`https://atomichub-ipfs.com/ipfs/${data?.immutable_data.img}`}
              alt={data?.immutable_data.name}
              height={300}
              width={200}
            />
            <p className="mt-2 font-bold tracking-wide text-gray-800">
              x{set.amount} {data?.immutable_data.name}
            </p>
          </div>
        </div>
      </BaseModal>

      <button
        onClick={open}
        title="Preview Rewards"
        className="text-sm mx-0.5 py-2 px-4 rounded-lg border hover:bg-gray-100 duration-300"
      >
        preview
      </button>
    </>
  );
};

export default PreviewRewardModal;
