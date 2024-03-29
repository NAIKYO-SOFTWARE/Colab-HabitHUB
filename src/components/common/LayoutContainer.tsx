import React, { ReactNode, ComponentType, useEffect } from "react";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

type LayoutProps = {
  component: ComponentType;
  title: string;
  isFooter: boolean;
};

const ComponentWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

const LayoutContainer: React.FC<LayoutProps> = ({
  component: Component,
  title,
  isFooter,
}: LayoutProps): JSX.Element => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      <ComponentWrapper>
        <Component />
      </ComponentWrapper>
      <ToastContainer />
      {isFooter && <Footer />}
    </div>
  );
};

export default LayoutContainer;
