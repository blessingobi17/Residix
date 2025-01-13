import footerLogo from "./assets/images/footer-logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      ".footer",
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
          trigger: ".footer",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <main className="lg:px-20 md:px-10 px-5 lg:py-20 py-16">
      <section className="flex lg:flex-row flex-col lg:gap-0 gap-16 justify-between w-full footer">
        <p className="lg:w-4/12 w-full leading-relaxed ">
          Your trusted partner in finding the perfect home. Whether you're
          buying or just exploring, we're here to guide you every step of the
          way.
        </p>
        <div className="text-sm flex md:flex-row flex-col lg:gap-0 gap-16 justify-between md:w-auto w-3/4">
          <div>
            <h6 className="font-bold pb-4">Company</h6>
            <ul className="space-y-3 font-light">
              <li>Home</li>
              <li>Properties</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold pb-4">Hours</h6>
            <ul className="space-y-3 font-light">
              <div className="flex justify-between">
                <li>Monday - Friday</li>
                <span className="pl-6 text-gray-500">9am - 4pm</span>
              </div>
              <div className="flex justify-between">
                <li>Saturday</li>
                <span className="pl-6 text-gray-500">10am - 3pm</span>
              </div>
              <div className="flex justify-between">
                <li>Sunday</li>
                <span className="pl-6 text-red-500">Closed</span>
              </div>
            </ul>
          </div>
          <div className="md:w-1/3 w-full">
            <h6 className="font-bold pb-4">Get in touch</h6>
            <ul className="space-y-3 font-light">
              <div className="">
                <li>Address</li>
                <span className="text-gray-500 pt-2">
                  123 Dream St., Suite 101 New York, NY 10001, USA
                </span>
              </div>
              <div>
                <li>Phone</li>
                <span className="text-gray-500 pt-2">(555) 123-4567</span>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <div className="lg:py-0 py-6 footer">
        <img src={footerLogo} alt="" />
      </div>
      <div
        className="border-t border-t-gray-300 pt-10 flex md:flex-row flex-col-reverse items-center
      lg:gap-0 gap-8 justify-between footer"
      >
        <p className="text-xs">
          &copy; Copyright 2024, All Rights Reserved by Residix.
        </p>
        <div className="flex gap-4">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
    </main>
  );
};

export default Footer;
