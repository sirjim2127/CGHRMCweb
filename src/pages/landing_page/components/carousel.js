import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function LandingCarousel() {
  return (
    <div className="flex items-center justify-end overflow-x-hidden max-w-full">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        emulateTouch={true}
        className="">
        <div
          className="flex items-center rounded-md"
          style={{
            backgroundImage: `url('/assets/carousel_images/1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
        <div
          className="flex items-center rounded-md"
          style={{
            backgroundImage: `url('/assets/carousel_images/2.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
        <div>
          <img
            src="/assets/carousel_images/3.jpg"
            alt="Logo 3"
            className="w-full h-full object-contain"
          />
        </div>
        <div
          className="flex items-center rounded-md"
          style={{
            backgroundImage: `url('/assets/carousel_images/4.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
        <div
          className="flex items-center rounded-md"
          style={{
            backgroundImage: `url('/assets/carousel_images/5.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      </Carousel>
    </div>
  );
}
