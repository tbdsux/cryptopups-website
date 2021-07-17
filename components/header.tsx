import Link from "next/link";
import { useEffect, useRef } from "react";
import Container from "./container";

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  const onScroll = () => {
    if (!headerRef.current) return;

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      headerRef.current.classList.remove("py-4");
      headerRef.current.classList.add("py-1");
    } else {
      headerRef.current.classList.add("py-4");
      headerRef.current.classList.remove("py-1");
    }
  };

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="py-3 bg-black/50 hover:bg-black duration-500 fixed w-full items-center z-50"
    >
      <Container className="w-11/12 text-center">
        <ul className="flex items-center justify-center text-gray-200 text-sm uppercase font-semibold">
          <li className="px-4 md:px-8 py-2">
            <Link href="/">
              <a className="tracking-wide hover:text-white" title="Goto Home">
                Home
              </a>
            </Link>
          </li>
          <li className="px-4 md:px-8 py-2">
            <Link href="/gallery">
              <a
                className="tracking-wide hover:text-white"
                title="Goto Gallery"
              >
                Gallery
              </a>
            </Link>
          </li>
          <li className="px-4 md:px-8 py-2">
            <Link href="/blog">
              <a className="tracking-wide hover:text-white" title="Goto Blog">
                Blog
              </a>
            </Link>
          </li>
          <li className="px-4 md:px-8 py-2">
            <a
              className="tracking-wide hover:text-white"
              title="Goto Clubhouse"
              href="https://discord.io/worldofcryptopups"
              target="_blank"
              rel="noreferrer"
            >
              Clubhouse
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
