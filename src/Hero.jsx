import stars from "./assets/images/stars.png";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-heading",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".hero-subheading",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".hero-button",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
        stagger: 0.2,
      }
    );

    gsap.fromTo(
      ".hero-rating",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
        stagger: 0.1,
      }
    );
  }, []);

  return (
    <main className="text-white md:w-3/5 w-full">
      <h1 className="lg:text-heroText text-4xl font-medium leading-tight hero-heading">
        Your Next Chapter Begins at the Perfect Address
      </h1>
      <p className="md:w-11/12 w-full font-light pt-4 hero-subheading">
        From cozy corners to grand spaces, we’ll guide you every step of the way
        to find not just a house, but a place you’ll truly love to call home.
      </p>
      <button
        className="bg-white rounded-full text-black my-6 px-6 text-sm py-2 flex
       items-center gap-2 hero-button"
      >
        View Listings <FaArrowRight className="h-3" />
      </button>
      <div className="text-sm hero-rating">
        <div className="flex items-center gap-3 pb-2">
          <img src={stars} alt="" className="h-4" />
          <p>5/5</p>
        </div>
        <p>350 reviews</p>
      </div>
    </main>
  );
};

export default Hero;
