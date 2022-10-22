import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import BaseModal from '../../../components/modal';

const TokenUseModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button title="How to use" onClick={() => setOpen(true)}>
        <QuestionMarkCircleIcon className="h-5 w-5" aria-hidden="true" />
      </button>

      <BaseModal open={open} closeModal={() => setOpen(false)} className="max-w-5xl h-[40rem]">
        <iframe
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen={true}
          src="https://gateway.pinata.cloud/ipfs/QmXdemg433ALpu9qhBiMzqRnf1y63oV1JjLr1pf9Q3RW8v"
        ></iframe>
      </BaseModal>
    </>
  );
};

export default TokenUseModal;
