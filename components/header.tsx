import Link from "next/link";
import Container from "./container";

const Header = () => {
  return (
    <header className="py-4 bg-gray-800">
      <Container className="w-11/12 text-center">
        <ul className="flex items-center justify-center text-gray-200 text-sm uppercase">
          <li className="px-8 py-2">
            <Link href="/">
              <a className="tracking-wide">Home</a>
            </Link>
          </li>
          <li className="px-8 py-2">
            <Link href="/">
              <a className="tracking-wide">Gallery</a>
            </Link>
          </li>
          <li className="px-8 py-2">
            <Link href="/">
              <a className="tracking-wide">Blog</a>
            </Link>
          </li>
          <li className="px-8 py-2">
            <Link href="/">
              <a className="tracking-wide">Clubhouse</a>
            </Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
