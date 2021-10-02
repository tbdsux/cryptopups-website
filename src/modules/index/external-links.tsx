import Image from 'next/image';

const ExternalLinks = () => {
  return (
    <div className="py-20">
      <div className="w-5/6 mx-auto text-center">
        <h3 className="text-3xl font-black tracking-wide text-warmGray-800">Wax Links</h3>
        <p className="mt-4 text-lg tracking-wide">
          View our collections, items and sales directly from our wax pages
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
      </div>
    </div>
  );
};

export default ExternalLinks;
