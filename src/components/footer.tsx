import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '../lib/assets';
import { SocialLinks } from '../modules/index/social-icons';
import Container from './container';

const Footer = () => {
  return (
    <footer className="bg-pastel-violet py-12">
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

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-8 text-white">
          <div className="flex flex-wrap items-start">
            {/* main page links */}
            <div className="mr-8 md:mr-16 2xl:mr-24 my-1">
              <h5 className="font-bold uppercase tracking-wide">Pages</h5>
              <ul className="">
                <li className="my-1">
                  <Link href="/">
                    <a className="font-medium" title="Home">
                      Home
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/gallery">
                    <a className="font-medium" title="Gallery">
                      Gallery
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/contact-us">
                    <a className="font-medium" title="Contact Us">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* social links */}
            <div className="mr-8 md:mr-16 2xl:mr-24 my-1">
              <h5 className="font-bold uppercase tracking-wide">Social Media</h5>
              <ul className="">
                {SocialLinks.map((s, index) => (
                  <li className="my-1" key={index}>
                    <a
                      className="font-medium"
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
              <h5 className="font-bold uppercase tracking-wide">External Links</h5>
              <ul className="">
                <li className="my-1">
                  <a
                    className="font-medium"
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
                    className="font-medium"
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
              <h5 className="font-bold uppercase tracking-wide">Others</h5>
              <ul className="">
                <li className="my-1">
                  <a
                    className="font-medium"
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
                    className="font-medium"
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
                    <a className="font-medium" title="The Pup Squad">
                      The Pup Squad
                    </a>
                  </Link>
                </li>
              </ul>
            </div>

            {/* tools links */}
            <div className="mr-8 md:mr-16 2xl:mr-24 my-1">
              <h5 className="font-bold uppercase tracking-wide">Tools</h5>
              <ul className="">
                <li className="my-1">
                  <Link href="/dps-calculator">
                    <a className="font-medium" title="DPS Calculator">
                      DPS Calculator
                    </a>
                  </Link>
                </li>
                <li className="my-1">
                  <Link href="/my-collections">
                    <a className="font-medium" title="My Collections">
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
              className="inline-flex items-center justify-center bg-white bg-opacity-80 hover:bg-opacity-100 text-pastel-violet font-bold duration-300 py-5 px-8 w-72 rounded-full"
            >
              <FontAwesomeIcon className="text-2xl mr-2" icon={faDiscord} />
              Join the Community
            </a>
          </div>
        </div>

        <hr className="border-white my-4" />

        <div className="text-sm font-medium text-white">
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
