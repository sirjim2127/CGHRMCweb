import React from "react";
import LandingCarousel from "./components/carousel";
import JoinUsSection from "./sections/joinus";
import RelatedLinksSection from "./sections/related_links";
import Footer from "../../components/footer";

export default function LandingPage() {
  return (
    <div className="">
      <LandingCarousel />
      <JoinUsSection />
      <RelatedLinksSection />
      <Footer />
    </div>
  );
}
