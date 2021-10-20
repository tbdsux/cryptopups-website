import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const OurLinks = () => {
  return (
    <div className="py-24">
      <div className="w-5/6 mx-auto text-center">
        <h3 className="text-4xl font-black tracking-wide text-warmGray-800 uppercase">Our Links</h3>
        <p className="mt-4 text-lg tracking-wide">
          View our collections, sales, and announcement from our links
        </p>

        <ul className="flex flex-wrap justify-center mt-8">
          <li className="m-1">
            <a
              href=""
              className="font-bold flex items-center py-2 px-8 hover:bg-orange-600 text-gray-800 tracking-wide uppercase hover:text-white duration-300 hover:border-orange-300 rounded-full border-2"
            >
              <Image
                src="https://wax.atomichub.io/apple-touch-icon.png"
                height="40"
                width="40"
                alt=""
                className="rounded-full"
                objectFit="contain"
              />
              <span className="ml-2">Atomichub</span>
            </a>
          </li>
          <li className="m-1">
            <a
              href=""
              className="font-bold flex items-center py-2 px-8 hover:bg-teal-600 text-gray-800 tracking-wide uppercase hover:text-white duration-300 hover:border-teal-300 rounded-full border-2"
            >
              <Image
                src="https://neftyblocks.com/apple-touch-icon.png"
                height="40"
                width="40"
                alt=""
                className="rounded-full"
                objectFit="contain"
              />
              <span className="ml-2">Neftyblocks</span>
            </a>
          </li>
        </ul>

        <div className="mt-4">
          <a
            href="https://twitter.com/apppllleee_pie"
            rel="noreferrer"
            target="_blank"
            className="lg:text-lg py-2 px-8 text-white rounded-lg inline-flex items-center bg-lightBlue-500 hover:bg-lightBlue-600"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            <span className="tracking-wide ml-2">@apppllleee_pie</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurLinks;
