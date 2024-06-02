import React from "react";

export default function OrgchartPage() {
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/assets/img/org_chart2/OrgChart.png`}
        alt={"orgchart"}
        className="object-center w-full"
      />
    </div>
  );
}
