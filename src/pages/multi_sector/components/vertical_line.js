import React from "react";

export default function VerticalLine({ hidden = false }) {
  return (
    <div
      className={`w-full flex justify-center h-20 ${hidden ? "hidden" : ""}`}>
      <div className="border-r-2 border-black"></div>
    </div>
  );
}
