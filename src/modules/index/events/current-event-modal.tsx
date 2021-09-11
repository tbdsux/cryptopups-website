// NOTE:: ! THIS COMPONENT NEEDS TO BE UPDATED EVERY EVENT!

import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const CurrentEventModal = () => {
  const [open, setOpen] = useState(true);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        open={open}
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-3xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform ethereal shadow-xl rounded-2xl relative">
              <Dialog.Title as="h2" className="text-2xl font-black leading-6 ethereal-text z-50">
                Shelly, the Infernal Pup
              </Dialog.Title>

              <Dialog.Description
                as="p"
                className="mt-3 text-lg tracking-wide text-warmGray-700 p-2 z-50"
              >
                The first ever <strong>Elemental Pup</strong> is coming to World of Cryptopups!
                Collect, trade, and blend to get the second ethereal card for her.
              </Dialog.Description>

              <div className="mt-4 z-50 inline-flex items-center">
                <a
                  href="https://elementals.worldofcryptopups.cf/"
                  className="py-3 px-6 rounded-lg text-sm font-medium tracking-wide bg-warmGray-800 hover:bg-warmGray-900 text-white inline-flex items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGlobe} className="text-xl mr-2" />
                  Elementals Website
                </a>

                <button
                  type="button"
                  className="py-3 px-6 rounded-lg text-sm font-medium tracking-wide bg-white hover:bg-warmGray-100 ml-2"
                  onClick={closeModal}
                >
                  Got It!
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CurrentEventModal;
