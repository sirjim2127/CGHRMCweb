import React from "react";

import Heading from "../../components/typography/heading";
import Content from "../../components/typography/content";
import LandingCarousel from "./components/carousel";

import { FaFacebookMessenger, FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function LandingPage() {
  return (
    <div className="">
      <div className="w-full max-h-full 2xl:flex-row flex flex-col p-4 bg-gray-100">
        <div className="mx-auto">
          <LandingCarousel />
        </div>
        <div className="flex-1 w-full max-h-full p-4">
          <Heading>
            The Coast Guard Human Resource Management Service (COHRMS)
          </Heading>
          <Content>
            The Coast Guard Human Resource Management Service (COHRMS) traces
            its roots back to its activation in 2017 pursuant to Headquarters
            Phitipoine Coast Ouard General Order N 335 dated 18 August 2017 as
            an administrative support unit initially established as a part of
            the larger Deputy Chief of Coast Guard Staff for Human Resource
            Management, CG-i, the COHRMS aimed to provide excellent, timely, and
            expeditious personnel services regarding direction, control, and
            supervision of human resource management or personnel matters within
            the PC organization. Recognizing the importance Of dedicated
            commanincorang CCHRMS was implemented a distinct and separate
            service from CG-1 in 2018 in 2019, the COHRMS took a significant
            step forward by activating the Satellite Training institute (ST).
            This allowed the Command to rovide specialized training and
            development programs human Resource Personnel fostering their
            professional growth and ensuring a skilled workforce within the
            Command
          </Content>
        </div>
      </div>

      <div className="flex justify-center p-4">
        <div className="mt-8 flex items-start flex-col lg:flex-row ">
          <div className="flex-1 rounded-md justify-between items-start">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/unit_training.png`}
              alt="TrainingImage"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <div className="flex-1 px-4">
            <Heading>
              CGHRMCHC-HOLDS CONVENING CEREMONY FOR CRISIS FUNCTION UNIT
              TRAINING COURSE (CFUTC) CLASS 0224
            </Heading>
            <Content>
              On 26 April 2024, the Coast Guard Human Resource Management
              Command (CGHRMC) through the Human Resource Management School
              (HRMS) successfully convened the Core Function Unit Training
              Course (CFUTC) Class 02-2024 aboard Headquarters, CGHRMC #56 M.L.
              Quezon Street, New Lower Bicutan, Taguig City. The CFUTC Cl
              02-2024 is composed of 66 CGHRMC personnel comprised of 4 Officers
              and 62 Non-officer students assigned within CGHRMC units. Said
              course aims to enhance and equipped participants with the
              necessary knowledge, skills, and competencies where they are
              expected to play pivotal roles in the development of the Command's
              Core Functions on recruitment, career management, personnel
              management, and retirement and benefit administration. The said
              event was presided by CG COMMO ROMMEL A SUPANGAN, Commander, Coast
              Guard Human Resource Management Command where he encouraged the
              students to approach every lesson, assignment and interaction with
              enthusiasm and a mindset geared towards growth and embrace
              challenges as changes to expand their understanding not only to
              mold their personal and professional growth but also to play a
              vital role in the organization’s ongoing success. Further, the
              convening of the said course marks another significant step in
              ensuring that PCG personnel are ready for the challenges
              associated with the administrative functions of the PCG. Moreover,
              the Commander, CGHRMC also lauded the HRMS's performance and
              continued dedication in providing relevant trainings to all CGHRMC
              Personnel. The course is one of the basic trainings required for
              every CGHRMC personnel prior deployment to CORE Function Centers,
              Support and Operating units such as HRMUs.
            </Content>
          </div>
        </div>
      </div>

      <div className="flex justify-center p-4 bg-gray-100">
        <div className="mt-8 flex flex-col lg:flex-row items-start">
          <div className="flex-1 px-4">
            <Heading>CGHRNC PGS GOVERNANCE SHARING</Heading>
            <Content>
              On 24 April 2024, the Coast Guard Human Resource Management
              Command (CGHRMC) through the Office of the Strategy Management
              (OSM) under the leadership of CG COMMO ROMMEL A SUPANGAN held a
              PGS Governance Sharing to all PCG units aboard Coast Guard Base
              Taguig at HCGHRMC, #56 ML Quezon St. New Lower Bicutan, Taguig
              City. During the session, participants discussed critical barriers
              impacting strategy, such as resource shortages, personnel
              transition disruptions, management commitment and budgetary
              constraints. CG COMMO SUPANGAN emphasized the imperative of
              aligning all units with the PCG's overarching strategy, advocating
              for transparency in strategic assessments. On CGHRMC PGS journey,
              CG COMMO SUPANGAN shared the transformational changes of the
              Command from restructuring and reorganization of core HR functions
              and HR support services to be responsive to the current need of
              CGHRMC in serving the PCG personnel. CGHRMC shared its strategies
              and roadmap for change encompassing improvements in HR
              recruitment, career management, personnel management, and
              retirement and benefit administration. Emphasis was also placed on
              aligning plans and programs with the CGHRMC strategy map and
              leveraging the Performance Governance System (PGS) framework. The
              open forum explored challenges and proposed solutions,
              highlighting the importance of specialized PCG units and
              structural adjustments within the organization.
            </Content>
          </div>
          <div className="flex-1 rounded-md justify-between items-start">
            <img
              src={`${process.env.PUBLIC_URL}/assets/img/sharing1.png`}
              alt="Sharing"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="min-h-96 w-full bg-gray-800 flex flex-col">
        <div className="flex-1"></div>
        <div className="flex p-4 justify-end">
          <FaFacebookSquare
            className="text-3xl text-gray-200 mx-2 cursor-pointer"
            onClick={() =>
              (window.location.href = "https://www.facebook.com/CGHRMCOfficial")
            }
          />
          <FaFacebookMessenger
            className="text-3xl text-gray-200 mx-2 cursor-pointer"
            onClick={() =>
              (window.location.href = "https://www.facebook.com/CGHRMCOfficial")
            }
          />
          <AiFillInstagram
            className="text-3xl text-gray-200 mx-2 cursor-pointer"
            onClick={() =>
              (window.location.href = "https://www.facebook.com/CGHRMCOfficial")
            }
          />
        </div>
      </div>
    </div>
  );
}
