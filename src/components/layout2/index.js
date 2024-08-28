import React, { useEffect, useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookMessenger, FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import RightSideDrawer from '../drawer/right_sidedrawer';
import { IoIosArrowDown } from 'react-icons/io';


const MenuItems = [
    { label: "HOME", path: "/" },
    {
        label: "CGHRMC TR",
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
    const location = useLocation();
    const [openIndex, setOpenIndex] = useState(null);
    const [showSideMenu, setShowSideMenu] = useState(false);
    const handleMouseEnter = (index) => {
        setOpenIndex(index);
    };

    const handleMouseLeave = () => {
        setOpenIndex(null);
    };

    const [bgOpacity, setBgOpacity] = useState(0.3);
    const opacityThreshold = 400; // Adjust this value as needed

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > opacityThreshold) {
            setBgOpacity(1);
        } else {
            setBgOpacity(0.3);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isLandingPage = location?.pathname === "/" ? true : false;

    const [selectedDropdown, setSelectedDropdown] = useState(null);

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
        <div className='h-screen w-screen'>
            <header
                className={`h-20 flex p-4  ${isLandingPage ? "fixed" : "sticky"} top-0 z-20 w-full text-gray-100 items-center justify-between transition ease-in-out delay-500`}
                style={{ backgroundColor: `rgba(37, 99, 235, ${isLandingPage ? bgOpacity : 1})` }}
            >
                <div className='flex h-full items-center space-x-2 cursor-pointer' onClick={() => navigate("/")}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                        alt="Logo"
                        className="h-12"
                    />
                    <label className='text-2xl font-semibold text-gray-100'>Coastguard</label>
                </div>

                <ul className='h-full hidden lg:flex items-center space-x-3 px-2 font-medium text-gray-100 text-xs'>
                    {MenuItems?.map?.((item, index) => (
                        <li
                            key={index}
                            className='relative group hover:text-blue-300 cursor-pointer text-nowrap'
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => { if (item.path) navigate(item.path); }}
                        >
                            {item.path ? (
                                <span>{item.label}</span>
                            ) : (
                                <span>{item.label}</span>
                            )}
                            {item.dropdown && (
                                <ul
                                    className={`absolute left-0 bg-black/80 rounded-lg shadow-lg z-10 transition-opacity duration-300 ${openIndex === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                                        }`}
                                >
                                    {item.dropdown.map((subItem, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className='hover:bg-blue-300/50 hover:text-white text-gray-100 px-4 py-2 rounded-lg whitespace-nowrap'
                                            onClick={() => { if (subItem.path) navigate(subItem?.redirect ?? subItem.path); }}
                                        >
                                            {subItem.path ? (
                                                <span>{subItem.label}</span>
                                            ) : (
                                                <a href={subItem.redirect} target='_blank' rel='noopener noreferrer'>
                                                    {subItem.label}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>

                <HiOutlineMenuAlt3 className='text-3xl block lg:hidden cursor-pointer hover:text-blue-300 mr-4' onClick={() => setShowSideMenu(true)} />

            </header>
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
                    <ul className="flex flex-col">
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
            <div className='overflow-y-auto'>
                {children}
            </div>
            <footer className="min-h-[20vh] w-full bg-gray-800 flex flex-col">
                <div className="flex-1"></div>
                <div className="flex p-4 justify-end">
                    <FaFacebookSquare
                        className="text-3xl text-gray-200 mx-2 cursor-pointer"
                        onClick={() =>
                            (window.location.href = "https://www.facebook.com/CGHRMCOfficial")
                        }
                    />
                    <FaFacebookMessenger
                        className="text-3xl text-gray-200 mx-2 cursor-pointer"
                        onClick={() =>
                            (window.location.href = "https://www.facebook.com/CGHRMCOfficial")
                        }
                    />
                    <AiFillInstagram
                        className="text-3xl text-gray-200 mx-2 cursor-pointer"
                        onClick={() =>
                            (window.location.href = "https://www.facebook.com/CGHRMCOfficial")
                        }
                    />
                </div>
            </footer>
        </div>
    );
}