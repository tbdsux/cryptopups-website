import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/logo.png';
import { SocialLinks } from '../modules/index/social-icons';
import Container from './container';

const Footer = () => {
  return (
    <footer className="bg-stone-900 py-12">
      <Container className="w-5/6 2xl:w-4/5 3xl:w-2/3">
        <Link href="/">
          <a>
            <Image
              src={Logo}
              height="40"
              width="180"
              alt="World of CryptoPups"
              placeholder="blur"
            />
          </a>
        </Link>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-8 text-sm">
          <div className="flex flex-wrap items-start">
            {/* main page links */}
            <div className="mr-8 md:mr-16 2xl:mr-24 my-1">
              <h5 className="text-stone-600 font-medium uppercase tracking-wide">Pages</h5>
              <ul className="text-stone-100">
                <li className="my-1">
                  <Link href="/">
                    <a className="hover:text-white" title="Home">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/gallery">
                    <a className="hover:text-white" title="Gallery">
                      Gallery
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/contact-us">
                    <a className="hover:text-white" title="Contact Us">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* social links */}
            <div className="mr-8 md:mr-16 2xl:mr-24 my-1">
              <h5 className="text-stone-600 font-medium uppercase tracking-wide">Social Media</h5>
              <ul className="text-stone-100">
                {SocialLinks.map((s, index) => (
                  <li className="my-1" key={index}>
                    <a
                      className="hover:text-white"
                      title={`Goto ${s.name}`}
                      href={s.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* other links */}
            <div className="mr-8 md:mr-16 2xl:mr-24 my-1">
              <h5 className="text-stone-600 font-medium uppercase tracking-wide">External Links</h5>
              <ul className="text-stone-100">
                <li className="my-1">
                  <a
                    className="hover:text-white"
                    title="Neftyblocks Link"
                    target="_blank"
                    href="https://neftyblocks.com/c/cryptopuppie/"
                    rel="noreferrer"
                  >
                    Neftyblocks
                  </a>
                </li>
                <li className="my-1">
                  <a
                    className="hover:text-white"
                    title="Atomichub Link"
                    target="_blank"
                    href="https://wax.atomichub.io/explorer/collection/cryptopuppie"
                    rel="noreferrer"
                  >
                    Atomichub
                  </a>
                </li>
              </ul>
            </div>

            {/* other links */}
            <div className="mr-8 md:mr-16 2xl:mr-24 my-1">
              <h5 className="text-stone-600 font-medium uppercase tracking-wide">Others</h5>
              <ul className="text-stone-100">
                <li className="my-1">
                  <a
                    className="hover:text-white"
                    title="Packs"
                    target="_blank"
                    rel="noreferrer"
                    href="https://packs.worldofcryptopups.cf/"
                  >
                    Packs
                  </a>
                </li>
                <li className="my-1">
                  <a
                    className="hover:text-white"
                    title="Dev"
                    target="_blank"
                    rel="noreferrer"
                    href="https://dev.worldofcryptopups.cf/"
                  >
                    Dev
                  </a>
                </li>
                <li className="my-1">
                  <Link href="/pup-squad">
                    <a className="hover:text-white" title="The Pup Squad">
                      The Pup Squad
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* tools links */}
            <div className="mr-8 md:mr-16 2xl:mr-24 my-1">
              <h5 className="text-stone-600 font-medium uppercase tracking-wide">Tools</h5>
              <ul className="text-stone-100">
                <li className="my-1">
                  <Link href="/dps-calculator">
                    <a className="hover:text-white" title="DPS Calculator">
                      DPS Calculator
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/my-collections">
                    <a className="hover:text-white" title="My Collections">
                      My Collections
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              href="https://discord.io/worldofcryptopups"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center bg-stone-800 opacity-75 hover:opacity-100 duration-300 text-stone-100 py-2 lg:py-3 px-8 rounded-full"
            >
              <FontAwesomeIcon className="text-2xl mr-2" icon={faDiscord} />
              Join the Community
            </a>
          </div>
        </div>

        <hr className="border-stone-700 my-4" />

        <div className="text-sm text-stone-200">
          <p className="tracking-wider">
            All Rights Reserved | World of Cryptopups &copy; {new Date().getFullYear()}
          </p>
          {/* <p className="tracking-wider">
            <small>(website is still in heavy development!)</small>
          </p> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
