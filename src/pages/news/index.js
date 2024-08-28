import React, { useState } from "react";
import { newsData } from "./utils/news";
import SideDrawer from "../../components/drawer/sidedrawer";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NewsPage() {
  const [showNewsList, setShowNewsList] = useState(false);
  const [currentNews, setCurrentNews] = useState(newsData[0].newsFile);

  return (
    <div className="flex-1 h-full max-h-full overflow-y-auto">
      {/* Side Drawer Toggle Icon */}
      <div
        className="flex flex-col justify-center items-center fixed bg-gray-500 cursor-pointer text-gray-100 rounded-full w-12 h-12 m-2 shadow-lg lg:hidden"
        onClick={() => setShowNewsList(true)}
      >
        <RxHamburgerMenu className="text-2xl " />
        <p className="text-[0.5rem]">News</p>
      </div>

      {/* Side Drawer */}
      <SideDrawer isOpen={showNewsList} setShow={setShowNewsList}>
        <div className="w-72 max-h-full bg-white overflow-y-auto p-4">
          <h1 className="text-lg font-bold text-blue-500 mb-4">NEWSLETTER</h1>
          <ul>
            {newsData.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setCurrentNews(item.newsFile);
                  setShowNewsList(false);
                }}
                className={`${currentNews === item.newsFile
                  ? "bg-blue-500 text-gray-100"
                  : "hover:bg-blue-100"
                  } p-2  cursor-pointer rounded-md mb-1`}
              >
                <h1
                  className={`${currentNews === item.newsFile
                    ? "text-gray-100"
                    : "text-gray-400"
                    } text-sm text-gray-700 font-semibold`}
                >
                  {item.title}
                </h1>
                <p
                  className={`${currentNews === item.newsFile
                    ? "text-gray-100"
                    : "text-gray-400"
                    } text-xs `}
                >
                  {item.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </SideDrawer>

      {/* News List and PDF Viewer */}
      <div className="flex h-full max-h-full">
        {/* News List (visible on large screens) */}
        <div className="w-72 h-full max-h-full bg-white overflow-y-auto p-4 lg:block hidden">
          <h1 className="text-lg font-bold text-blue-500 mb-4">NEWSLETTER</h1>
          <ul>
            {newsData.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setCurrentNews(item.newsFile);
                }}
                className={`${currentNews === item.newsFile
                  ? "bg-blue-500 text-gray-100"
                  : "hover:bg-blue-100"
                  } p-2  cursor-pointer rounded-md mb-1`}
              >
                <h1
                  className={`${currentNews === item.newsFile
                    ? "text-gray-100"
                    : "text-gray-400"
                    } text-sm text-gray-700 font-semibold`}
                >
                  {item.title}
                </h1>
                <p
                  className={`${currentNews === item.newsFile
                    ? "text-gray-100"
                    : "text-gray-400"
                    } text-xs `}
                >
                  {item.date}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 h-[100vh] w-full">
          <iframe
            title="PDF Viewer"
            src={currentNews}
            width="100%"
            height="100%"
            style={{ border: "none" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
