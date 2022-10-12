import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import BaseModal from '../../../components/modal';
import ViewPerksContent from './content';

const ViewPerksModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} className="text-left hover:underline">
        view perks
      </button>

      <BaseModal
        open={open}
        closeModal={() => setOpen(false)}
        className="bg-white px-8 py-16 rounded-lg text-left max-w-7xl"
      >
        <div className="text-center">
          <div className="inline-flex flex-col items-center justify-center">
            <Dialog.Title
              as="h2"
              className="font-alt font-bold text-6xl tracking-wide text-pastel-blue uppercase"
            >
              Perks
            </Dialog.Title>
            <div className="mt-0.5 py-0.5 rounded-full bg-pastel-blue w-3/5"></div>
          </div>

          <p className="lg:text-lg mt-8">High DPS? Puptastic rewards!</p>

          <ViewPerksContent />
        </div>
      </BaseModal>
    </>
  );
};

export default ViewPerksModal;
