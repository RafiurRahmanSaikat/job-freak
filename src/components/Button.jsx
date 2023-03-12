import React from "react";
import { Link } from "react-router-dom";

const Button = ({ linkTo, BtnName, BtnImg }) => {
  return (
    <Link
      to={linkTo}
      className="flex flex-wrap  items-center px-1 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
    >
      
      <img className="rounded-full mx-auto w-12" src={BtnImg} alt={BtnImg} />
      <span className="text-xl mx-auto ">{BtnName}</span>
    </Link>
  );
};

export default Button;
