import { useWaxUser } from '@cryptopuppie/next-waxauth';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import BaseModal from '../../components/modal';

const UpdateFormModal = () => {
  const { isLoggedIn } = useWaxUser();
  const [open, setOpen] = useState(false);

  const checkRef = useRef<HTMLInputElement>(null);

  const setStoreCache = () => {
    if (typeof window == 'undefined') return;

    if (checkRef.current?.checked) {
      // identifier to hide modal forever if checkbox is checked
      window.localStorage.setItem('woc-show-update-modal', 'false');
    }
  };

  useEffect(() => {
    if (typeof window == 'undefined') return;

    const isShowModalStore = window.localStorage.getItem('woc-show-update-modal') ?? '';
    if (isShowModalStore === 'false') {
      setOpen(false);
      return;
    }

    setOpen(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <BaseModal
      open={open}
      closeModal={() => {
        setStoreCache();

        setOpen(false);
      }}
      className="bg-white max-w-xl p-8 xl:p-10 rounded-lg"
    >
      <div className="inline-flex flex-col items-center justify-center">
        <h2 className="font-alt font-bold text-4xl tracking-wide text-pastel-purple uppercase">
          Super Surprize!!!
        </h2>
        <div className="mt-0.5 py-0.5 rounded-full bg-pastel-purple w-3/5"></div>
      </div>

      <p className="my-8 font-medium">
        Hey pups! Welcome to our new and improved website. Make sure to check around and tell us how
        you feel about it. While {"you're"} at it{' '}
        <span className="text-pastel-purple">click the button bellow</span> to fill up this quick
        survery form and be entered in our{' '}
        <span className="text-pastel-purple">
          WAX giveaway, NFT giveaways, Free sticker drop, and get a chance to be featured on our
          website!
        </span>
      </p>

      <div className="text-center">
        <a
          href="https://forms.gle/RcDLtdQQmkvH19rY9"
          target="_blank"
          rel="noreferrer"
          title="Fillup form"
          className="font-alt text-2xl text-white bg-pastel-purple pt-3 pb-2 px-20 rounded-xl outline-none opacity-80 hover:opacity-100 duration-300"
        >
          Click me
        </a>
      </div>

      <div className="my-12 flex items-center justify-center flex-wrap">
        <p className="mr-2 font-medium">Sponsored by: </p>

        <div className="inline-flex items-center">
          <a
            href="https://wax.atomichub.io/explorer/collection/catstickerss"
            target="_blank"
            rel="noreferrer"
            className="m-1"
          >
            <Image
              src="https://atomichub-ipfs.com/ipfs/QmU6ABimfmBCjH66FmLHSTWPfqjoakmQ4anttg5uKjuAPG"
              alt="Cat Stickers (catstickerss)"
              objectFit="contain"
              height={35}
              width={35}
              className="rounded-full"
            />
          </a>
          <a
            href="https://wax.atomichub.io/explorer/collection/cuteredpanda"
            target="_blank"
            rel="noreferrer"
            className="m-1"
          >
            <Image
              src="https://atomichub-ipfs.com/ipfs/QmVbYNkW7k9AAe6abTZL42Sw3H382YJso2NbdNhTdCFN5F"
              alt="Red Panda (cuteredpanda)"
              objectFit="contain"
              height={35}
              width={35}
              className="rounded-full"
            />
          </a>
        </div>
      </div>

      <div className="inline-flex items-center">
        <input ref={checkRef} type="checkbox" name="" id="" />
        <button
          onClick={() => {
            // actor to auto check the checkbox

            if (!checkRef.current) return;

            checkRef.current.checked = !checkRef.current.checked;
          }}
          className="text-sm ml-2"
        >
          I already answered this form
        </button>
      </div>
    </BaseModal>
  );
};

export default UpdateFormModal;
