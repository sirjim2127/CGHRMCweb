import React from "react";
import { useInView } from "react-intersection-observer";

const AnimatedSection = ({ children, animationType = "fade-in" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  // Map animation types to their classes
  const animationClasses = {
    "fade-in": "fade-in",
    "slide-up": "slide-up",
    "scale-up": "scale-up",
    rotate: "rotate",
    "zoom-in": "zoom-in",
    "fade-up": "fade-up",
    bounce: "bounce",
  };

  return (
    <div
      ref={ref}
      className={`${animationClasses[animationType]} ${
        inView ? "visible" : ""
      }`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
