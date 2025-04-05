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
        className="headerOverlay h-headerHeight w-full absolute top-0 lg:px-20 md:px-10 px-5 
      flex justify-center"
      >
        <section className="max-w-7xl w-full">
          <Hero />
        </section>
      </div>
    </header>
  );
};

export default Header;
