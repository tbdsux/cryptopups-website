import { config, dom } from "@fortawesome/fontawesome-svg-core";
import Head from "next/head";
import { ReactNode } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

// ISSUE: https://github.com/FortAwesome/react-fontawesome/issues/412
config.autoAddCss = false;

type DefaultLayoutProps = {
  title: string;
  children: ReactNode;
};

const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title} | World of CryptoPups</title>
        <style>{dom.css()}</style>
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
