import React from "react";

export default function COPage() {
  return (
    <div>
      <div className="w-full flex items-center justify-center py-8">
        <img
          src={`${process.env.PUBLIC_URL}/assets/leadership/co/co.png`}
          alt={"co"}
          className="object-center h-92 rounded-full border-8 border-blue-700"
        />
      </div>
      <div>
        {/* <h1 className="text-2xl font-bold tracking-wider text-center px-8">
          INTRODUCTION
        </h1> */}
        <p className="text-justify px-8 pb-8 text-gray-700">
          <span className="font-bold">
            COAST GUARD REAR ADMIRAL ALLEN J DALANGIN O-11821,
          </span>
          possessesan exemplary record of awards, recognitions, commendations
          and citations throughout his 28 years in service as an officer of the
          Philippine Coast Guard. Aside from being a graduate of the prestigious
          Philippine Military Academy in1995, Class Marilag with a degree of
          Bachelor of Science in Naval Systems Engineering, healso pursued
          advanced degrees and obtained his Master in National
          SecurityAdministration (MNSA) in National Defense College of the
          Philippines in 2016. His expertise in operations and administration
          placed him in significant positionswhichinclude Former Commander of
          Coast Guard Intelligence Force, Former Deputy Chief of Coast Guard
          Staff for Intelligence, CG-2, Former Commander of Coast GuardK-9,
          Former Commander of Task Force Aduana, Former Deputy Commander of
          MaritimeSecurity Law Enforcement Command and currently the Commander
          of Human ResourceManagement Command. Among his notable accomplishments
          in the field of maritime security andlawenforcement operations are the
          various apprehension and confiscation of illegal drugsparticularly
          cocaine in Samar and Leyte in 2011 and the 2019 apprehension of
          1billionworth of shabu in Malabon together with the Bureau of Customs.
          CG RADM DALANGIN also earned different Awards and Plaque of
          Recognitionsthrough his career. He is a recipient of Plaque of
          Recognition fromPhilippines-JapanFellows Association for being
          adjudged as an Outstanding JICA Alumni in thefieldof Maritime Security
          and Safety in 2012, Plaque of Recognition given by His
          ExcellencyBenigno S. Aguino III for valuable contribution to the
          successful conduct of PCGmissions significantly in providing personnel
          during sustained disaster responseoperations during typhoons Pedring
          and Quiel in 2011. Also he is a recipient of Outstanding Award of
          Honor from Senator Vicente Sotto III, Chairman, PhilippineNarcotic
          Enforcement Officers Association (PNEOA) for outstanding
          contributioninthefield of drug supply reduction campaign in 2011.
          Lastly, he has been recognizedwithalifetime achievement Awardee as a
          Cavalier Award for Coast Guard OperationsSeniorOfficer for his
          exemplary Coast Guard Service on 17 February 2024 at PMAFort Del Pilar
        </p>
      </div>
    </div>
  );
}
