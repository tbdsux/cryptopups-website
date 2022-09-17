import { IAsset } from '@cryptopuppie/useatomicassets';
import { Dialog, Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import BaseModal from '../../components/modal';
import { useGetAssetRewardsConfig } from '../../hooks/useGetRewardsConfig';
import useGetUserAssets from '../../hooks/useGetUserAssets';
import { useClaimReward } from './provider';

interface RewardTemplateContainerProps {
  src: string;
  alt: string;
  template_id: string;
}

const RewardTemplateContainer = ({ src, alt, template_id }: RewardTemplateContainerProps) => {
  const assets = useGetUserAssets();
  const { selections, setSelections } = useClaimReward();
  const config = useGetAssetRewardsConfig();

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<IAsset | undefined>(undefined);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const selectNFT = () => {
    if (!selected) return;

    const template = Number(template_id);

    setSelections({
      ...selections,
      [template]: {
        template_id: template,
        mint: selected.template_mint,
        assetid: selected.asset_id
      }
    });

    closeModal();
  };

  return (
    <li className="group border p-1 rounded-lg relative flex items-center justify-center">
      <BaseModal
        open={open}
        closeModal={() => {}}
        className="max-w-md bg-white p-8 rounded-lg text-left"
      >
        <Dialog.Title as="h3" className="font-bold text-gray-800 tracking-wide">
          Choose NFT
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-600">
            Select the NFT you want to use to claim this reward.{' '}
          </p>
          <p className="text-sm text-gray-600">
            *Once chosen and reward is claimed the NFT won&apos;t be usable to claim a reward
            again...
          </p>

          <div className="flex flex-col my-3">
            <Listbox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white hover:bg-gray-50 duration-300 py-3 pl-5 pr-10 text-left shadow-md border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">
                    {selected
                      ? `#${selected.template_mint} ${selected.name} (${selected.asset_id})`
                      : 'Select a NFT...'}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-20 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                    {assets
                      ?.filter((i) => i.template?.template_id === template_id)
                      .map((x, index) => (
                        <Listbox.Option
                          key={index}
                          className={({ active, disabled }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                            } ${disabled ? 'opacity-70' : ''}`
                          }
                          value={x}
                          disabled={config?.assets.includes(x.asset_id)}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
                              >
                                #{x.template_mint} {x.name} ({x.asset_id}){' '}
                                {config?.assets.includes(x.asset_id) ? '[already used]' : ''}
                              </span>
                              {selected ? (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>

          <div className="mt-6 flex items-center">
            <button
              className="mx-0.5 py-2 px-8 rounded-lg text-sm bg-orange-400 hover:bg-orange-500 duration-300 text-white"
              onClick={selectNFT}
            >
              select
            </button>
            <button
              className="mx-0.5 py-2 px-8 rounded-lg text-sm bg-gray-400 hover:bg-gray-500 text-white duration-300"
              onClick={closeModal}
            >
              cancel
            </button>
          </div>
        </div>
      </BaseModal>

      <div className="absolute z-50 bg-black/30 w-full h-full hidden group-hover:flex items-center justify-center rounded-lg">
        <button
          className="text-sm py-1 px-4 rounded-lg bg-orange-400 hover:bg-orange-500 text-white duration-300"
          onClick={openModal}
        >
          set nft
        </button>
      </div>

      {selections[Number(template_id)] ? (
        <>
          <span className="absolute z-40 text-sm bg-gray-600 p-2 font-extrabold rounded-lg text-white -top-1 -left-1">
            # {selections[Number(template_id)].mint}
          </span>
          <span className="absolute z-40 text-xs bg-gray-600 p-2 tracking-wide rounded-lg text-white -bottom-1 -left-1">
            {selections[Number(template_id)].assetid}
          </span>
        </>
      ) : (
        <></>
      )}

      <Image
        src={src}
        alt={alt}
        height="300"
        width="200"
        className={`z-30 ${selections[Number(template_id)] ? '' : 'grayscale'}`}
      />
    </li>
  );
};

export default RewardTemplateContainer;
