import { ReactNode } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import BaseLayout from "./base";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <BaseLayout>
    {/* header component */}
    <Header />

    <div>{children}</div>

    {/* footer component */}
    <Footer />
  </BaseLayout>
);

export default DefaultLayout;
