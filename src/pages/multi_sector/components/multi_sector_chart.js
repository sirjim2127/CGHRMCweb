import React, { useState } from "react";
import VerticalLine from "./vertical_line";
import HorizontalLine from "./horizontal_line";
import { IoCloseSharp } from "react-icons/io5";

export default function MultiSectorChart() {
  const [showRoadMap, setShowRoadMap] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  function ViewableCardObject({ src, viewSrc, hiddenVLine = false }) {
    return (
      <div
        className="flex flex-col items-center cursor-pointer"
        onClick={() => {
          setCurrentImage(viewSrc);
          setShowRoadMap(true);
        }}>
        <VerticalLine hidden={hiddenVLine} />
        <CardObject src={src} />
      </div>
    );
  }

  return (
    <div className="w-full p-4 mb-12">
      <div
        className={`inset-0 bg-black/90 fixed top-0 z-20 flex items-center justify-center ${
          showRoadMap ? "" : "hidden"
        }`}>
        <div
          className="top-0 right-0 fixed cursor-pointer text-4xl p-2 text-white"
          onClick={() => setShowRoadMap(false)}>
          <IoCloseSharp />
        </div>
        <img
          src={currentImage}
          alt={"aboutuscover"}
          className="object-center"
        />
      </div>
      <div className="lg:h-32 h-20  flex justify-center items-center mb-8">
        <img
          src={`${process.env.PUBLIC_URL}/assets/logo.png`}
          alt=""
          className="h-full max-w-full mx-4"
        />
        <div className="text-center text-blue-500 font-semibold">
          <h1 className="text-sm sm:text-lg md:text-4xl">
            CGHRMC MULTI-SECTOR
            <br className="sm:hidden md:block" />
            GOVERNANCE COUNCIL
          </h1>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/logos/pgs.jpeg`}
          alt=""
          className="h-full max-w-full mx-4 p-2"
        />
      </div>
      <ViewableCardObject
        src={`${process.env.PUBLIC_URL}/assets/img/org_chart/HonEleandro.png`}
        viewSrc={`${process.env.PUBLIC_URL}/assets/img/org_chart_desc/HonEleandro.png`}
        hiddenVLine
      />
      <VerticalLine />
      <ViewableCardObject
        src={`${process.env.PUBLIC_URL}/assets/img/org_chart/AdmRamon.png`}
        viewSrc={`${process.env.PUBLIC_URL}/assets/img/org_chart_desc/AdmRamon.png`}
        hiddenVLine
      />
      <VerticalLine />
      <HorizontalLine />
      <div className="flex justify-between">
        <ViewableCardObject
          src={`${process.env.PUBLIC_URL}/assets/img/org_chart/ColAriel.png`}
          viewSrc={`${process.env.PUBLIC_URL}/assets/img/org_chart_desc/ColAriel.png`}
        />
        <ViewableCardObject
          src={`${process.env.PUBLIC_URL}/assets/img/org_chart/HonManuel.png`}
          viewSrc={`${process.env.PUBLIC_URL}/assets/img/org_chart_desc/HonManuel.png`}
        />
        <ViewableCardObject
          src={`${process.env.PUBLIC_URL}/assets/img/org_chart/CaptAldrin.png`}
          viewSrc={`${process.env.PUBLIC_URL}/assets/img/org_chart_desc/CaptAldrin.png`}
        />
        <div>
          <div className="w-full flex justify-center h-80">
            <div className="border-r-2 border-black"></div>
          </div>
        </div>
        <ViewableCardObject
          src={`${process.env.PUBLIC_URL}/assets/img/org_chart/NoImage.png`}
          viewSrc={`${process.env.PUBLIC_URL}/assets/img/org_chart/NoImage.png`}
        />
        <ViewableCardObject
          src={`${process.env.PUBLIC_URL}/assets/img/org_chart/MrVidal.png`}
          viewSrc={`${process.env.PUBLIC_URL}/assets/img/org_chart_desc/MrVidal.png`}
        />
        <ViewableCardObject
          src={`${process.env.PUBLIC_URL}/assets/img/org_chart/MrRichard.png`}
          viewSrc={`${process.env.PUBLIC_URL}/assets/img/org_chart_desc/MrRichard.png`}
        />
      </div>
      <div className="w-full">
        <VerticalLine />
        <HorizontalLine />
      </div>

      <div className="flex justify-between">
        <ViewableCardObject
          src={`${process.env.PUBLIC_URL}/assets/img/org_chart/AuxRadmJose.png`}
          viewSrc={`${process.env.PUBLIC_URL}/assets/img/org_chart_desc/AuxRadmJose.png`}
        />
        <ViewableCardObject
          src={`${process.env.PUBLIC_URL}/assets/img/org_chart/AuxRadmHilda.png`}
          viewSrc={`${process.env.PUBLIC_URL}/assets/img/org_chart_desc/AuxRadmHilda.png`}
        />
        <ViewableCardObject
          src={`${process.env.PUBLIC_URL}/assets/img/org_chart/MrFernando.png`}
          viewSrc={`${process.env.PUBLIC_URL}/assets/img/org_chart_desc/MrFernando.png`}
        />
        <ViewableCardObject
          src={`${process.env.PUBLIC_URL}/assets/img/org_chart/NoImage.png`}
          viewSrc={`${process.env.PUBLIC_URL}/assets/img/org_chart/NoImage.png`}
        />
      </div>
    </div>
  );
}

function CardObject({ src }) {
  return (
    <div className="w-12 h-24 sm:w-20 sm:h-28 md:w-28 md:h-32 lg:w-40 lg:h-44 xl:w-52 xl:h-56 rounded-lg overflow-hidden">
      <img
        src={src}
        alt={"aboutuscover"}
        className=" object-fill h-full w-full"
      />
    </div>
  );
}
