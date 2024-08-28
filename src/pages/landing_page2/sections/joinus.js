import React from "react";
import AnimatedSection from "../../../components/animations/animated_section";

export default function JoinUsSection() {
    return (
        <div className="relative h-[300px] w-full bg-blue-600 flex flex-col justify-center items-center py-10 overflow-hidden">
            <div className="absolute h-[800px] w-full">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                    alt="Logo"
                    className="h-full w-auto opacity-5 -rotate-45 object-contain"
                />
            </div>
            <AnimatedSection animationType="slide-up">
                <div className="text-center z-10">
                    <h2 className="text-3xl font-bold text-white mb-8">
                        Join the Coast Guard
                    </h2>
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