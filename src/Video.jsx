import { useRef, useState, useEffect } from "react";
import video from "./assets/media/housevideo.mp4";
import playBtn from "./assets/images/playBtn.png";
import { FaPause } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      ".video",
      {
        opacity: 0,
        y: 30,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".video",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <main className="lg:px-10 md:Px-5 px-3 py-10">
      <div className="relative w-full md:h-videoHeight h-96 video">
        <video
          ref={videoRef}
          src={video}
          playsInline
          loop
          type="video/webm"
          className="w-full h-full rounded-2xl object-cover "
        ></video>
        <div
          className="videoOverlay absolute h-full w-full top-0 text-white flex flex-col
        items-center justify-center rounded-2xl lg:px-0 px-10"
        >
          <p
            className={`lg:text-5xl text-2xl text-center ${
              isPlaying ? "invisible" : "visible"
            }`}
          >
            A Closer Look at Exceptional Living
          </p>
          <button
            className="play lg:w-16 w-14 lg:h-16 h-14 flex items-center justify-center rounded-full mt-8"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <FaPause />
            ) : (
              <img src={playBtn} alt="" className="lg:h-7 h-5" />
            )}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Video;
