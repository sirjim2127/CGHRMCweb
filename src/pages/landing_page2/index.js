import React from 'react';
import LandingCarousel from './sections/carousel';
import JoinUsSection from './sections/joinus';
import PressReleaseSection from './sections/press_relase';
import RelatedLinksSection from './sections/related_links';

export default function LandingPage2() {
    return (
        <div>
            <LandingCarousel />
            <JoinUsSection />
            <PressReleaseSection />
            <RelatedLinksSection />
        </div>
    );
}