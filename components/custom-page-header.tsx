import Link from "next/link";
import { ReactNode } from "react";
import Container from "./container";

type CustomPageHeaderProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

const CustomPageHeader = ({
  title,
  description,
  children,
}: CustomPageHeaderProps) => {
  return (
    <header className="py-12">
      <Container className="w-11/12 mx-auto">
        <Link href="/">
          <a
            className="text-sm tracking-wide hover:underline"
            title="Return To Home"
          >
            Return Home
          </a>
        </Link>

        <div className="mt-8 text-center">
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-warmGray-900 font-black tracking-wide leading-loose">
            {title}
          </h1>
          <p className="text-lg tracking-wide text-warmGray-700 mt-3">
            {description}
          </p>
        </div>

        <div>{children}</div>
      </Container>
    </header>
  );
};

export default CustomPageHeader;
