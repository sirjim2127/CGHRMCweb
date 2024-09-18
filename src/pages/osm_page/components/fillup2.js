import React from 'react';
import Textbox2 from '../../../components/textbox/textbox2';

const Fillup2 = () => {
    return (
        <div className="p-4 border-2 m-2 overflow-x-auto">
            <h2 className="text-center font-bold text-xl mb-6">COAST GUARD HUMAN RESOURCE MANAGEMENT COMMAND</h2>
            <h3 className="text-center font-semibold mb-4">INDIVIDUAL SCORECARD</h3>

            <div className="mb-4">
                <div className='flex w-full'>
                    <div className='flex flex-1 border py-2 pl-2'>
                        <h4 className='font-bold text-nowrap mr-1'>Last Name:</h4>
                        <Textbox2 />
                    </div>
                    <div className='flex flex-1 border py-2 pl-2'>
                        <h4 className='font-bold text-nowrap mr-1'>First Name:</h4>
                        <Textbox2 />
                    </div>
                    <div className='flex flex-1 border max-w-20 py-2 pl-2'>
                        <h4 className='font-bold text-nowrap mr-1'>MI:</h4>
                        <Textbox2 />
                    </div>
                    <div className='flex flex-1 border py-2 pl-2'>
                        <h4 className='font-bold text-nowrap mr-1'>Rank:</h4>
                        <Textbox2 />
                    </div>
                    <div className='flex flex-1 border py-2 pl-2'>
                        <h4 className='font-bold text-nowrap mr-1'>SN:</h4>
                        <Textbox2 />
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex flex-1 border py-2 pl-2'>
                        <h4 className='font-bold text-nowrap mr-1'>Unit:</h4>
                        <Textbox2 />
                    </div>
                    <div className='flex flex-1 border py-2 pl-2'>
                        <h4 className='font-bold text-nowrap mr-1'>Designation:</h4>
                        <Textbox2 />
                    </div>
                    <div className='flex flex-1 border py-2 pl-2'>
                        <h4 className='font-bold text-nowrap mr-1'>Rating:</h4>
                        <Textbox2 />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='flex flex-1 border py-2 pl-2'>
                        <h4 className='flex-auto text-wrap mr-1'>I vouch to deliver and agree to be rated on the attainment of the following targets in accordance with the indicated measures for the period</h4>
                        <div className="min-w-0">
                            <Textbox2 />
                        </div>
                    </div>
                </div>

                <div className='flex'>
                    <div className='flex flex-1 border py-2 pl-2 items-center'>
                        <h4 className='font-bold text-nowrap mr-1'>Remarks:</h4>
                        <Textbox2 />
                    </div>
                    <div className='flex border py-2 px-4'>
                        <h4 className='font-bold text-nowrap mr-1 mt-8 text-center border-t border-black px-8'>Signature over printer name</h4>
                    </div>

                </div>

                <div className='flex'>
                    <div className='flex flex-1 border py-2 pl-2'>
                        <h4 className='font-bold text-nowrap mr-1'>Reviewed By:</h4>
                        <Textbox2 />
                    </div>
                    <div className='flex border py-2 pl-2'>
                        <h4 className='font-bold text-nowrap mr-1'>Date:</h4>
                        <Textbox2 />
                    </div>
                    <div className='flex flex-1 border py-2 pl-2'>
                        <h4 className='font-bold text-nowrap mr-1'>Approved By:</h4>
                        <Textbox2 />
                    </div>
                    <div className='flex border py-2 pl-2'>
                        <h4 className='font-bold text-nowrap mr-1'>Date:</h4>
                        <Textbox2 />
                    </div>
                </div>

            </div>

            <table className="min-w-full table-auto border-collapse border border-gray-300 mb-4">
                <thead>
                    <tr className="bg-blue-100">
                        <th className="border border-gray-300 px-4 py-2">Nr</th>
                        <th className="border border-gray-300 px-4 py-2">Contribution</th>
                        <th className="border border-gray-300 px-4 py-2">Target</th>
                        <th className="border border-gray-300 px-4 py-2">Actual</th>
                        <th className="border border-gray-300 px-4 py-2">Indicator</th>
                        <th className="border border-gray-300 px-4 py-2">Quantity (40%)</th>
                        <th className="border border-gray-300 px-4 py-2">Quality (30%)</th>
                        <th className="border border-gray-300 px-4 py-2">Timeliness (30%)</th>
                        <th className="border border-gray-300 px-4 py-2">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Section A: Major Final Outputs */}
                    <tr className="bg-gray-200">
                        <td colSpan="9" className="font-bold px-4 py-2">A. MAJOR FINAL OUTPUTS (40%)</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">1</td>
                        <td className="border border-gray-300 px-4 py-2">Conducts muster of personnel</td>
                        <td className="border border-gray-300 px-4 py-2">4</td>
                        <td className="border border-gray-300 px-4 py-2">3</td>
                        <td className="border border-gray-300 px-4 py-2">Nr musters conducted</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">15%</td>
                        <td className="border border-gray-300 px-4 py-2">75%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">2</td>
                        <td className="border border-gray-300 px-4 py-2">Created plan of the week</td>
                        <td className="border border-gray-300 px-4 py-2">4</td>
                        <td className="border border-gray-300 px-4 py-2">4</td>
                        <td className="border border-gray-300 px-4 py-2">Nr of plans of the week created</td>
                        <td className="border border-gray-300 px-4 py-2">40%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">15%</td>
                        <td className="border border-gray-300 px-4 py-2">85%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">3</td>
                        <td className="border border-gray-300 px-4 py-2">Supervises the cleanliness of the office</td>
                        <td className="border border-gray-300 px-4 py-2">30</td>
                        <td className="border border-gray-300 px-4 py-2">25</td>
                        <td className="border border-gray-300 px-4 py-2">Nr of days</td>
                        <td className="border border-gray-300 px-4 py-2">33%</td>
                        <td className="border border-gray-300 px-4 py-2">10%</td>
                        <td className="border border-gray-300 px-4 py-2">0%</td>
                        <td className="border border-gray-300 px-4 py-2">43%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">4</td>
                        <td className="border border-gray-300 px-4 py-2">Processing of personnel due for re-enlistment</td>
                        <td className="border border-gray-300 px-4 py-2">50</td>
                        <td className="border border-gray-300 px-4 py-2">50</td>
                        <td className="border border-gray-300 px-4 py-2">Nr of documents submitted to CG-1</td>
                        <td className="border border-gray-300 px-4 py-2">40%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">100%</td>
                    </tr>

                    {/* Add additional rows here for each section */}
                    <tr className="bg-gray-100">
                        <td colSpan="8" className="font-bold text-right px-4 py-2">Sub-Total:</td>
                        <td className="border border-gray-300 px-4 py-2">80%</td>
                    </tr>
                    <tr>
                        <td colSpan="8" className="font-bold text-right px-4 py-2">Weighted Ave:</td>
                        <td className="border border-gray-300 px-4 py-2">32%</td>
                    </tr>

                    {/* Section B: High Impact PGS Activities */}
                    <tr className="bg-gray-200">
                        <td colSpan="9" className="font-bold px-4 py-2">B. HIGH IMPACT PGS ACTIVITIES (40%)</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">1</td>
                        <td className="border border-gray-300 px-4 py-2">Attended Individual Performance Scorecard Workshop</td>
                        <td className="border border-gray-300 px-4 py-2">1</td>
                        <td className="border border-gray-300 px-4 py-2">1</td>
                        <td className="border border-gray-300 px-4 py-2">Nr of workshops attended</td>
                        <td className="border border-gray-300 px-4 py-2">40%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">2</td>
                        <td className="border border-gray-300 px-4 py-2">Updated the Performance Scorecard of HRMU SEM</td>
                        <td className="border border-gray-300 px-4 py-2">12</td>
                        <td className="border border-gray-300 px-4 py-2">10</td>
                        <td className="border border-gray-300 px-4 py-2">Nr. Of Key Result Areas accomplished</td>
                        <td className="border border-gray-300 px-4 py-2">33%</td>
                        <td className="border border-gray-300 px-4 py-2">20%</td>
                        <td className="border border-gray-300 px-4 py-2">15%</td>
                        <td className="border border-gray-300 px-4 py-2">68%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">3</td>
                        <td className="border border-gray-300 px-4 py-2">Checking of IPS</td>
                        <td className="border border-gray-300 px-4 py-2">6</td>
                        <td className="border border-gray-300 px-4 py-2">6</td>
                        <td className="border border-gray-300 px-4 py-2">Nr of scorecards checked</td>
                        <td className="border border-gray-300 px-4 py-2">40%</td>
                        <td className="border border-gray-300 px-4 py-2">10%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">80%</td>
                    </tr>

                    {/* Continue for other sections and rows */}
                    <tr className="bg-gray-100">
                        <td colSpan="8" className="font-bold text-right px-4 py-2">Sub-Total:</td>
                        <td className="border border-gray-300 px-4 py-2">80%</td>
                    </tr>
                    <tr>
                        <td colSpan="8" className="font-bold text-right px-4 py-2">Weighted Ave:</td>
                        <td className="border border-gray-300 px-4 py-2">32%</td>
                    </tr>

                    {/* Section C: OTHER DUTIES (10%) */}
                    <tr className="bg-gray-200">
                        <td colSpan="9" className="font-bold px-4 py-2">C. OTHER DUTIES (10%)</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">1</td>
                        <td className="border border-gray-300 px-4 py-2">Petty Cash Fund Custodian</td>
                        <td className="border border-gray-300 px-4 py-2">10</td>
                        <td className="border border-gray-300 px-4 py-2">9</td>
                        <td className="border border-gray-300 px-4 py-2">Nr of documents on petty cash fund</td>
                        <td className="border border-gray-300 px-4 py-2">36%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">96%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">2</td>
                        <td className="border border-gray-300 px-4 py-2">Duty POW</td>
                        <td className="border border-gray-300 px-4 py-2">2</td>
                        <td className="border border-gray-300 px-4 py-2">1</td>
                        <td className="border border-gray-300 px-4 py-2">Nr of TI&E conducted</td>
                        <td className="border border-gray-300 px-4 py-2">20%</td>
                        <td className="border border-gray-300 px-4 py-2">20%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">70%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">3</td>
                        <td className="border border-gray-300 px-4 py-2">Monitoring of BMI of personnel</td>
                        <td className="border border-gray-300 px-4 py-2">10</td>
                        <td className="border border-gray-300 px-4 py-2">10</td>
                        <td className="border border-gray-300 px-4 py-2">Nr of personnel monitored</td>
                        <td className="border border-gray-300 px-4 py-2">40%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">100%</td>
                    </tr>
                    {/* Continue for other sections and rows */}
                    <tr className="bg-gray-100">
                        <td colSpan="8" className="font-bold text-right px-4 py-2">Sub-Total:</td>
                        <td className="border border-gray-300 px-4 py-2">80%</td>
                    </tr>
                    <tr>
                        <td colSpan="8" className="font-bold text-right px-4 py-2">Weighted Ave:</td>
                        <td className="border border-gray-300 px-4 py-2">32%</td>
                    </tr>

                    {/* Section D: PERSONAL SCORECARD (10%) */}
                    <tr className="bg-gray-200">
                        <td colSpan="9" className="font-bold px-4 py-2">D. PERSONAL SCORECARD (10%)</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">1</td>
                        <td className="border border-gray-300 px-4 py-2">Spiritual</td>
                        <td className="border border-gray-300 px-4 py-2">4</td>
                        <td className="border border-gray-300 px-4 py-2">2</td>
                        <td className="border border-gray-300 px-4 py-2">Nr of masses attended</td>
                        <td className="border border-gray-300 px-4 py-2">20%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">80%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">2</td>
                        <td className="border border-gray-300 px-4 py-2">Financial</td>
                        <td className="border border-gray-300 px-4 py-2">10,000</td>
                        <td className="border border-gray-300 px-4 py-2">1,000</td>
                        <td className="border border-gray-300 px-4 py-2">Monthly amount saved in Php</td>
                        <td className="border border-gray-300 px-4 py-2">4%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">64%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">3</td>
                        <td className="border border-gray-300 px-4 py-2">Family</td>
                        <td className="border border-gray-300 px-4 py-2">30</td>
                        <td className="border border-gray-300 px-4 py-2">30</td>
                        <td className="border border-gray-300 px-4 py-2">Nr of videocalls with family</td>
                        <td className="border border-gray-300 px-4 py-2">40%</td>
                        <td className="border border-gray-300 px-4 py-2">10%</td>
                        <td className="border border-gray-300 px-4 py-2">15%</td>
                        <td className="border border-gray-300 px-4 py-2">65%</td>
                    </tr>

                    <tr>
                        <td className="border border-gray-300 px-4 py-2" rowSpan={6}>4</td>
                        <td className="border border-gray-300 px-4 py-2 font-bold" colSpan={8}>Physical</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Dive bombers</td>
                        <td className="border border-gray-300 px-4 py-2">47</td>
                        <td className="border border-gray-300 px-4 py-2">100</td>
                        <td className="border border-gray-300 px-4 py-2">Nr of reps per month</td>
                        <td className="border border-gray-300 px-4 py-2">40%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">3.2km Run - Male</td>
                        <td className="border border-gray-300 px-4 py-2">20.25</td>
                        <td className="border border-gray-300 px-4 py-2">19</td>
                        <td className="border border-gray-300 px-4 py-2">Minutes</td>
                        <td className="border border-gray-300 px-4 py-2">40%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Sit-ups</td>
                        <td className="border border-gray-300 px-4 py-2">40</td>
                        <td className="border border-gray-300 px-4 py-2">40</td>
                        <td className="border border-gray-300 px-4 py-2">Nr of reps</td>
                        <td className="border border-gray-300 px-4 py-2">40%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">Jumping Jacks</td>
                        <td className="border border-gray-300 px-4 py-2">100</td>
                        <td className="border border-gray-300 px-4 py-2">100</td>
                        <td className="border border-gray-300 px-4 py-2">Nr of reps</td>
                        <td className="border border-gray-300 px-4 py-2">40%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">100%</td>
                    </tr>
                    <tr>
                        <td className="border border-gray-300 px-4 py-2">BMI</td>
                        <td className="border border-gray-300 px-4 py-2">18.5-22.9</td>
                        <td className="border border-gray-300 px-4 py-2">21</td>
                        <td className="border border-gray-300 px-4 py-2">Body Mass Index</td>
                        <td className="border border-gray-300 px-4 py-2">40%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">30%</td>
                        <td className="border border-gray-300 px-4 py-2">100%</td>
                    </tr>
                    {/* Continue for other sections and rows */}
                    <tr className="bg-gray-100">
                        <td colSpan="8" className="font-bold text-right px-4 py-2">Sub-Total:</td>
                        <td className="border border-gray-300 px-4 py-2">80%</td>
                    </tr>
                    <tr>
                        <td colSpan="8" className="font-bold text-right px-4 py-2">Weighted Ave:</td>
                        <td className="border border-gray-300 px-4 py-2">32%</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td colSpan="8" className="font-bold text-right px-4 py-2">Grand Total:</td>
                        <td className="border border-gray-300 px-4 py-2">80%</td>
                    </tr>

                </tbody>
            </table>

            <div className="mb-4">
                <div className='flex'>
                    <div className='flex-1'>
                        <div className='flex flex-1 border pl-2 items-center justify-center'>
                            <h4 className='font-bold text-nowrap'>Final Rating By:</h4>
                        </div>
                        <div className='flex flex-1 border pl-2 items-center'>
                            <h4 className='font-bold text-nowrap mr-1'>Name:</h4>
                            <Textbox2 />
                        </div>
                        <div className='flex flex-1 border pl-2 items-center'>
                            <h4 className='font-bold text-nowrap mr-1'>Designation:</h4>
                            <Textbox2 />
                        </div>
                        <div className='flex flex-1 border pl-2 items-center'>
                            <h4 className='font-bold text-nowrap mr-1'>Date:</h4>
                            <Textbox2 />
                        </div>
                    </div>
                    <div className='flex border py-2 px-4 items-end'>
                        <h4 className='font-bold text-nowrap mr-1 mt-8 text-center border-t border-black px-8'>Signature over printer name</h4>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Fillup2;
