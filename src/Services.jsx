import servicesFile from "/data/services.json";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [openService, setOpenService] = useState(1);

  const handleClick = (id) => {
    setOpenService(id);
  };

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".services-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        ".services-heading",
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 }
      )
      .fromTo(
        ".services-subheading",
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        0.1
      );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".eachServices",
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
          trigger: ".eachServices",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <main className="lg:px-20 md:px-10 px-5 lg:py-20 py-8">
      <div className="flex flex-col items-center pb-20 services-container">
        <span className="text-xs border border-gray-300 rounded-full px-3 py-1 services-heading">
          Services
        </span>
        <h2 className="lg:text-4xl text-2xl pt-4 font-medium services-subheading">
          Why Choose Us
        </h2>
      </div>
      <section className="flex lg:gap-0 gap-10 md:flex-row flex-col justify-between w-full">
        <div className="md:w-2/4 w-full eachServices">
          {servicesFile.map((service) => (
            <div
              className="border-b border-b-gray-300 lg:mb-10 md:mb-8 mb-6 w-full"
              key={service.id}
            >
              <h3
                className="text-xl font-medium pb-2 cursor-pointer"
                onClick={() => handleClick(service.id)}
              >
                {service.header}
              </h3>
              <p
                className={`font-light text-gray-500 leading-relaxed pb-8 ${
                  openService === service.id ? "block" : "hidden"
                }`}
              >
                {service.body}
              </p>
            </div>
          ))}
        </div>
        <div className="">
          {servicesFile.map((service) => (
            <img
              src={service.image}
              key={service.id}
              alt=""
              className={`h-96 eachServices object-cover rounded-2xl ${
                openService === service.id ? "block" : "hidden"
              }`}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
