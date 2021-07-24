import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Logo from '../public/logo.png';
import Container from './container';

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
      className="py-3 bg-black/50 hover:bg-black duration-500 fixed w-full z-50"
    >
      <Container className="w-11/12 text-center flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="">
          <Link href="/">
            <a>
              <Image src={Logo} height="30" width="130" alt="World of Cryptopups" />
            </a>
          </Link>
        </div>

        <ul className="flex items-center justify-center text-gray-300 text-sm font-semibold">
          <li className="px-4 md:px-6 lg:px-8 py-2">
            <Link href="/">
              <a className="tracking-wide hover:text-white" title="Goto Home">
                Home
              </a>
            </Link>
          </li>
          <li className="px-4 md:px-6 lg:px-8 py-2">
            <Link href="/gallery">
              <a className="tracking-wide hover:text-white" title="Goto Gallery">
                Gallery
              </a>
            </Link>
          </li>
          <li className="px-4 md:px-6 lg:px-8 py-2">
            <Link href="/blog">
              <a className="tracking-wide hover:text-white" title="Goto Blog">
                Blog
              </a>
            </Link>
          </li>
          <li className="pl-4 md:pl-6 lg:pl-8 py-2">
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
      </Container>
    </header>
  );
};

export default Header;
