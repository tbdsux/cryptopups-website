import { useWaxUser } from '@cryptopuppie/next-waxauth';
import { TransactResult } from '@cryptopuppie/useeoschain';
import { Dialog } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { toast } from 'react-toastify';
import BaseModal from '../../components/modal';
import useGetOwnedTemplates from '../../hooks/useGetOwnedTemplates';
import { useGetUserRewardsConfig } from '../../hooks/useGetRewardsConfig';
import { bloks } from '../../lib/config';
import { useGallery } from '../gallery/provider';
import { useClaimReward } from './provider';

const ClaimRewardsButton = () => {
  const { user } = useWaxUser();
  const { set, images } = useGallery();
  const { selections } = useClaimReward();
  const templates = useGetOwnedTemplates();
  const userConfig = useGetUserRewardsConfig();

  // state and props for the transaction modal
  const [isOpen, setIsOpen] = useState(false);
  const [transaction, setTransaction] = useState<TransactResult | undefined>(undefined);

  const filterImages = images.filter((i) => {
    return set.templates.includes(Number(i.template_id));
  });
  const filterCollection = filterImages?.filter((i) => {
    if (templates?.includes(i.template_id)) {
      return true;
    }
  });

  const completed = filterImages.length === filterCollection.length;
  const hasClaimed = userConfig?.setids.includes(set.setid);

  const claimRewards = async () => {
    if (!user) return;

    if (!completed) {
      toast(
        'You have not completed the set yet. Please complete it first before claiming your reward.'
      );
      return;
    }

    if (Object.keys(selections).length != set.templates.length) {
      toast("Please set the NFT's to be used to claim the reward.");
      return;
    }

    let assets: number[] = [];
    for (const i of set.templates) {
      const a = selections[i];
      if (!a) {
        toast.error(
          'Cannot find template from selections. Please report this error to the developer.'
        );
        return;
      }

      assets = [...assets, Number(a.assetid)];
    }

    await user
      .transact([
        {
          account: 'wocgalleryrw',
          name: 'claimrewards',
          authorization: [
            {
              actor: user.wallet,
              permission: user.permission
            }
          ],
          data: {
            wallet: user.wallet,
            setid: set.setid,
            assets
          }
        }
      ])
      .then((r) => {
        console.log(r);

        setTransaction(r as TransactResult);
        setIsOpen(true);

        toast.success('Successfully claimed the rewards for completing the set.');
      })
      .catch((e) => {
        console.error(e);

        toast.error(String(e));
      });
  };
  return (
    <>
      <BaseModal
        open={isOpen}
        closeModal={() => setIsOpen(false)}
        className="bg-white p-6 rounded-lg text-center max-w-md"
      >
        <Dialog.Title as="h3" className="font-bold text-gray-600 tracking-wide uppercase">
          Transaction Successful
        </Dialog.Title>

        <div className="text-sm text-gray-700 tracking-wide w-11/12 mx-auto">
          <p className="leading-6">
            You can check by following the transaction id: <br />
          </p>

          <p className="truncate">
            <a
              title="View transaction"
              target="_blank"
              href={`${bloks}/transaction/${transaction?.processed.id}`}
              className="underline hover:text-indigo-500 whites truncate whitespace-nowrap"
              rel="noreferrer"
            >
              {transaction?.processed.id}
            </a>
          </p>
        </div>

        <div className="mt-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-sm inline-flex items-center py-2 px-8 rounded-lg bg-gray-100 hover:bg-gray-300 duration-300"
          >
            <CheckIcon aria-hidden="true" className="h-4 w-4 mr-1" />
            Done
          </button>
        </div>
      </BaseModal>

      <button
        onClick={claimRewards}
        disabled={hasClaimed ? true : !completed}
        title={completed ? 'Claim Rewards' : 'Reward is not yet claimable...'}
        className="text-sm mx-0.5 py-2 px-4 rounded-lg uppercase font-bold bg-orange-400 enabled:hover:bg-orange-500 text-white duration-300 disabled:opacity-50"
      >
        {hasClaimed ? 'claimed' : completed ? 'claim' : 'incomplete...'}
      </button>
    </>
  );
};

export default ClaimRewardsButton;
