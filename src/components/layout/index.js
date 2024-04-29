import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import RightSideDrawer from "../drawer/right_sidedrawer";
import { useLocation } from "react-router-dom";

const MenuItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Newsletter", path: "/news" },
];

export default function Layout({ children }) {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShowSideMenu(false);
  }, [location]);

  return (
    <div className="w-screen h-screen flex flex-col overflow-y-auto">
      <RightSideDrawer isOpen={showSideMenu} setShow={setShowSideMenu}>
        <ul className="h-full flex-1 justify-end items-center p-4 w-96">
          {MenuItems.map((item, index) => (
            <Link key={index} to={item.path}>
              <li
                className={`${location.pathname === item.path
                  ? "text-white bg-blue-500"
                  : "hover:text-gray-100 hover:bg-blue-300"
                  } text-xl py-2 px-4 rounded-md text-gray-500 font-semibold mr-4 cursor-pointer mb-1`}>
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
      </RightSideDrawer>
      <div className="min-h-32 h-32 w-full bg-blue-500 flex p-4">
        <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="" className="max-h-full max-w-full" />
        <div className="h-full flex-col justify-center px-4 flex overflow-y-auto">
          <h1 className="text-xs font-bold text-white mb-1">
            Human Resource Management Command
          </h1>
          <h1 className="text-md font-bold text-[#FFDE00]">
            Philippine Coast Guard
          </h1>
          <p className="text-white text-[0.7rem] mt-1">
            56 ML Quezon St., Purok 1, New Lower Bicutan, Taguig, Philippines
          </p>
        </div>
      </div>
      <div className="flex items-center px-2 py-4 bg-white shadow-md sticky top-0 z-10">
        <h1 className="text-sm font-bold text-gray-500 block md:hidden">
          Philippine Coast Guard
        </h1>
        <ul className="hidden h-full flex-1 justify-end items-center lg:flex">
          {MenuItems.map((item, index) => (
            <Link key={index} to={item.path}>
              <li className="text-md text-gray-500 font-semibold mr-4 cursor-pointer hover:text-blue-500">
                {item.label}
              </li>
            </Link>
          ))}
        </ul>
        <div
          className="flex-1 h-full flex justify-end items-center lg:hidden"
          onClick={() => setShowSideMenu(true)}>
          <GiHamburgerMenu className="text-3xl text-gray-500 cursor-pointer" />
        </div>
      </div>

      {children}
    </div>
  );
}
