import logo from "./assets/images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-nav px-6 py-2 rounded-full flex absolute z-50 top-8 transform md:-translate-x-1/2
     -translate-x-navWidth md:left-2/4 left-0 md:w-4/6 w-semiFull justify-between items-center"
    >
      <img src={logo} alt="" className="h-8 cursor-pointer" />
      <ul
        className={`gap-8 text-sm cursor-pointer ${
          isOpen
            ? "flex flex-col items-start text-black absolute top-14 left-0 bg-white rounded-2xl w-full p-6"
            : "lg:flex hidden items-center text-white"
        }`}
      >
        <li>Home</li>
        <li>Properties</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <button
        className="lg:hidden text-white"
        onClick={() => setIsOpen((prevstate) => !prevstate)}
      >
        {isOpen ? <FaXmark /> : <FaAlignRight />}
      </button>
    </nav>
  );
};

export default Navbar;
