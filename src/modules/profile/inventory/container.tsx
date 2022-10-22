import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { Fragment, useState } from 'react';
import { useImages } from '../../../hooks/useImages';
import InventoryProvider from './provider';
import ShowAssets from './show-assets';

interface CategoriesProp {
  name: string;
  value: string;
}

const categories: CategoriesProp[] = [
  {
    name: 'None',
    value: 'None'
  },
  {
    name: 'Pupskins',
    value: 'pupskincards'
  },
  {
    name: 'Pupitems',
    value: 'pupitems'
  },
  {
    name: 'Puppycards',
    value: 'puppycards'
  },
  {
    name: 'Pupemoji',
    value: 'pupmojicards'
  }
];

const rarities = ['None', 'common', 'uncommon', 'rare', 'mythic', 'cosmic', 'ethereal', 'special'];

const ProfileInventory = () => {
  const images = useImages();

  const [selectedCategory, setSelectedCategory] = useState<CategoriesProp>(categories[0]);
  const [selectedRarity, setSelectedRarity] = useState<string>(rarities[0]);
  const [selectedPuppy, setSelectedPuppy] = useState<string>('None');

  return (
    <div className="mx-auto mt-32">
      <div className="text-center">
        <span className="font-alt uppercase tracking-wide text-xl">Inventory</span>
      </div>

      <div className="flex items-center justify-center flex-wrap mb-8">
        <div className="mb-4 mx-8">
          <span className="text-sm font-medium">Category</span>
          <Listbox value={selectedCategory} onChange={setSelectedCategory}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-80 md:w-72 cursor-default rounded-lg bg-white hover:bg-gray-50 duration-300 py-3 pl-5 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">
                  {selectedCategory.name != 'None' ? selectedCategory.name : 'Select a category...'}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                  {categories.map((x, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                        }`
                      }
                      value={x}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                          >
                            {x.name}
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

        <div className="mb-4 mx-8">
          <span className="text-sm font-medium">Rarity</span>
          <Listbox value={selectedRarity} onChange={setSelectedRarity}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-80 md:w-72 cursor-default rounded-lg bg-white hover:bg-gray-50 duration-300 py-3 pl-5 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">
                  {selectedRarity != 'None' ? selectedRarity : 'Select a rarity...'}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                  {rarities.map((x, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                        }`
                      }
                      value={x}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                          >
                            {x}
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

        <div className="mb-4 mx-8">
          <span className="text-sm font-medium">Pup Names</span>
          <Listbox value={selectedPuppy} onChange={setSelectedPuppy}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-80 md:w-72 cursor-default rounded-lg bg-white hover:bg-gray-50 duration-300 py-3 pl-5 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">
                  {selectedPuppy != 'None' ? selectedPuppy : 'Select a pup name...'}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                  {images === false ? (
                    <Listbox.Option
                      disabled
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                        }`
                      }
                      value="None"
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}
                          >
                            Failed to load puppers...
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ) : (
                    <>
                      <Listbox.Option
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                          }`
                        }
                        value="None"
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              None
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>

                      {images
                        ?.filter((i) => i.schema.schema_name === 'puppycards')
                        .map((x, index) => (
                          <Listbox.Option
                            key={index}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                              }`
                            }
                            value={x.immutable_data.name}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? 'font-medium' : 'font-normal'
                                  }`}
                                >
                                  {x.immutable_data.name}
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
                    </>
                  )}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>

      <InventoryProvider
        category={selectedCategory.value}
        rarity={selectedRarity}
        pupname={selectedPuppy}
      >
        <ShowAssets />
      </InventoryProvider>
    </div>
  );
};

export default ProfileInventory;
