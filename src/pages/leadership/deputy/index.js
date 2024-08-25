import React from "react";
import AnimatedSection from "../../../components/animations/animated_section";

export default function DeputyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">DEPUTY</h1>
      </header>
      <AnimatedSection animationType="slide-up">
        <div className="flex-1 flex flex-col md:flex-row">
          {/* Profile Image Section */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-screen flex items-start justify-center bg-gray-200">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={`${process.env.PUBLIC_URL}/assets/leadership/deputy/deputy.png`}
                alt="Coast Guard Rear Admiral Allen J Dalangin"
                className="absolute top-0 left-0 w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Introduction Section */}
          <div className="flex-1 p-4 md:p-8 bg-white overflow-y-auto">
            <h1 className="text-2xl font-bold tracking-wider text-center px-8">
              COAST GUARD CAPTAIN CYNTHIA ESUREÑA ESQUIVIAS O-0310 DEPUTY
              COMMANDER, COAST GUARD HUMAN RESOURCE MANAGEMENT COMMAND
            </h1>
            <p className="text-justify p-8 text-gray-700">
              CG Capt. Cynthia E. Esquivias is a member of the Coast Guard
              Officers Course Class 02-2001. She was appointed as Ensign in the
              Regular Force of the Philippine Coast Guard in 2002. Born on
              December 8, 1977, in Gubat, Sorsogon, she is often called 'Cynths'
              by her colleagues and close friends. Capt. Esquivias graduated
              from the University of the Philippines College Baguio in 1999 with
              a Bachelor of Arts in Mass Communications – Journalism. In 2021,
              she completed her Master of Science in Maritime Affairs with a
              specialization in Maritime Education and Training at the World
              Maritime University in Malmö, Sweden. Throughout her career, she
              has enhanced her skills by attending various essential training
              sessions both locally and internationally. Some of these include
              the Vessel Traffic Operator’s Course (V103/1) in MATRAIN, Port
              Klang, Malaysia; the Technical Training Design Workshop for PCG at
              the US Coast Guard Training Center in Yorktown, Virginia, USA; Law
              Enforcement Cooperation Training at the China Maritime Police
              Academy in Ningbo City, Zhejiang Province, China; Basic Maritime
              Education and Ship Operations at the Maritime Technical College in
              Kobe, Japan; the Senior Ship Management Level Course Class 04 –
              17; the Officer of the Watch Package Course Class 01 – 13; and
              Maritime Law Enforcement training.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
