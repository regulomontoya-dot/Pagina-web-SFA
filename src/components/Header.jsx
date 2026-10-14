
import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMain from "./HeaderMain";

const Header = () => {
  return (
    <>
      <HeaderTop />
      <HeaderMain disableFixed />
    </>
  );
};

export default Header;
