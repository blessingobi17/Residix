import faqs from "/data/faq.json";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const handleClick = (id) => {
    setOpenFaq((prevId) => (prevId === id ? null : id));
  };

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".faq-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        ".faq-heading",
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 }
      )
      .fromTo(
        ".faq-subheading",
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        0.1
      );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".questions",
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
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".questions",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <main className="lg:px-20 md:px-10 px-5 lg:py-20 py-14 flex lg:flex-row flex-col justify-between">
      <div className="lg:pb-20 pb-16 faq-container">
        <span className="text-xs border border-gray-300 rounded-full px-3 py-1 faq-heading">
          Frequently Asked Questions
        </span>
        <h2 className="lg:text-4xl text-2xl pt-4 font-medium faq-subheading">
          Everything You Need to Know
        </h2>
      </div>
      <section className="lg:w-2/4 w-full">
        {faqs.map((questions) => (
          <div
            className={`border-t border-t-gray-300 py-6 questions ${
              questions.id === 6 ? "border-b border-b-gray-300" : ""
            }`}
            key={questions.id}
          >
            <div className="flex justify-between items-center">
              <h5 className="lg:w-full w-11/12">{questions.header}</h5>
              <button onClick={() => handleClick(questions.id)}>
                {openFaq === questions.id ? (
                  <FaMinus className="cursor-pointer" />
                ) : (
                  <FaPlus className="cursor-pointer" />
                )}
              </button>
            </div>
            <p
              className={`text-sm font-light text-gray-500 pt-4 leading-relaxed ${
                openFaq === questions.id ? "block" : "hidden"
              }`}
            >
              {questions.body}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Faq;
