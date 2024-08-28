import React from "react";

export default function MediaPage() {
  return (
    <div className="flex-1 h-[90vh]">
      <iframe
        title={"pcgvideo"}
        src="https://www.youtube.com/embed/n7RDy31OGVc"
        allowFullScreen
        className="object-center w-full h-full"
      />
    </div>
  );
}
