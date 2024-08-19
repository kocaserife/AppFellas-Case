import React from "react";
import Header from "./Header";

const LayoutContainer = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutContainer;
