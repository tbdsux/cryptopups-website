import { useWaxUser } from '@cryptopuppie/next-waxauth';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import Countdown from 'react-countdown';
import BaseModal from '../../components/modal';
import useGetContractConfig from '../../hooks/ueGetContractConfig';
import { useGetUserRewardsConfig } from '../../hooks/useGetRewardsConfig';
import { useGallery } from '../gallery/provider';
import ClaimRewardsButton from './claim-button';
import ClaimRewardsForm from './form';
import PreviewRewardModal from './preview-reward';
import ClaimRewardProvider from './provider';

const GalleryClaimRewards = () => {
  const { user } = useWaxUser();
  const { set } = useGallery();
  const userConfig = useGetUserRewardsConfig();
  const contractConfig = useGetContractConfig();

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

          <div className="inline-flex items-center">
            {contractConfig?.blacklisted_wallets.includes(user?.wallet ?? '') ? (
              <></>
            ) : (
              <>
                <PreviewRewardModal />

                <ClaimRewardsButton />
              </>
            )}
          </div>
        </div>

        <div className="my-10 px-6 text-center text-gray-700">
          {contractConfig?.blacklisted_wallets.includes(user?.wallet ?? '') ? (
            <strong className="text-lg">
              YOU HAVE BEEN BANNED FOR MALICIOUS INTENT ON USING OUR SERVICE. <br /> PLEASE CONTACT
              US THROUGH DISCORD IF THIS WAS A MISTAKE.
            </strong>
          ) : (
            <Countdown
              date={new Date(set.unlock_date * 1000)}
              renderer={({ days, hours, minutes, seconds, completed }) => {
                if (completed) {
                  return (
                    <>
                      {userConfig?.setids.includes(set.setid) ? (
                        <>
                          <p>You have alreay claimed the rewards for completing this set.</p>
                        </>
                      ) : (
                        <>
                          <p>Thank you very much for completing the {set.title} NFTs.</p>
                          <ClaimRewardsForm />
                        </>
                      )}
                    </>
                  );
                }

                return (
                  <div>
                    <span className="text-lg">Claimable at:</span>

                    <p className="font-bold tracking-wide text-2xl">
                      {days != 0 ? `${days} days` : ''} {hours}h : {minutes}m : {seconds}s
                    </p>
                  </div>
                );
              }}
            />
          )}
        </div>
      </BaseModal>
    </ClaimRewardProvider>
  );
};

export default GalleryClaimRewards;
