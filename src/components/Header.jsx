import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link as LinkScroll } from "react-scroll";
import logo from "../assets/general/logo.png";
import menuBtn from "../assets/header/menu_btn.svg";
import menuBtnClose from "../assets/header/menu_btn_close.svg";
import bgOutlines from "../assets/general/bg_outlines.svg";
import bgOutlinesFill from "../assets/general/bg_outlines_fill.png";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll());
    };
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold max-lg:h5 cursor-pointer uppercase text-p4 transition-colors duration-500 hover:text-p1 max-lg:my-4"
    >
      {title}
    </LinkScroll>
  );

  NavLink.propTypes = {
    title: PropTypes.string,
  };

  return (
    <header
      className={clsx(
        "fixed left-0 top-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "bg-black-100 py-2 backdrop-blur-[8px]",
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="z-2 flex-1 cursor-pointer lg:hidden">
          <img src={logo} width={115} height={55} alt="Header logo" />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="sidebar-before w-full max-lg:relative max-lg:flex max-lg:min-h-screen max-lg:flex-col max-lg:overflow-hidden max-lg:p-6 max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "cursor-pointer transition-transform duration-500 max-lg:hidden",
                    )}
                  >
                    <img src={logo} width={160} height={55} alt="Header logo" />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="info" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
            <div className="absolute left-0 top-1/2 block h-[380px] w-[960px] -translate-y-1/2 translate-x-[-290px] rotate-90 lg:hidden">
              <img
                src={bgOutlines}
                width={960}
                height={380}
                alt="Background outline"
                className="relative z-2"
              />
              <img
                src={bgOutlinesFill}
                width={960}
                height={380}
                alt="Background outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>
        </div>
        <button
          className="z-2 flex size-10 items-center justify-center rounded-full border-2 border-s4/25 lg:hidden"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={isOpen ? menuBtnClose : menuBtn}
            alt="Menu button icon"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
