import { ReactNode } from "react";
import Footer from "../components/footer";
import BaseLayout from "./base";

type CustomLayoutProps = {
  children: ReactNode;
};
const CustomLayout = ({ children }: CustomLayoutProps) => (
  <BaseLayout>
    {children}

    {/* footer component */}
    <Footer />
  </BaseLayout>
);

export default CustomLayout;
