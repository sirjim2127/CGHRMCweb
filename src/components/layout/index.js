import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import RightSideDrawer from "../drawer/right_sidedrawer";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const MenuItems = [
  { label: "HOME", path: "/" },
  {
    label: "CHANGE 2028",
    path: "",
    dropdown: [
      {
        label: "CGHRMC TR",
        path: "/cghrmc-tr",
      },
      {
        label: "CGHRMC OFFICE FOR STRATEGY MANAGEMENT",
        path: "/strat-management",
      },
      {
        label: "PERFORMANCE GOVERNANCE SYSTEM",
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
  { label: "ABOUT US", path: "/about-us" },
  { label: "ORG CHART", path: "/org-chart" },
  { label: "TRANSPARENCY SEAL", path: "/transparency-seal" },
  { label: "PUBLICATIONS", path: "/news" },
  {
    label: "MEDIA",
    path: "",
    dropdown: [
      {
        label: "MEDIA",
        path: "/media",
      },
      {
        label: "TUTORIALS",
        path: "/media/tutorials",
      },
    ],
  },
  {
    label: "LEADERSHIP",
    path: "",
    dropdown: [
      { label: "COMMANDER", path: "/leadership/co" },
      { label: "DEPUTY", path: "/leadership/deputy" },
      { label: "CHIEF OF STAFF", path: "/leadership/ce" },
    ],
  },
  { label: "OSM", path: "/osm" },
];

export default function Layout({ children }) {
  const navigate = useNavigate();
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setShowSideMenu(false);
    setSelectedDropdown(null);
  }, [location]);

  const handleMenuItemClick = (item, index) => {
    if (item.path) {
      navigate(item.path);
    }
    if (item.dropdown) {
      setSelectedDropdown(selectedDropdown === index ? null : index);
    } else {
      setShowSideMenu(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col overflow-y-auto">
      {/* Side Drawer */}
      <RightSideDrawer isOpen={showSideMenu} setShow={setShowSideMenu}>
        <div className="text-sm fixed top-0 right-0 h-full bg-gray-100 z-50 shadow-lg overflow-y-auto p-4 w-96">
          <header className=" p-4 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                alt="Logo"
                className="h-16 w-auto sm:h-20"
              />
              <div className="ml-4 block">
                <h1 className="text-sm font-bold text-gray-700  ">
                  Human Resource Management Command
                </h1>
                <h1 className="text-sm font-bold text-yellow-400">
                  Philippine Coast Guard
                </h1>
              </div>
            </div>
          </header>
          <ul className="flex flex-col h-full">
            {MenuItems.map((item, index) => (
              <div key={index} className="w-full">
                <li
                  className={`${location.pathname === item.path
                      ? "text-white bg-blue-500"
                      : "hover:text-white hover:bg-blue-300"
                    } flex justify-between items-center text-md py-2 px-4 rounded-md text-gray-700 font-semibold cursor-pointer mb-1`}
                  onClick={() => handleMenuItemClick(item, index)}>
                  {item.label}
                  {item.dropdown && (
                    <IoIosArrowDown
                      className={`text-xl mx-2 transition-transform duration-300 ${selectedDropdown === index ? "-rotate-180" : ""
                        }`}
                    />
                  )}
                </li>
                {item.dropdown && selectedDropdown === index && (
                  <ul className="pl-6 text-sm font-semibold text-gray-700">
                    {item.dropdown.map((dropItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="py-2 cursor-pointer hover:text-white hover:bg-blue-300 rounded-md"
                        onClick={() => {
                          if (dropItem.redirect) {
                            window.location.href = dropItem.redirect;
                          } else if (dropItem.path) {
                            navigate(dropItem.path);
                          }
                          setShowSideMenu(false);
                        }}>
                        {dropItem.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </ul>
        </div>
      </RightSideDrawer>

      {/* Header */}
      <header className="bg-blue-600 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            alt="Logo"
            className="h-16 w-auto md:h-32 transition ease-in-out delay-300"
          />
          <div className="ml-4 block">
            <h1 className="text-xs font-bold text-white sm:text-sm">
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
      </header>

      {/* Desktop Menu */}
      <nav className="text-xs bg-gray-100 shadow-lg w-full py-4 sticky top-0 z-10 flex justify-end">
        <div
          className="lg:hidden flex items-center cursor-pointer text-gray-500 mr-2 border rounded-md p-1 border-gray-300"
          onClick={() => setShowSideMenu(true)}>
          <GiHamburgerMenu className="text-3xl" />
        </div>
        <ul className="hidden lg:flex items-center w-full px-6 space-x-4">
          {MenuItems.map((item, index) => (
            <li
              key={index}
              className={`flex relative px-4 py-2 text-gray-700 font-semibold cursor-pointer hover:text-blue-500 ${location.pathname === item.path ? "text-blue-500" : ""
                }`}
              onMouseEnter={() => setSelectedDropdown(index)}
              onMouseLeave={() => setSelectedDropdown(null)}
              onClick={() => handleMenuItemClick(item, index)}>
              {item.label}
              {item.dropdown && (
                <IoIosArrowDown
                  className={`text-sm ml-1 transition-transform duration-300 ${selectedDropdown === index ? "-rotate-180" : ""
                    }`}
                />
              )}
              {item.dropdown && selectedDropdown === index && (
                <ul className="absolute left-0 top-full bg-white border border-gray-200 shadow-lg rounded-md w-96 text-gray-700">
                  {item.dropdown.map((dropItem, subIndex) => (
                    <li
                      key={subIndex}
                      className="px-4 py-2 hover:bg-gray-100"
                      onClick={() => {
                        if (dropItem.redirect) {
                          window.location.href = dropItem.redirect;
                        } else if (dropItem.path) {
                          navigate(dropItem.path);
                        }
                        setSelectedDropdown(null); // Close dropdown after click
                      }}>
                      {dropItem.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      {children}
    </div>
  );
}
