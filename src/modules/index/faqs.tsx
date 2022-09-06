import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';

const Faqs = () => {
  return (
    <div className="py-32 w-5/6 2xl:w-4/5 3xl:w-2/3 mx-auto text-center">
      <div className="inline-flex flex-col items-center justify-center">
        <h2 className="font-alt font-bold text-4xl tracking-wide text-pastel-orange uppercase">
          Faqs
        </h2>
        <div className="mt-0.5 py-0.5 rounded-full bg-pastel-orange w-3/5"></div>
      </div>

      <p className="text-xl mt-8">
        Its all that <strong>you need</strong>, pupper
      </p>

      <div className="mt-12 font-medium w-4/5 mx-auto text-left">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between border-b-2 border-pastel-orange px-4 py-2 text-left font-medium  focus:outline-none focus-visible:ring focus-visible:ring-pastel-orange-500 focus-visible:ring-opacity-75 my-3">
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, aliquam?
                </span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-pastel-orange`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat corporis voluptas
                architecto, facilis alias quia! Amet veniam totam expedita reiciendis.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between border-b-2 border-pastel-orange px-4 py-2 text-left font-medium  focus:outline-none focus-visible:ring focus-visible:ring-pastel-orange-500 focus-visible:ring-opacity-75 my-3">
                <span>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, aliquam?
                </span>
                <ChevronUpIcon
                  className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-pastel-orange`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat corporis voluptas
                architecto, facilis alias quia! Amet veniam totam expedita reiciendis.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Faqs;
