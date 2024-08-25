import React from "react";
import AnimatedSection from "../../../components/animations/animated_section";

export default function JoinUsSection() {
  return (
    <div className="h-[300px] w-full bg-blue-600 flex flex-col justify-center items-center">
      <AnimatedSection animationType="slide-up">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Join the Coast Guard
          </h2>
          {/* <p className='text-lg text-white mb-8'>Make a difference, protect lives, safeguard our seas, and serve your country. Join the Coast Guard today!</p> */}
          <button
            onClick={() => {
              window.open("https://cg-hrmc.com/", "_blank");
            }}
            className="px-6 py-3 border-2 rounded-full bg-gradient-to-r from-blue-800 to-blue-600 text-xl text-white font-semibold shadow-md hover:scale-105 transform transition duration-300">
            Apply Now
          </button>
        </div>
      </AnimatedSection>
    </div>
  );
}
