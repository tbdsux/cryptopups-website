import { ReactNode } from "react";
import Footer from "../components/footer";
import BaseLayout from "./base";

type CustomLayoutProps = {
  title: string;
  children: ReactNode;
};
const CustomLayout = ({ title, children }: CustomLayoutProps) => (
  <BaseLayout title={title}>
    {children}

    {/* footer component */}
    <Footer />
  </BaseLayout>
);

export default CustomLayout;
