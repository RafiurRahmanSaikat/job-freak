import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../pages";

const Layout = () => {
  return (
    <section className=" flex ">
      <Sidebar />
      <Outlet />
    </section>
  );
};

export default Layout;
