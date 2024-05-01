import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function LandingCarousel() {
  return (
    <div className="max-h-[500px] flex items-center justify-center">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        emulateTouch={true}
        className="">
        {carouselItems.map((item, index) => (
          <div key={index} className="max-h-[500px] flex justify-center items-center">
            <div className="absolute flex flex-col top-0 left-0 p-4 bg-gray-800/40 m-2 rounded-md">
              <h1 className="text-left text-lg font-bold text-white">{item.title}</h1>
              <p className="text-md text-justify text-gray-200">{item.description}</p>
            </div>

            <img
              src={item.img}
              alt={item.alt}
              className="h-[500px] object-cover w-full"
            />
          </div>))}

      </Carousel>
    </div>
  );
}

const carouselItems = [
  {
    title: "Coast Guard Command Forces",
    description: "The Coast Guard's elite command forces executing precision maneuvers and tactical operations to ensure maritime security and safety.",
    img: `${process.env.PUBLIC_URL}/assets/carousel_images/1.jpg`,
    alt: "1"
  },
  {
    title: "Search and Rescue Mission",
    description: "Dedicated Coast Guard teams conducting a high-stakes search and rescue mission, braving treacherous conditions to save lives at sea.",
    img: `${process.env.PUBLIC_URL}/assets/carousel_images/2.jpg`,
    alt: "2"
  },
  {
    title: "Coastal Patrol Duty",
    description: "Vigilant Coast Guard vessels patrolling the coastal waters, safeguarding against illegal activities and providing assistance to vessels in need.",
    img: `${process.env.PUBLIC_URL}/assets/carousel_images/3.jpg`,
    alt: "3"
  },
  {
    title: "Training and Preparedness",
    description: "Dedicated Coast Guard personnel participating in rigorous training exercises, honing their skills to respond effectively to any maritime emergency.",
    img: `${process.env.PUBLIC_URL}/assets/carousel_images/4.jpg`,
    alt: "4"
  },
  {
    title: "Maritime Surveillance Operations",
    description: "Utilizing cutting-edge technology and advanced surveillance systems, the Coast Guard conducts round-the-clock monitoring to detect and deter maritime threats.",
    img: `${process.env.PUBLIC_URL}/assets/carousel_images/5.jpg`,
    alt: "5"
  }
];
