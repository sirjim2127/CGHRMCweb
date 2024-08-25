import React from "react";
import AnimatedSection from "../../../components/animations/animated_section";

export default function COPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">COMMANDER</h1>
      </header>
      <AnimatedSection animationType="slide-up">
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Profile Image Section */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex items-start justify-center bg-gray-200">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={`${process.env.PUBLIC_URL}/assets/leadership/co/co.png`}
                alt="Coast Guard Rear Admiral Allen J Dalangin"
                className="absolute top-0 left-0 w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Introduction Section */}
          <div className="flex-1 p-4 md:p-8 bg-white overflow-y-auto">
            {/* <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Introduction
          </h2> */}
            <p className="text-base text-gray-700 leading-relaxed">
              <span className="font-semibold">
                Coast Guard Rear Admiral Allen J. Dalangin, O-11821,
              </span>
              possesses an exemplary record of awards, recognitions,
              commendations, and citations throughout his 28 years in service as
              an officer of the Philippine Coast Guard. A graduate of the
              prestigious Philippine Military Academy in 1995, Class Marilag,
              with a degree of Bachelor of Science in Naval Systems Engineering,
              he also pursued advanced degrees and obtained his Master in
              National Security Administration (MNSA) at the National Defense
              College of the Philippines in 2016. His expertise in operations
              and administration placed him in significant positions including
              Former Commander of Coast Guard Intelligence Force, Former Deputy
              Chief of Coast Guard Staff for Intelligence, CG-2, Former
              Commander of Coast Guard K-9, Former Commander of Task Force
              Aduana, Former Deputy Commander of Maritime Security Law
              Enforcement Command, and currently the Commander of Human Resource
              Management Command. Among his notable accomplishments in maritime
              security and law enforcement operations are the various
              apprehensions and confiscations of illegal drugs, particularly
              cocaine in Samar and Leyte in 2011, and the 2019 apprehension of 1
              billion worth of shabu in Malabon together with the Bureau of
              Customs. CG RADM Dalangin also earned different awards and plaques
              of recognition throughout his career. He is a recipient of the
              Plaque of Recognition from the Philippines-Japan Fellows
              Association for being adjudged as an Outstanding JICA Alumni in
              the field of Maritime Security and Safety in 2012, Plaque of
              Recognition given by His Excellency Benigno S. Aquino III for
              valuable contribution to the successful conduct of PCG missions,
              significantly in providing personnel during sustained disaster
              response operations during typhoons Pedring and Quiel in 2011. He
              is also a recipient of the Outstanding Award of Honor from Senator
              Vicente Sotto III, Chairman, Philippine Narcotic Enforcement
              Officers Association (PNEOA) for outstanding contribution in the
              field of drug supply reduction campaign in 2011. Lastly, he has
              been recognized with a lifetime achievement award as a Cavalier
              Award for Coast Guard Operations Senior Officer for his exemplary
              Coast Guard service on 17 February 2024 at PMA Fort Del Pilar.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
