import React from "react";
import "../VideoBlock/mainvideo.scss";
export const Video = ({pumaVideo1}) => {
  return (
    <>
      <section className="video-section">
        <video autoPlay muted loop className="puma-video">
          <source src={pumaVideo1} type="video/mp4" />
        </video>
      </section>
    </>
  );
};
