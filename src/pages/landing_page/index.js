import React from "react";
import LandingCarousel from "./components/carousel";
import JoinUsSection from "./sections/joinus";
import RelatedLinksSection from "./sections/related_links";
import Footer from "../../components/footer";
import PressReleaseSection from "./sections/press_relase";

export default function LandingPage() {
  return (
    <div className="">
      <LandingCarousel />
      <JoinUsSection />
      <PressReleaseSection />
      <RelatedLinksSection />
      <Footer />
    </div>
  );
}
