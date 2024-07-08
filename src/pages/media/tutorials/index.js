import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

export default function TutorialsPage() {
  const [showVideo, setShowVideo] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideo = (video) => {
    setActiveVideo(video);
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
    setActiveVideo(null);
  };

  return (
    <div className="w-full p-8">
      {showVideo && (
        <div className="inset-0 bg-black/90 fixed top-0 z-20 flex items-center justify-center">
          <div
            className="absolute top-4 right-4 cursor-pointer text-4xl p-2 text-white"
            onClick={closeVideo}>
            <IoCloseSharp />
          </div>
          <div className="relative p-8 max-w-3xl w-full">
            <video
              src={activeVideo?.src}
              className="w-full"
              controls
              title={activeVideo?.title}
            />
          </div>
        </div>
      )}
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Tutorials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {tutorialVideos.map((tutorial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer border-2 hover:border-blue-300"
            onClick={() => openVideo(tutorial)}>
            <h1 className="mb-2 text-blue-500 font-semibold cursor-pointer">
              {tutorial.title}
            </h1>
            <video
              src={tutorial.src}
              className="w-full aspect-video"
              title={`video-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const tutorialVideos = [
  {
    title: "PERFORMANCE SCORECARD",
    src: `${process.env.PUBLIC_URL}/assets/tutorials/PERFORMANCE SCORECARD.mp4`,
  },
  {
    title: "STRATEGIC PERFORMANCE COMMITMENTS",
    src: `${process.env.PUBLIC_URL}/assets/tutorials/STRATEGIC PERFORMANCE COMMITMENTS.mp4`,
  },
  {
    title: "STRATEGY REVIEW",
    src: `${process.env.PUBLIC_URL}/assets/tutorials/STRATEGY REVIEW.mp4`,
  },
];
