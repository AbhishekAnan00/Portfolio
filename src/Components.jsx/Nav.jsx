import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
const Nav = ({ setSidebar, sidebar }) => {
  const [colorss, setcolorss] = useState({
    about: false,
    resume: false,
    projects: false,
    contact: false,
  });

  const toggle = () => {
    setSidebar(!sidebar);
  };
  const handleOnClick = (item) => {
    setcolorss({
      [item]: !colorss[item],
    });
  };
  return (
    <>
      <div>
        <nav className="bg-slate-700 text-gray-200 flex justify-between list-none text-xl font-semibold p-5 phone-sm:pl-0 phone-md:pl-5 width-all:pl-5 fixed top-0 left-0 right-0 pr-20 phone-sm:text-sm phone-md:text-md phone-lg:text-md phone-xl:text-lg width-all:text-xl phone-sm:gap-3 phone-md:gap-4 phone-lg:gap-5 phone-xl:gap-6">
          <li>
            <CiMenuBurger
              className="sticky top-6 text-3xl cursor-pointer phone-sm:text-[25px] width-all:text-3xl"
              onClick={toggle}
            />
          </li>
          <Link to="/about">
            <li
              onClick={() => handleOnClick("about")}
              style={{ color: colorss.about ? "#319795" : "#ffffff" }}
            >
              About
            </li>
          </Link>
          <Link to="/resume">
            <li
              onClick={() => handleOnClick("resume")}
              style={{ color: colorss.resume ? "#319795" : "#ffffff" }}
            >
              Resume
            </li>
          </Link>
          <Link to="/project">
            <li
              onClick={() => handleOnClick("projects")}
              style={{ color: colorss.projects ? "#319795" : "#ffffff" }}
            >
              Projects
            </li>
          </Link>
          <Link to="/contact">
            <li
              onClick={() => handleOnClick("contact")}
              style={{ color: colorss.contact ? "#319795" : "#ffffff" }}
            >
              Contact
            </li>
          </Link>
        </nav>
        {sidebar && <Sidebar />}
      </div>
    </>
  );
};

export default Nav;
