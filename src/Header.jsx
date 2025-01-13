import Navbar from "./Navbar";
import headerImg from "./assets/images/header.png";
import Hero from "./Hero";

const Header = () => {
  return (
    <header className="relative w-full">
      <Navbar />
      <img
        src={headerImg}
        alt=""
        className="h-headerHeight w-full object-cover"
      />
      <div
        className="headerOverlay h-headerHeight w-full absolute top-0 flex flex-col justify-center
      lg:px-20 md:px-10 px-5"
      >
        <Hero />
      </div>
    </header>
  );
};

export default Header;
