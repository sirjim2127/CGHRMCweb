import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

function GoogleSheetData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchCSV = async () => {
            try {
                const response = await fetch('https://docs.google.com/spreadsheets/d/1HbtWy63aIA8WqJ25c05nlsGM-CrymWwJyhQM8Po5d7I/pub?output=csv');
                const text = await response.text();

                Papa.parse(text, {
                    complete: (result) => {
                        setData(result.data);
                        setLoading(false);
                    },
                    header: true,
                    skipEmptyLines: true,
                });
            } catch (error) {
                console.error('Error fetching the CSV data:', error);
                setLoading(false);
            }
        };

        fetchCSV();
    }, []);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data.filter((row) => {
        return (
            row.Name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.Email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            row.Date?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            Object.values(row).some(value => value.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    });

    const downloadExcel = (row) => {
        // Prepare the data for the Excel file
        const wb = XLSX.utils.book_new();
        const wsData = [
            ["COAST GUARD HUMAN RESOURCE MANAGEMENT COMMAND"],
            ["INDIVIDUAL SCORECARD"],
            [
                `Last Name: ${row.FullName || ''}`,
                `First Name: ${row.FirstName || ''}`,
                `M.I.: ${row.MI || ''}`,
                `RANK: ${row.Rank || ''}`,
                `SN: ${row.SN || ''}`
            ],
            [
                `Unit: ${row.Unit || ''}`,
                `Designation: ${row.Designation || ''}`,
                `Rating: ${row.Rating || ''}`
            ],
            ["I vouch to deliver and agree to be rated on the attainment of the following targets in accordance with the indicated measures for the period April 2024."],
            ["Remarks:", "Signature Over Printed Name"],
            [
                `Reviewed by: ${row.ReviewedBy || ''}`,
                `Date: ${row.ReviewedDate || ''}`,
                `Approved by: ${row.ApprovedBy || ''}`,
                `Date: ${row.ApprovedDate || ''}`
            ],
            [],
            ["Nr", "Contribution", "Target", "Actual", "Indicator", "Actual", "Score"],
            ["A. MAJOR FINAL OUTPUTS (40%)"],
            ["1", "Conducts muster of personnel", "4", "3", "Nr musters conducted", "30%", "30%", "", "15%", "75%"],
            ["2", "Created plan of the week", "4", "4", "Nr of plans of the week created", "40%", "", "", "30%", "15%", "85%"],
            ["3", "Supervises the cleanliness of the office", "30", "25", "Nr of days", "33%", "10%", "", "0%", "43%"],
            ["4", "Processing of personnel due for re-enlistment", "50", "50", "Nr of documents submitted to CG-1", "40%", "", "", "30%", "30%", "100%"],
            ["Sub-Total:", "80%"],
            ["Weighted Ave:", "32%"],
            ["B. HIGH IMPACT PGS ACTIVITIES (40%)"],
            ["1", "Attended Individual Performance Scorecard Workshop", "1", "1", "Nr of workshops attended", "40%", "", "", "30%", "", "30%", "100%"],
            ["2", "Updated the Performance Scorecard of HRMU SEM", "12", "10", "Nr. Of Key Result Areas accomplished", "33%", "", "", "20%", "", "15%", "68%"],
            ["3", "Checking of IPS", "6", "6", "Nr of scorecards checked", "40%", "10%", "", "", "", "30%", "80%"],
            ["Sub-Total:", "84%"],
            ["Weighted Ave:", "34%"],
            ["C. OTHER DUTIES (10%)"],
            ["1", "Petty Cash Fund Custodian", "10", "9", "Nr of documents on petty cash fund", "36%", "", "", "30%", "", "30%", "96%"],
            ["2", "Duty POW", "2", "1", "Nr of TI&E conducted", "20%", "", "20%", "", "", "30%", "70%"],
            ["3", "Monitoring of BMI of personnel", "10", "10", "Nr of personnel monitored", "40%", "", "", "30%", "", "30%", "100%"],
            ["Sub-Total:", "83%"],
            ["Weighted Ave:", "8%"],
            ["D. PERSONAL SCORECARD (10%)"],
            ["1", "Spiritual", "4", "2", "Nr of mass attended", "20%", "", "", "30%", "", "30%", "80%"],
            ["2", "Financial", "10000", "1000", "Monthly amt saved in Php", "4%", "", "", "30%", "", "30%", "64%"],
            ["3", "Family", "30", "30", "Nr of videocall with family", "40%", "", "", "10%", "", "15%", "65%"],
            ["4", "Physical", "", "", "", "", "", "", "", "", "", "", "", "", ""],
            ["Dive bombers", "47", "100", "Nr of Reps per month", "40%", "", "", "30%", "", "30%", "100%"],
            ["3.2km Run - Male", "20.25", "19", "Minutes", "", "", "", "", "", "", "100%"],
            ["Sit-ups", "40", "40", "Nr of Reps", "40%", "", "", "30%", "", "30%", "100%"],
            ["Jumping Jacks", "100", "100", "Nr of Reps", "40%", "", "", "30%", "", "30%", "100%"],
            ["BMI", "18.5-22.9", "21", "Body Mass Index", "", "", "", "", "", "", "100%"],
            ["Sub-Total:", "79%"],
            ["Weighted Ave:", "8%"],
            ["Grand Total:", "82%"],
            ["Final Rating by:", "Signature Over Printed Name"],
            [`Name: ${row.FinalRatingName || ''}`, `Designation HRMU COMMANDER`],
            [`Date: ${row.FinalRatingDate || ''}`]
        ];

        const ws = XLSX.utils.aoa_to_sheet(wsData);
        XLSX.utils.book_append_sheet(wb, ws, 'Scorecard');
        XLSX.writeFile(wb, `${row.FirstName || 'NoName'}_${row.LastName || 'NoLastName'}_Scorecard.xlsx`);
    };

    if (loading) {
        return <p className="text-center mt-4 text-gray-600">Loading...</p>;
    }

    return (
        <div className="bg-gray-50 min-h-screen p-4">
            <input
                type="text"
                placeholder="Search by name, email, or date"
                value={searchQuery}
                onChange={handleSearch}
                className="mb-4 p-2 border border-gray-300 rounded w-full"
            />
            {filteredData.length > 0 ? (
                <table className="w-full bg-white shadow-md overflow-hidden">
                    <thead className="bg-blue-500 text-white text-xs text-nowrap">
                        <tr>
                            {Object.keys(filteredData[0]).map((header, index) => (
                                <th key={index} className="p-4 text-left">{header}</th>
                            ))}
                            <th className="p-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, rowIndex) => (
                            <tr key={rowIndex} className={`border-t text-nowrap text-xs ${rowIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                {Object.values(row).map((cell, cellIndex) => (
                                    <td key={cellIndex} className="p-4 text-left border-t border-gray-200">{cell}</td>
                                ))}
                                <td className="p-4 text-left border-t border-gray-200">
                                    <button
                                        onClick={() => downloadExcel(row)}
                                        className="bg-blue-500 text-white px-4 py-2 rounded"
                                    >
                                        Download
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center text-gray-600">No data available</p>
            )}
        </div>
    );
}

export default GoogleSheetData;
