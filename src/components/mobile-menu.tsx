import Link from 'next/link';
import { useState } from 'react';
import ConnectWalletButton from './connect-wallet';

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden py-2">
      <div className="flex items-center justify-between text-stone-100">
        <h3 className="text-sm ">Main Menu</h3>

        <button type="button" onClick={() => setOpen(!open)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {open ? (
        <div>
          <ul className="mt-4 flex flex-col items-center text-stone-300 text-sm font-semibold ease transition-transform duration-300">
            <li className="py-2">
              <Link href="/">
                <a className="tracking-wide hover:text-white" title="Home">
                  Home
                </a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/gallery">
                <a className="tracking-wide hover:text-white" title="Gallery">
                  Gallery
                </a>
              </Link>
            </li>
            <li className="py-2">
              <Link href="/pup-squad">
                <a className="tracking-wide hover:text-white" title="Gallery">
                  Pup Squad
                </a>
              </Link>
            </li>
            <li className="py-2">
              <a
                className="tracking-wide hover:text-white"
                title="Join the Community"
                href="https://discord.io/worldofcryptopups"
                target="_blank"
                rel="noreferrer"
              >
                Community
              </a>
            </li>
          </ul>

          <ConnectWalletButton />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MobileMenu;
