import Link from 'next/link';
import { useEffect, useRef } from 'react';
import ConnectWalletButton from './connect-wallet';
import Container from './container';
import MobileMenu from './mobile-menu';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  const onScroll = () => {
    if (!headerRef.current) return;

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      headerRef.current.classList.remove('py-3');
      headerRef.current.classList.add('py-1');
    } else {
      headerRef.current.classList.add('py-3');
      headerRef.current.classList.remove('py-1');
    }
  };

  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="py-6 bg-black/50 hover:bg-black duration-500 fixed w-full z-[9999]"
    >
      <Container className="w-11/12 2xl:w-5/6 text-center">
        <MobileMenu />

        <div className="hidden md:flex items-center justify-center relative">
          <ul className="hidden md:flex items-center justify-center text-stone-300 text-sm font-semibold">
            <li className="px-6 lg:px-8 xl:px-10 py-2">
              <Link href="/">
                <a className="tracking-wide hover:text-white" title="Home">
                  Home
                </a>
              </Link>
            </li>
            <li className="px-6 lg:px-8 xl:px-10 py-2">
              <Link href="/gallery">
                <a className="tracking-wide hover:text-white" title="Gallery">
                  Gallery
                </a>
              </Link>
            </li>
            <li className="px-6 lg:px-8 xl:px-10 py-2">
              <Link href="/my-collections">
                <a className="tracking-wide hover:text-white" title="Gallery">
                  Profile
                </a>
              </Link>
            </li>
          </ul>

          <ConnectWalletButton />
        </div>
      </Container>
    </header>
  );
};

export default Header;
