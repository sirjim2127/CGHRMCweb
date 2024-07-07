import React from "react";

export default function TutorialsPage() {
  return (
    <div className="w-full p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-700">Tutorials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {tutorialVideos.map((tutorial, index) => (
          <div key={index}>
            <h1 className="mb-2 text-blue-500 font-semibold">
              {tutorial.title}
            </h1>
            <iframe
              src={tutorial.src}
              className="w-full aspect-video"
              allow="encrypted-media"
              allowFullScreen
              title="video-1"
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
    title: "PERFORMANCE SCORECARD",
    src: `${process.env.PUBLIC_URL}/assets/tutorials/PERFORMANCE SCORECARD.mp4`,
  },
  {
    title: "PERFORMANCE SCORECARD",
    src: `${process.env.PUBLIC_URL}/assets/tutorials/PERFORMANCE SCORECARD.mp4`,
  },
];
