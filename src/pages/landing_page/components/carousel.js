import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function LandingCarousel() {
  return (
    <div className="flex items-center justify-center overflow-hidden relative w-full">
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        emulateTouch={true}
        showStatus={false}
        showArrows={false}
        useKeyboardArrows={true}
        swipeable={true}
        className="w-full">
        {carouselItems.map((item, index) => (
          <div key={index} className="relative w-full">
            <img
              src={item.img}
              alt={item.alt}
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

const carouselItems = [
  {
    title: "",
    description: "",
    img: `${process.env.PUBLIC_URL}/assets/carousel_images/1.jpg`,
    alt: "Slide 1",
  },
  {
    title: "",
    description: "",
    img: `${process.env.PUBLIC_URL}/assets/carousel_images/2.jpg`,
    alt: "Slide 2",
  },
  {
    title: "",
    description: "",
    img: `${process.env.PUBLIC_URL}/assets/carousel_images/3.jpg`,
    alt: "Slide 3",
  },
  {
    title: "",
    description: "",
    img: `${process.env.PUBLIC_URL}/assets/carousel_images/4.jpg`,
    alt: "Slide 4",
  },
  {
    title: "",
    description: "",
    img: `${process.env.PUBLIC_URL}/assets/carousel_images/5.jpg`,
    alt: "Slide 5",
  },
];
