import React from "react";

export default function PressReleaseSection() {
  return (
    <div className="bg-white p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Press Release</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 cursor-pointer">
        {pressReleaseItems.map((item, index) => (
          <div
            onClick={() => window.open(item.link, "_blank")}
            key={index}
            className="flex flex-col items-center p-4 border border-gray-300 rounded-lg shadow-lg hover:scale-105 transition duration-300">
            <img
              src={item.img}
              alt={item.title}
              className="object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              {item.title}
            </h3>
            <p className="text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const pressReleaseItems = [
  {
    img: `${process.env.PUBLIC_URL}/assets/img/press_release/specilization_class_course_04_2024.png`,
    title:
      "Yeoman Specialization Course Class 04-2024 Triumphs in Defending 20 Case Studies",
    description: "",
    link: "https://www.facebook.com/photo/?fbid=476357581721161&set=pcb.476358828387703",
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/img/press_release/specialization_course.png`,
    title:
      "CGHRMC-HRMS Concludes Yeoman Specialization Course CL 03-2024 AGAP-MARIPAY",
    description: "",
    link: "https://www.facebook.com/photo/?fbid=472657845424468&set=pcb.472645528759033",
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/img/press_release/pup_courtesy_call.png`,
    title:
      "CGHRMC Conducts Courtesy Call to the Polytechnic University of the Philippines",
    description: "",
    link: "https://www.facebook.com/photo/?fbid=470136909009895&set=pcb.470136972343222",
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/img/press_release/governance_aboard.png`,
    title:
      "OSM and HR-15 Drive Good Governance Aboard Maritime Safety Services Command",
    description: "",
    link: "https://www.facebook.com/photo/?fbid=470277268995859&set=pcb.470277335662519",
  },
  {
    img: `${process.env.PUBLIC_URL}/assets/img/press_release/specialization_course_03_2024.png`,
    title:
      "Yeoman Specialization Course Class 03-2024 Concludes Their On-the-Job Training at the Four Core Function Centers of CGHRMC and Various HRMUs",
    description: "",
    link: "https://www.facebook.com/photo/?fbid=469661049057481&set=pcb.469666212390298",
  },
];
