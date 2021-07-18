import { ReactNode } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import BaseLayout from "./base";

type DefaultLayoutProps = {
  title: string;
  children: ReactNode;
};

const DefaultLayout = ({ title, children }: DefaultLayoutProps) => (
  <BaseLayout title={title}>
    {/* header component */}
    <Header />

    <div>{children}</div>

    {/* footer component */}
    <Footer />
  </BaseLayout>
);

export default DefaultLayout;
