import React from "react";
import logo from "../assets/logo.png";
import about from "../assets/about.png";
import contact from "../assets/contact.png";
import Button from "./Button";

const Sidebar = () => {
  return (
    <aside className="flex flex-col w-60   px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <div className="flex flex-col  items-center mt-6 -mx-2">
        <img className=" w-full  rounded-full" src={logo} alt={logo} />
        <h4 className=" p-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
          Job Freak
        </h4>
        <p className="text-sm  text-gray-600 dark:text-gray-100">
          jobfreak@gmail.com
        </p>
      </div>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <Button linkTo="/about" BtnName="About" BtnImg={about} />
          <Button linkTo="/contact" BtnName="Contact" BtnImg={contact} />
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
