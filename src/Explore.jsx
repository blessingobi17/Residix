import residentaial from "/data/residential.json";
import commercial from "/data/commercial.json";
import apartments from "/data/apartments.json";
import { FaDotCircle, FaBed, FaRuler } from "react-icons/fa";
import { FaStairs } from "react-icons/fa6";
import { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Explore = () => {
  const [openExplore, setOpenExplore] = useState(1);

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".explore-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        ".explore-heading",
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 }
      )
      .fromTo(
        ".explore-subheading",
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        0.1
      );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".eachExplore",
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
          trigger: ".eachExplore",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <main className="lg:px-20 md:px-10 px-5 lg:py-20 py-14">
      <div className="flex flex-col items-center lg:pb-14 pb-10 explore-container">
        <span className="text-xs border border-gray-300 rounded-full px-3 py-1 explore-heading">
          Explore
        </span>
        <h2 className="lg:text-4xl text-2xl pt-4 font-medium explore-subheading">
          Find The Category For You
        </h2>
      </div>
      <div className="w-full flex justify-center">
        <div className="flex items-center md:gap-4 gap-2 justify-between bg-gray-100 py-2 px-2 rounded-full">
          <button
            className={`md:text-sm text-xs md:px-4 px-2 py-2 rounded-full ${
              openExplore === 1 ? "bg-white" : ""
            }`}
            onClick={() => setOpenExplore(1)}
          >
            Residential
          </button>
          <button
            className={`md:text-sm text-xs md:px-4 px-2 py-2 rounded-full ${
              openExplore === 2 ? "bg-white" : ""
            }`}
            onClick={() => setOpenExplore(2)}
          >
            Commercial
          </button>
          <button
            className={`md:text-sm text-xs md:px-4 px-2 py-2 rounded-full ${
              openExplore === 3 ? "bg-white" : ""
            }`}
            onClick={() => setOpenExplore(3)}
          >
            Apartments
          </button>
        </div>
      </div>
      <section className="flex justify-center">
        <div className="max-w-7xl w-full">
          {openExplore === 1 ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-between pt-20">
              {residentaial.map((explore) => (
                <div className="eachExplore relative" key={explore.id}>
                  <img src={explore.image} alt="" />
                  <div
                    className="exploreOverlay absolute top-0 h-full w-full rounded-2xl text-white
                p-4 flex flex-col justify-between"
                  >
                    <div className="flex justify-center">
                      <div className="rent text-xs px-4 py-1 rounded-full">
                        {explore.option}
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-6 pb-2 font-light">
                        <p className="text-sm flex items-center gap-1">
                          <span>
                            <FaBed />
                          </span>
                          {explore.rooms}
                        </p>
                        <p className="text-sm flex items-center gap-1 relative">
                          <span>
                            <FaRuler />
                          </span>
                          {explore.size}
                          <span className="text-xs absolute -top-1 -right-2">
                            2
                          </span>
                        </p>
                      </div>
                      <p className="text-xl font-semibold">{explore.name}</p>
                      <div className="flex items-center font-light gap-1 pt-2">
                        <p className="">
                          {explore.price}
                          <span className="pl-2 text-sm">{explore.per}</span>
                        </p>
                        <FaDotCircle className="h-1" />
                        <p>{explore.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : openExplore === 2 ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-between pt-20">
              {commercial.map((explore) => (
                <div className="eachExplore relative" key={explore.id}>
                  <img src={explore.image} alt="" />
                  <div
                    className="exploreOverlay absolute top-0 h-full w-full rounded-2xl text-white
                p-4 flex flex-col justify-between"
                  >
                    <div className="flex justify-center">
                      <div className="rent text-xs px-4 py-1 rounded-full">
                        {explore.option}
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-6 pb-2 font-light">
                        <p className="text-sm flex items-center gap-1">
                          <span>
                            <FaStairs />
                          </span>
                          {explore.floors}
                        </p>
                        <p className="text-sm flex items-center gap-1 relative">
                          <span>
                            <FaRuler />
                          </span>
                          {explore.size}
                        </p>
                      </div>
                      <p className="text-xl font-semibold">{explore.name}</p>
                      <div className="flex items-center font-light gap-1 pt-2">
                        <p className="">
                          {explore.price}
                          <span className="pl-2 text-sm">{explore.per}</span>
                        </p>
                        <FaDotCircle className="h-1" />
                        <p>{explore.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-between pt-20">
              {apartments.map((explore) => (
                <div className="eachExplore relative" key={explore.id}>
                  <img src={explore.image} alt="" />
                  <div
                    className="exploreOverlay absolute top-0 h-full w-full rounded-2xl text-white
              p-4 flex flex-col justify-between"
                  >
                    <div className="flex justify-center">
                      <div className="rent text-xs px-4 py-1 rounded-full">
                        {explore.option}
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-6 pb-2 font-light">
                        <p className="text-sm flex items-center gap-1">
                          <span>
                            <FaBed />
                          </span>
                          {explore.rooms}
                        </p>
                        <p className="text-sm flex items-center gap-1 relative">
                          <span>
                            <FaRuler />
                          </span>
                          {explore.size}
                          <span className="text-xs absolute -top-1 -right-2">
                            2
                          </span>
                        </p>
                      </div>
                      <p className="text-xl font-semibold">{explore.name}</p>
                      <div className="flex items-center font-light gap-1 pt-2">
                        <p className="">
                          {explore.price}
                          <span className="pl-2 text-sm">{explore.per}</span>
                        </p>
                        <FaDotCircle className="h-1" />
                        <p>{explore.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Explore;
