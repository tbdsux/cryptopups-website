import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <Container className="w-5/6">
        <Image
          src={Logo}
          height="75"
          width="175"
          alt="World of CryptoPups"
          placeholder="blur"
        />

        <div className="flex items-center justify-between mt-8 text-sm">
          <div className="flex items-start">
            <div className="">
              <h5 className="text-gray-600 font-medium uppercase tracking-wide">
                Pages
              </h5>
              <ul className="text-gray-100">
                <li className="my-1">
                  <Link href="/">
                    <a className="hover:text-white" title="Goto Home">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/">
                    <a className="hover:text-white" title="Goto Gallery">
                      Gallery
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/">
                    <a className="hover:text-white" title="Goto Blog">
                      Blog
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/">
                    <a className="hover:text-white" title="Goto Us">
                      About Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="ml-32">
              <h5 className="text-gray-600 font-medium uppercase tracking-wide">
                Social Media
              </h5>
              <ul className="text-gray-100">
                <li className="my-1">
                  <a
                    className="hover:text-white"
                    title="Goto Facebook"
                    href="https://"
                  >
                    Facebook
                  </a>
                </li>
                <li className="my-1">
                  <a
                    className="hover:text-white"
                    title="Goto Twitter"
                    href="https://"
                  >
                    Twitter
                  </a>
                </li>
                <li className="my-1">
                  <a
                    className="hover:text-white"
                    title="Goto Instagram"
                    href="https://"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <a
              href="https://discord.io/worldofcryptopups"
              className="inline-flex items-center bg-gray-700 hover:bg-gray-800 duration-300 text-gray-100 py-3 px-8 rounded-full"
            >
              <FontAwesomeIcon className="text-2xl mr-2" icon={faDiscord} />
              Join Our Clubhouse
            </a>
          </div>
        </div>

        <hr className="border-gray-700 my-4" />

        <div className="text-sm text-gray-200 flex items-center justify-between">
          <p className="tracking-wider">
            All Rights Reserved | &copy; {new Date().getFullYear()}
          </p>
          <p className="tracking-wider">World of CryptoPups</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
