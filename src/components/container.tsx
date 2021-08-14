import { ReactNode } from "react";

type ContainerProps = {
  className: string;
  children: ReactNode;
};

const Container = ({ className, children }: ContainerProps) => {
  return <div className={`mx-auto ${className}`}>{children}</div>;
};

export default Container;
