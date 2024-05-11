import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import RightSideDrawer from "../drawer/right_sidedrawer";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const MenuItems = [
  {
    label: "HOME",
    path: "/",
  },
  { label: "CGHRMC TR", path: "/cghrmc-tr" },
  {
    label: "ABOUT",
    path: "",
    dropdown: [
      {
        label: "CGHRMC OFFICE FOR STRATEGY MANAGEMENT",
        path: "",
      },
      {
        label: "PERFORMANCE GOVERNMENANCE SYSTEM",
        path: "",
        redirect: "https://isacenter.org/pgs/",
      },
      {
        label: "ENTERPRISE SCORECARD",
        path: "/scorecard",
      },
      {
        label: "MULTI-SECTOR GOVERNANCE COUNCIL",
        path: "/multi-sector",
      },
    ],
  },

  { label: "PUBLICATIONS", path: "/news" },
  {
    label: "MEDIA",
    path: "",
  },
];

export default function LayoutTr({ children }) {
  const navigate = useNavigate();
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setShowSideMenu(false);
  }, [location]);

  return (
    <div className="w-screen h-screen flex flex-col overflow-y-auto">
      <RightSideDrawer isOpen={showSideMenu} setShow={setShowSideMenu}>
        <ul className="h-full flex-1 justify-end items-center p-4 w-96">
          {MenuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                if (item?.path) {
                  if (!(location.pathname === item.path)) {
                    navigate(item.path);
                  }
                }
              }}>
              <li
                className={`${
                  location.pathname === item.path
                    ? "text-white bg-blue-500"
                    : "hover:text-gray-100 hover:bg-blue-300"
                } flex items-center text-md py-2 px-4 rounded-md text-gray-500 font-semibold mr-4 cursor-pointer mb-1`}
                onClick={() => {
                  if (index === selectedDropdown) {
                    setSelectedDropdown(null);
                  } else {
                    setSelectedDropdown(index);
                  }
                }}>
                {item.label}

                <IoIosArrowDown
                  className={`text-xl mx-2 transition ease-in-out delay-300
                  ${item.dropdown?.length > 0 ? "" : "hidden "} 
                  ${selectedDropdown === index ? " -rotate-180" : ""}`}
                />
              </li>
              <ul
                className={`text-sm font-semibold overflow-hidden transition-all ease-in-out delay-300 text-gray-500 px-4 
                ${selectedDropdown === index ? "max-h-screen" : "max-h-0"}`}>
                {item?.dropdown?.map((dropItem, index) => (
                  <li
                    key={index}
                    className="px-8 py-2 rounded-lg hover:bg-blue-300 hover:text-gray-100 cursor-pointer"
                    onClick={() => {
                      if (dropItem?.redirect)
                        window.open(dropItem?.redirect, "_black");
                      if (dropItem?.path) {
                        navigate(dropItem?.path);
                      }
                    }}>
                    {dropItem.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </RightSideDrawer>
      <div className="min-h-[8rem] max-h-32 sm:min-h-32 h-auto w-full bg-blue-600 p-4 flex items-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
          alt=""
          className="h-full max-w-full"
        />
        <div className="pl-4">
          <h1 className="text-xs font-bold text-white mb-1 sm:text-sm">
            Human Resource Management Command
          </h1>
          <h1 className="text-sm font-bold text-yellow-400 sm:text-lg">
            Philippine Coast Guard
          </h1>
          <p className="text-white text-xs sm:text-sm mt-1">
            PROFESSIONALISM INTEGRITY EXCELLENCE
          </p>
        </div>
      </div>

      <div className="flex items-center px-2 py-4 bg-gray-100 shadow-lg sticky top-0 z-10">
        {/* <ul className="hidden h-full flex-1 justify-end items-center lg:flex">
          {MenuItems.map((item, index) => (
            <Link key={index} to={item.path}>
              <li
                className="text-md text-gray-500 font-semibold mr-4 cursor-pointer hover:text-blue-500"
                onMouseEnter={() => {
                  setSelectedDropdown(index);
                }}>
                {item.label}
                {index === selectedDropdown && item?.dropdown?.length > 0 && (
                  <div
                    className="absolute z-10 top-full bg-white border border-gray-200 shadow-lg rounded-md text-gray-700"
                    onMouseLeave={() => setSelectedDropdown(null)}>
                    <ul>
                      {item.dropdown.map((dropItem, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-gray-100">
                          {dropItem.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            </Link>
          ))}
        </ul> */}
        <div
          className="flex-1 h-full flex justify-end items-center"
          onClick={() => setShowSideMenu(true)}>
          <GiHamburgerMenu className="text-3xl text-gray-500 cursor-pointer" />
        </div>
      </div>
      {children}
    </div>
  );
}
