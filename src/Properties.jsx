import propertiesCarousel from "/data/properties.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import {
  FaDotCircle,
  FaBed,
  FaRuler,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Properties = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".properties-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        ".properties-heading",
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 }
      )
      .fromTo(
        ".properties-subheading",
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        0.1
      );
  }, []);
  return (
    <main className="py-20">
      <section className="lg:px-20 px-5">
        <div className="flex flex-col items-center lg:pb-20 pb-14 properties-container">
          <span className="text-xs border border-gray-300 rounded-full px-3 py-1 properties-heading">
            Featured Properties
          </span>
          <h2 className="lg:text-4xl text-2xl pt-4 font-medium text-center properties-subheading">
            Find a Place You'll Love To Call Home.
          </h2>
        </div>
        <section className="relative">
          <section className="max-w-7xl mx-auto">
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3.5,
                },
              }}
              spaceBetween={30}
              centeredSlides={true}
              speed={800}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              {propertiesCarousel.map((carousel) => (
                <SwiperSlide key={carousel.id}>
                  <div className="relative">
                    <img src={carousel.image} alt="" />
                    <div
                      className="exploreOverlay absolute top-0 h-full w-full rounded-2xl text-white
                p-4 flex flex-col justify-between"
                    >
                      <div className="flex justify-center">
                        <div className="rent text-xs px-4 py-1 rounded-full">
                          {carousel.option}
                        </div>
                      </div>
                      <div>
                        <div className="flex gap-6 pb-2 font-light">
                          <p className="text-sm flex items-center gap-1">
                            <span>
                              <FaBed />
                            </span>
                            {carousel.rooms}
                          </p>
                          <p className="text-sm flex items-center gap-1 relative">
                            <span>
                              <FaRuler />
                            </span>
                            {carousel.size}
                            <span className="text-xs absolute -top-1 -right-2">
                              2
                            </span>
                          </p>
                        </div>
                        <p className="text-xl font-semibold">{carousel.name}</p>
                        <div className="flex items-center font-light gap-1 pt-2">
                          <p>
                            {carousel.price}
                            <span className="pl-2 text-sm">{carousel.per}</span>
                          </p>
                          <FaDotCircle className="h-1" />
                          <p>{carousel.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex gap-6 justify-center pt-10">
              <button className="custom-prev border border-black text-black p-2 rounded-full">
                <FaAngleLeft />
              </button>
              <button className="custom-next border border-black text-black p-2 rounded-full">
                <FaAngleRight />
              </button>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

export default Properties;
