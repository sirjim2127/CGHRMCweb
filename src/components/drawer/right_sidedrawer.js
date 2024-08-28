import React from "react";

export default function RightSideDrawer({ children, isOpen, setShow }) {
  return (
    <div className=" z-20">
      <div
        className={`top-0 h-full right-0 fixed bg-white z-30 transition ease-in-out delay-150 ${isOpen ? "" : "translate-x-[24rem]"
          }`}>
        {children}
      </div>
      <div
        className={`inset-0 bg-black/10 fixed ${isOpen ? "" : "hidden"}`}
        onClick={() => setShow(false)}></div>
    </div>
  );
}
