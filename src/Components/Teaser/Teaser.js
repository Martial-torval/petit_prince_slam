import React, { useState, useRef, useEffect } from "react";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import teaser from "../../assets/videos/teaser.mp4";
import "../Teaser/teaser.css";

const Teaser = () => {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      entry.isIntersecting ? videoRef.current.play() : videoRef.current.pause();
    });
    observer.observe(videoRef.current);
  }, []);
  return (
    <>
      <video
        playsInline={true}
        src={teaser}
        ref={videoRef}
        autoPlay
        loop
        muted={muted}
      />
      <VolumeOffIcon
        onClick={() => setMuted(!muted)}
        className={muted ? "volume d-block" : "volume d-none"}
        fontSize="large"
      />
      <VolumeUpIcon
        onClick={() => setMuted(!muted)}
        className={muted ? "volume d-none" : "volume d-block"}
        fontSize="large"
      />
    </>
  );
};

export default Teaser;
