import { Listbox, Tab, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';
import GalleryImages from './gallery-images';
import { ImageSets } from './sets';
import { useImages } from './useImages';

interface CategoriesProp {
  name: string;
  value: string;
}

const categories: CategoriesProp[] = [
  {
    name: 'Pupskins',
    value: 'pupskincards'
  },
  {
    name: 'Pupitems',
    value: 'Pupitems'
  },
  {
    name: 'Puppycards',
    value: 'puppycards'
  }
];

const rarities = ['common', 'uncommon', 'rare', 'mythic', 'cosmic', 'ethereal', 'special'];

const GalleryContainer = () => {
  const images = useImages();

  const [selectedCategory, setSelectedCategory] = useState<CategoriesProp | undefined>(undefined);
  const [selectedRarity, setSelectedRarity] = useState<string | undefined>(undefined);
  const [selectedPuppy, setSelectedPuppy] = useState<string | undefined>(undefined);

  const allSets = [
    {
      name: 'All',
      templates: []
    },
    ...ImageSets
  ];

  return (
    <div>
      <div className="flex items-center justify-center flex-wrap mb-8">
        <div className="mb-4 mx-8">
          <span className="text-sm font-medium">Category</span>
          <Listbox value={selectedCategory} onChange={setSelectedCategory}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-80 cursor-default rounded-lg bg-white hover:bg-gray-50 duration-300 py-3 pl-5 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">
                  {selectedCategory ? selectedCategory.name : 'Select a category...'}
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
              <Listbox.Button className="relative w-80 cursor-default rounded-lg bg-white hover:bg-gray-50 duration-300 py-3 pl-5 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">
                  {selectedRarity ? selectedRarity : 'Select a rarity...'}
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
              <Listbox.Button className="relative w-80 cursor-default rounded-lg bg-white hover:bg-gray-50 duration-300 py-3 pl-5 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">
                  {selectedPuppy ? selectedPuppy : 'Select a pup name...'}
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
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50">
                  {images === false ? (
                    <Listbox.Option
                      disabled
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                        }`
                      }
                      value={undefined}
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
                    images
                      ?.filter((i) => i.schema.schema_name === 'puppycards')
                      .map((x, index) => (
                        <Listbox.Option
                          key={index}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                            }`
                          }
                          value={x.name}
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? 'font-medium' : 'font-normal'
                                }`}
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
                      ))
                  )}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>

      <div className="mt-2">
        <Tab.Group>
          <Tab.List className="overflow-auto text-center whitespace-nowrap">
            {allSets.map((x, index) => (
              <Tab
                className={({ selected }) =>
                  `inline-block px-8 mx-2 py-2 border-b-4 border-transparent text-sm font-medium text-gray-600 hover:text-gray-800 hover:border-gray-500 duration-300 focus:outline-none ${
                    selected ? 'border-gray-500 text-gray-800' : ''
                  }`
                }
                key={index}
              >
                {x.name}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className="w-full mt-8 max-12 h-172 lg:h-200 overflow-auto p-6">
            {images === false ? (
              <p>
                Failed to load gallery images. If problem persists, please send a message to
                community mods and admins.
              </p>
            ) : images == null ? (
              <p>Loading...</p>
            ) : (
              allSets.map((x, index) => (
                <Tab.Panel key={index}>
                  <GalleryImages
                    category={selectedCategory?.name}
                    rarity={selectedRarity}
                    pupname={selectedPuppy}
                    set={x}
                    images={images}
                  />
                </Tab.Panel>
              ))
            )}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default GalleryContainer;
