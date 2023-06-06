import Aksesuar from "../components/layout/Aksesuar";
import Header from "../components/layout/Header";
import React from "react";

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Header />
        {children}
        <Aksesuar />
    </React.Fragment>
  );
};

export default Layout;