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
      headerRef.current.classList.remove('py-6');
      headerRef.current.classList.add('py-3');
    } else {
      headerRef.current.classList.add('py-6');
      headerRef.current.classList.remove('py-3');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="py-6 bg-black/50 hover:bg-black duration-500 fixed w-full z-[99]"
    >
      <Container className="w-11/12 2xl:w-5/6 text-center">
        <MobileMenu />

        <div className="hidden md:flex items-center justify-center relative">
          <ul className="hidden md:flex items-center justify-center text-stone-300 text-sm font-semibold">
            <li className="px-6 lg:px-8 xl:px-10 py-2">
              <Link href="/" className="tracking-wide hover:text-white" title="Home">
                Home
              </Link>
            </li>
            <li className="px-6 lg:px-8 xl:px-10 py-2">
              <Link href="/gallery" className="tracking-wide hover:text-white" title="Gallery">
                Gallery
              </Link>
            </li>
            <li className="px-6 lg:px-8 xl:px-10 py-2">
              <Link href="/profile" className="tracking-wide hover:text-white" title="Gallery">
                Profile
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
