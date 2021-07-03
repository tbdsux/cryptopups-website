import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

type DefaultLayoutProps = {
  title: string;
  children: ReactNode;
};

const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title} | World of CryptoPups</title>
      </Head>

      {/* header component */}
      <Header />

      {/* children */}
      <main>{children}</main>

      {/* footer component */}
      <Footer />
    </>
  );
};

export default DefaultLayout;
