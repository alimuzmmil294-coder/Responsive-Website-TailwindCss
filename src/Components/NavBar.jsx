import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavItems = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Projects", link: "/projects" },
  ];

  return (
    <div className="flex justify-between p-2 md:p-4 lg:p-5 text-gray-50 bg-blue-950">
      <ul
        className={`${isOpen ? "flex" : "hidden"} text-2xl flex-col bg-blue-950 w-[60%] p-6 gap-4 h-screen  fixed top-0 left-0 z-30`}
      >
        {NavItems.map((item) => (
          <li
            onClick={() => setIsOpen(false)}
            className="border-b-2 border-gray-400"
          >
            <NavLink to={item.link}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
      <span
        onClick={() => setIsOpen(false)}
        className={`${isOpen ? "absolute text-2xl z-50 left-[45%]" : "hidden"}`}
      >
        ❌
      </span>

      <div className="flex gap-1.5 p-1.5">
        <span
          onClick={() => setIsOpen(true)}
          className="text-3xl lg:hidden md:hidden"
        >
          🍔
        </span>
        <h1 className="text-3xl ">Logo</h1>
      </div>

      <ul className="text-2xl hidden gap-4  lg:flex">
        {NavItems.map((item) => (
          <li className="hover:border-b-2 border-gray-300">
            <NavLink to={item.link}>{item.name}</NavLink>
          </li>
        ))}
      </ul>

      <NavLink
        to={"/contact"}
        className={"text-2xl hover:border-b-2 border-gray-400 "}
      >
        Contact
      </NavLink>

      <div
        className={`${isOpen ? "h-screen bg-black w-full fixed top-0 right-0" : "hidden "} opacity-[0.9]`}
        onClick={() => setIsOpen(false)}
      ></div>
    </div>
  );
};

export default NavBar;
