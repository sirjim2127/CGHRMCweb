import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function OtherLogo() {
  const [showRoadMap, setShowRoadMap] = useState(false);
  const [animateClose, setAnimateClose] = useState(false);

  const relatedLinks = [
    {
      img: `${process.env.PUBLIC_URL}/assets/logos/cghrmc.png`,
      title: "CGHRMC TRANSFORMATION ROADMAP(2028)",
      description:
        "The Coast Guard Human Resource Management Command (CGHRMC) is the human resource management arm of the Philippine Coast Guard.",
      link: "",
      rediect: "https://www.facebook.com/CGHRMCOfficial",
      rounded: true,
      callback: () => {
        setShowRoadMap(true);
        setAnimateClose(false);
      },
    },
    {
      img: `${process.env.PUBLIC_URL}/assets/logos/pgs.jpeg`,
      title: "PERFORMANCE GOVERNANCE SYSTEM",
      description:
        "The Coast Guard Human Resource Management Command (CGHRMC) is the human resource management arm of the Philippine Coast Guard.",
      link: "",
      rediect: "https://isacenter.org/pgs/",
      rounded: false,
    },
  ];

  const navigate = useNavigate();

  const handleCloseModal = () => {
    setAnimateClose(true);
    setTimeout(() => {
      setShowRoadMap(false);
    }, 300); // Duration of the close animation
  };

  return (
    <div className="bg-gray-200 p-8">
      {/* Modal with animations */}
      {showRoadMap && (
        <div
          className={`inset-0 bg-black/90 fixed top-0 z-20 flex items-center justify-center transition-all duration-300 
          ${animateClose ? "opacity-0 transform scale-90" : "opacity-100 transform scale-100"}`}
        >
          <div
            className="top-0 right-0 fixed cursor-pointer text-4xl p-2 text-white"
            onClick={handleCloseModal}
          >
            <IoCloseSharp />
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/img/roadmap.jpeg`}
            alt="aboutuscover"
            className="p-4 relative max-h-full transition-all duration-300"
          />
        </div>
      )}

      <h2 className="text-3xl font-bold mb-6 text-gray-700">About</h2>
      <div className="flex justify-center items-center flex-wrap gap-6 cursor-pointer">
        {relatedLinks.map((item, index) => (
          <div
            onClick={() => {
              if (item.callback) item.callback();
              else if (item?.rediect) window.open(item.rediect, "_blank");
              else if (item?.link) navigate(item.link);
            }}
            key={index}
            className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg transform hover:rotate-3 transition duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className={`object-cover h-32 ${item.rounded ? "rounded-full w-32" : ""
                } mb-4`}
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-100 rounded-md w-full bg-blue-800 px-4 py-2">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
