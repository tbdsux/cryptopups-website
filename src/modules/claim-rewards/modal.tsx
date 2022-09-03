import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import BaseModal from '../../components/modal';
// import { useGetUserRewardsConfig } from '../../hooks/useGetRewardsConfig';
import { useGallery } from '../gallery/provider';
// import ClaimRewardsButton from './claim-button';
// import ClaimRewardsForm from './form';
// import PreviewRewardModal from './preview-reward';
import ClaimRewardProvider from './provider';

const GalleryClaimRewards = () => {
  const { set } = useGallery();
  // const userConfig = useGetUserRewardsConfig();

  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <ClaimRewardProvider>
      <button
        type="button"
        onClick={openModal}
        className="mx-4 py-2 px-6 rounded-full text-sm bg-orange-400 hover:bg-orange-500 text-white duration-300"
      >
        claim rewards
      </button>

      <BaseModal
        className="max-w-4xl rounded-2xl bg-white p-6 text-left"
        open={open}
        closeModal={closeModal}
      >
        <div className="flex items-center justify-between">
          <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-700">
            <strong className="text-orange-500 font-black">Claim Rewards</strong> | {set.title} Set
          </Dialog.Title>

          {/* <div className="inline-flex items-center">
            <PreviewRewardModal />

            <ClaimRewardsButton />
          </div> */}
        </div>

        <div className="my-10 px-6 text-center text-gray-700">
          {/* {userConfig?.setids.includes(set.setid) ? (
            <>
              <p>You have alreay claimed the rewards for completing this set.</p>
            </>
          ) : (
            <>
              <p>Thank you very much for completing the {set.title} NFTs.</p>
              <ClaimRewardsForm />
            </>
          )} */}
          Thank you very much for completing this NFT set. <br />
          <strong>
            This section is still not available and is still in development.
            <br /> Please check back again later...
          </strong>
        </div>
      </BaseModal>
    </ClaimRewardProvider>
  );
};

export default GalleryClaimRewards;
