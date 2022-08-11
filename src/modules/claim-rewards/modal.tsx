import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import BaseModal from '../../components/modal';
import { useGallery } from '../gallery/provider';

const GalleryClaimRewards = () => {
  const { set } = useGallery();

  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="mx-4 py-2 px-6 rounded-full text-sm bg-orange-400 hover:bg-orange-500 text-white duration-300"
      >
        claim rewards
      </button>

      <BaseModal
        className="max-w-2xl rounded-2xl bg-white p-6 text-left"
        open={open}
        closeModal={closeModal}
      >
        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-700">
          <strong className="text-orange-500 font-black">Claim Rewards</strong> | {set.name}
        </Dialog.Title>

        <div className="my-10 px-6 text-center text-gray-700">
          <p>Thank you very much for completing the {set.name} NFTs.</p>

          <p className="text-xl font-medium mt-4">
            This section is currently not available right now.
            <br />
            Please check back again later...
          </p>
        </div>
      </BaseModal>
    </>
  );
};

export default GalleryClaimRewards;
