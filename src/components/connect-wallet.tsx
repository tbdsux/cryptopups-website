import { useAuthFunctions, useWaxUser } from '@cryptopuppie/next-waxauth';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

const ConnectWalletButton = () => {
  const { isLoggedIn, user } = useWaxUser();
  const { loginWithCloudWallet, loginWithAnchor, logout } = useAuthFunctions();

  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    if (isLoggedIn) {
      closeModal();
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn && user ? (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-stone-300 hover:text-white duration-300 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              {user.wallet}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-black text-stone-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="p-3">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'text-white' : 'text-stone-300'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm hover:text-white`}
                      type="button"
                      onClick={logout}
                    >
                      logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <>
          <Transition appear show={open} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-50" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                        Connect Wallet
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Authenticate your WAX blockchain wallet to be able to use some of the
                          functions within the website
                        </p>
                      </div>

                      <div className="text-center mt-8">
                        <button
                          type="button"
                          title="Authenticate your account with WAX Cloud Wallet"
                          className="m-2 py-2 px-6 rounded-md font-medium tracking-wide text-white bg-orange-500 hover:bg-orange-600"
                          onClick={loginWithCloudWallet}
                        >
                          Login with WAX Cloud Wallet
                        </button>

                        <button
                          type="button"
                          title="Authenticate your account with Anchor"
                          className="m-2 py-2 px-6 rounded-md font-medium tracking-wide text-white bg-blue-500 hover:bg-blue-600"
                          onClick={loginWithAnchor}
                        >
                          Login with Anchor
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>

          <button
            className="hidden md:block text-stone-300 text-sm font-semibold tracking-wide hover:text-white"
            title="Connect your wax wallet"
            onClick={openModal}
          >
            connect wallet
          </button>
        </>
      )}
    </>
  );
};

export default ConnectWalletButton;
