import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Logo } from '../lib/assets';
import Container from './container';

type CustomPageHeaderProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

const CustomPageHeader = ({ title, description, children }: CustomPageHeaderProps) => {
  return (
    <header className="pb-12">
      <div className="bg-stone-900 pt-12 pb-8">
        <Container className="w-11/12 text-center">
          <Link href="/">
            <a>
              <Image src={Logo} height="60" width="260" alt="World of CryptoPups" />
            </a>
          </Link>
        </Container>
      </div>

      <Container className="w-11/12 mt-4 mx-auto">
        <Link href="/">
          <a className="text-sm tracking-wide hover:underline" title="Return To Home">
            Return Home
          </a>
        </Link>

        <div className="mt-8 text-center">
          <div className="inline-flex flex-col items-center justify-center">
            <h1 className="text-4xl lg:text-5xl text-pastel-purple font-alt font-bold uppercase tracking-wide leading-loose">
              {title}
            </h1>
            <div className="mt-0.5 py-0.5 rounded-full bg-pastel-purple w-3/5"></div>
          </div>

          <p className="text-lg tracking-wide mt-8">{description}</p>
        </div>

        <div>{children}</div>
      </Container>
    </header>
  );
};

export default CustomPageHeader;
