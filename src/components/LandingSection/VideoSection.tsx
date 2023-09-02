import { VideoContainer } from "@/styles/LandingPage/VideoSection";
import React from "react";
const videoUrl = "https://youtu.be/wm5gMKuwSYk?si=TTS4Q41FMK2fSyi9";

const YouTubeSection = () => {
  return (
    <VideoContainer>
      <iframe
        width="560"
        height="315"
        frameBorder="none"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
};

export default YouTubeSection;
