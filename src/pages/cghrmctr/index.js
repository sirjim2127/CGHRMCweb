import React from "react";
import OtherLogo from "./sections/other_logo";
import Footer from "../../components/footer";

export default function CGHRMCTRPage() {
  return (
    <div className="w-full">
      <img
        src={`${process.env.PUBLIC_URL}/assets/img/cghrmc-tr.jpeg`}
        alt={"aboutuscover"}
        className="h-[500px] object-center w-full"
      />
      <OtherLogo />
      <Footer />
    </div>
  );
}
