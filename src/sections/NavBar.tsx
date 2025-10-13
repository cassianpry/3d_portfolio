import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`navbar shadow-[0_0_10px_#72a1de63] ${
        scrolled ? "scrolled" : "not-scrolled"
      }`}
    >
      <div className="inner">
        <a className="logo" href="#hero">
          Cassiano Marinello
        </a>
        <nav className="desktop ">
          <ul className="hidden md:flex justify-between  py-3 px-4 rounded-full bg-[rgba(0,0,69,0.326)] backdrop-blur-xl shadow-[0_0_10px_#72a1de63]">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="contact-btn group" href="#contact">
          <div className="inner">
            <span>Contato</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
