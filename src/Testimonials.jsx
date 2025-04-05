import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".testimonial-container",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      .fromTo(
        ".testimonial-heading",
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 }
      )
      .fromTo(
        ".testimonial-subheading",
        { opacity: 0, y: 50, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1 },
        0.1
      );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".testimonial",
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
          trigger: ".testimonial",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <main className="lg:px-20 md:px-10 px-5 lg:py-20 py-14">
      <div className="flex flex-col items-center lg:pb-20 pb-12 testimonial-container">
        <span className="text-xs border border-gray-300 rounded-full px-3 py-1 testimonial-heading">
          Testimonials
        </span>
        <h2 className="lg:text-4xl text-2xl pt-4 font-medium testimonial-subheading">
          Happy New Home Owners
        </h2>
      </div>
      <section className="flex justify-center">
        <div className="max-w-7xl w-full grid md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6 testimonial">
            <div className="bg-gray-100 px-5 py-6 rounded-lg">
              <p className="text-sm leading-relaxed">
                “Finding our dream home felt impossible at first. We searched
                for months without success, feeling overwhelmed by the options
                and complexities. Then, we discovered this platform, and
                everything changed. The process was seamless, from browsing the
                listings to scheduling viewings and finalizing the paperwork.”
              </p>
              <div className="flex justify-between items-center pt-10 text-sm">
                <p className="font-semibold">James T.</p>
                <p className="font-light">Malibu, California</p>
              </div>
            </div>
            <div className="bg-gray-100 px-5 py-6 rounded-lg">
              <p className="text-sm leading-relaxed">
                “As a first-time buyer, I was nervous about navigating the
                entire process. From understanding the market to finding the
                right home, everything felt overwhelming. However, the dedicated
                agents went above and beyond to guide me at every step. They
                patiently answered all my questions, provided expert advice, and
                ensured I felt confident in my decisions.”
              </p>
              <div className="flex justify-between items-center pt-10 text-sm">
                <p className="font-semibold">Emily R.</p>
                <p className="font-light">Austin, Texas</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 testimonial">
            <div className="bg-gray-100 px-5 py-6 rounded-lg">
              <p className="text-sm leading-relaxed">
                “The exclusive listings gave me access to properties I couldn’t
                find anywhere else. I'm so glad I trusted them with my search.”
              </p>
              <div className="flex justify-between items-center pt-10 text-sm">
                <p className="font-semibold">Laura P.</p>
                <p className="font-light">San Diego, California</p>
              </div>
            </div>
            <div className="bg-gray-100 px-5 py-6 rounded-lg">
              <p className="text-sm leading-relaxed">
                “The website is so intuitive and made renting a home in a new
                city stress-free. I found the perfect place within days.”
              </p>
              <div className="flex justify-between items-center pt-10 text-sm">
                <p className="font-semibold">Alex J.</p>
                <p className="font-light">Brooklyn, New York</p>
              </div>
            </div>
            <div className="bg-gray-100 px-5 py-6 rounded-lg">
              <p className="text-sm leading-relaxed">
                “This service truly changed my life. I had been searching for a
                home that fit both my needs and my budget for what felt like
                forever, and nothing seemed to work out. Then I came across this
                platform, and everything started to fall into place.”
              </p>
              <div className="flex justify-between items-center pt-10 text-sm">
                <p className="font-semibold">David K.</p>
                <p className="font-light">Scottsdale, Arizona</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 testimonial">
            <div className="bg-gray-100 px-5 py-6 rounded-lg">
              <p className="text-sm leading-relaxed">
                “As a first-time homebuyer, I was initially intimidated by the
                process. From understanding the market to figuring out what I
                could afford, it was all a bit overwhelming. But the team here
                really took the time to guide me through every step. They helped
                me narrow down my options, set realistic expectations, and made
                sure I felt comfortable throughout.”
              </p>
              <div className="flex justify-between items-center pt-10 text-sm">
                <p className="font-semibold">Samantha D.</p>
                <p className="font-light">Denver, Colorado</p>
              </div>
            </div>
            <div className="bg-gray-100 px-5 py-6 rounded-lg">
              <p className="text-sm leading-relaxed">
                “I had been browsing listings for months, but I never felt
                confident about making an offer on any property. I was either
                unsure about the price or worried about hidden issues. That’s
                when I decided to work with this platform, and it was a
                game-changer. Their detailed property insights and expert advice
                made a huge difference.”
              </p>
              <div className="flex justify-between items-center pt-10 text-sm">
                <p className="font-semibold">Jonathan P.</p>
                <p className="font-light">Seattle, Washington</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
