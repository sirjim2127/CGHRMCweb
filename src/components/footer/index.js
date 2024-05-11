import React from "react";
import { FaFacebookMessenger, FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="min-h-96 w-full bg-gray-800 flex flex-col">
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
    </div>
  );
}
