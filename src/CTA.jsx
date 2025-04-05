import { useEffect } from "react";
import cta from "./assets/images/cta.png";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  useEffect(() => {
    gsap.fromTo(
      ".cta",
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
          trigger: ".cta",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <main className="lg:px-10 px-3 py-10 flex justify-center">
      <section className="max-w-videoWidth">
        <div className="relative cta">
          <img
            src={cta}
            alt=""
            className="lg:h-auto h-80 w-full object-cover"
          />
          <div
            className="videoOverlay absolute h-full w-full top-0 text-white flex flex-col
        items-center justify-center rounded-2xl lg:px-0 px-10"
          >
            <p className="lg:text-5xl text-2xl text-center">
              Ready to Find Your Dream Home?
            </p>
            <button className="bg-white rounded-full text-black my-6 px-6 text-sm py-2 flex items-center gap-2">
              View Listings <FaArrowRight className="h-3" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CTA;
