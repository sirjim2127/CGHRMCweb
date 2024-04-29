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
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/carousel_images/1.jpg`}
            alt="1"
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        <img
          src={`${process.env.PUBLIC_URL}/assets/carousel_images/2.jpg`}
          alt="2"
          className="w-full h-full object-contain rounded-md"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/carousel_images/3.jpg`}
          alt="3"
          className="w-full h-full object-contain rounded-md"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/carousel_images/4.jpg`}
          alt="4"
          className="w-full h-full object-contain rounded-md"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/carousel_images/5.jpg`}
          alt="5"
          className="w-full h-full object-contain rounded-md"
        />

      </Carousel>
    </div>
  );
}
