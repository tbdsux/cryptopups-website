import { ReactNode, useState } from 'react';

type CustomDisclosureProps = {
  title: string;
  className?: string;
  buttonClassName?: string;
  children: ReactNode;
};
const CustomDisclosure = ({
  title,
  children,
  className,
  buttonClassName
}: CustomDisclosureProps) => {
  const [show, setShow] = useState(true);

  return (
    <div className={`${className} w-full`}>
      <button
        onClick={() => setShow(!show)}
        type="button"
        className={`w-full flex items-center justify-between ${buttonClassName}`}
      >
        <p className="text-base md:text-lg leading-relaxed uppercase tracking-wide text-gray-200">
          {title}
        </p>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </button>
      <hr className="my-2 border-gray-500" />

      {show && children}
    </div>
  );
};

export default CustomDisclosure;
