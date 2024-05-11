import React from "react";

const ScoreCard = () => {
  return (
    <div className="w-full overflow-auto">
      <div className="p-4 sm:p-8">
        <div className="sm:min-w-[700px] min-w-[600px]">
          <div className="w-full text-xl text-white bg-[#012060] py-4 font-bold text-center">
            IMPACT SCORECARD
          </div>
          <div className="bg-white overflow-hidden shadow-md">
            <table className="w-full table-fixed border">
              <thead>
                <tr className="bg-[#01B0F1] text-white font-semibold text-center">
                  <th className="w-1/5 py-2 border">Impact</th>
                  <th className="w-1/5 py-2 border">Measure(KPI)</th>
                  <th className="w-1/5 py-2 border">2021(Baseline)</th>
                  <th className="w-1/5 py-2 border">2025(Targets)</th>
                  <th className="w-1/5 py-2 border">2028(Targets)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="py-8 border">
                    Efficient and Effective Philippine Coast Guard Personnel
                  </td>
                  <td className="py-48 border">
                    Net Trusting Rating Focusing on PCG Personnel
                  </td>
                  <td className="py-8 border">+68(Excellent)</td>
                  <td className="py-8 border">(Excellent)</td>
                  <td className="py-8 border">(Excellent)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-8">
        <div className="sm:min-w-[700px] min-w-[600px]">
          <div className="w-full text-xl text-white bg-[#012060] py-4 font-bold text-center">
            POSITION SCORECARD
          </div>
          <div className="w-full">
            <div className="bg-[#01B0F1] text-white font-semibold text-center flex">
              <div className="w-1/4 py-2 border">Position</div>
              <div className="w-1/4 py-2 border">Measure</div>
              <div className="w-1/4 py-2 border">2025</div>
              <div className="w-1/4 py-2 border">2028</div>
            </div>
            <div className="text-center flex h-[500px]">
              <div className="w-1/4 py-2 border flex justify-center items-center">
                An Internationally compliant strategic HR system with certified
                HR professionals supported by a functional HR Information system
              </div>
              <div className="w-1/4 py-2 border">
                <div className="py-2 h-1/3 border-b flex items-center justify-center">
                  ISO 9001:2015 Certification
                </div>
                <div className="py-2 h-1/3 border-b flex items-center justify-center">
                  HR Professionals
                </div>
                <div className="py-2 h-1/3 flex items-center justify-center">
                  HRIS
                </div>
              </div>
              <div className="w-1/4 py-2 border">
                <div className="py-2 h-1/3 border-b flex items-center justify-center">
                  certified
                </div>
                <div className="py-2 h-1/3 border-b flex items-center justify-center">
                  70% of CGHRMC and HRMU personnel are certified HR
                  professionals
                </div>
                <div className="py-2 h-1/3 flex items-center justify-center">
                  Functional
                </div>
              </div>
              <div className="w-1/4 py-2 border">
                <div className="py-2 h-1/3 border-b flex items-center justify-center">
                  recertified
                </div>
                <div className="py-2 h-1/3 border-b flex items-center justify-center">
                  100% of CGHRMC and HRMU personnel are certified HR
                  professionals
                </div>
                <div className="py-2 h-1/3 flex items-center justify-center">
                  integrated with finance System by 2026, Logistics and Training
                  by 2028
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-8">
        <div className="sm:min-w-[700px] min-w-[600px]">
          <div className="w-full text-xl text-white bg-[#012060] py-4 font-bold text-center">
            CORE AND SUPPORT SCORECARD
          </div>
          <div className="bg-white overflow-hidden shadow-md">
            <table className="w-full table-fixed border">
              <thead>
                <tr className="bg-[#01B0F1] text-white font-semibold text-center">
                  <th className="w-1/5 py-2 border">Objectives</th>
                  <th className="w-1/5 py-2 border">#</th>
                  <th className="w-1/5 py-2 border">Measure</th>
                  <th className="w-1/5 py-2 border">2024</th>
                  <th className="w-1/5 py-2 border">2025</th>
                  <th className="w-1/5 py-2 border">2026</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="border">
                    Sustain a strategic recruitment and selection with automated
                    and standardized process compliant to international
                    standards
                  </td>
                  <td className="border">1</td>
                  <td className="border">
                    Personnel fill-up of PCG based of TOE 2017 as amended
                  </td>
                  <td className="border"></td>
                  <td className="border"></td>
                  <td className="border"></td>
                </tr>

                <tr className="text-center">
                  <td className="border">
                    Establish a responsive Career Management System at par with
                    international quality standards
                  </td>
                  <td className="border">2</td>
                  <td className="border">
                    Qualification Rating of PCG Personnel
                  </td>
                  <td className="border">10%</td>
                  <td className="border">12%</td>
                  <td className="border">14%</td>
                </tr>

                <tr className="text-center">
                  <td className="border">
                    Adapt global standards to enhance morale and welfare
                    programs and services and establish the Separation and
                    Attrition System
                  </td>
                  <td className="border">3</td>
                  <td className="border">
                    Survey on Well-being and Motivativation of PCG Personnel
                  </td>
                  <td className="border">High Morale</td>
                  <td className="border">High Morale</td>
                  <td className="border">High Morale</td>
                </tr>
                <tr className="text-center">
                  <td className="border"></td>
                  <td className="border">4</td>
                  <td className="border">Attrition and Separation Rate</td>
                  <td className="border">0.57%</td>
                  <td className="border">0.55%</td>
                  <td className="border">0.53%</td>
                </tr>
                <tr className="text-center">
                  <td className="border">
                    Develop an integrated one-stop shop retirement system
                    responsive to the needs of retiring personel and the
                    beneficiaries
                  </td>
                  <td className="border">5</td>
                  <td className="border">
                    Satisfaction Rating of CGRBAS Clients
                  </td>
                  <td className="border"></td>
                  <td className="border">75%</td>
                  <td className="border">80%</td>
                </tr>
                <tr className="text-center">
                  <td className="border">
                    Reconfigure and upgrade the support units to better respond
                    to the strategic requirements of the CGHRMC
                  </td>
                  <td className="border">6</td>
                  <td className="border">Operational Readiness of CGHRMC</td>
                  <td className="border">12%</td>
                  <td className="border">25%</td>
                  <td className="border">50%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
