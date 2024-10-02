import PropTypes from "prop-types";
import { Link as LinkScroll } from "react-scroll";
import headerLogo from "../assets/header/header_logo.png";

const NavLink = ({ title }) => (
  <LinkScroll
    to={title}
    className="base-bold max-lg:h5 cursor-pointer uppercase text-p4 transition-colors duration-500 hover:text-p1 max-lg:my-4"
  >
    {title}
  </LinkScroll>
);

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="z-2 flex-1 cursor-pointer lg:hidden">
          <img src={headerLogo} width={115} height={55} alt="Header logo" />
        </a>
        <div className="w-full max-lg:fixed max-lg:left-0 max-lg:top-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0">
          <div className="sidebar-before w-full max-lg:relative max-lg:flex max-lg:min-h-screen max-lg:flex-col max-lg:overflow-hidden max-lg:p-6 max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll to="hero">
                    <img
                      src={headerLogo}
                      width={160}
                      height={55}
                      alt="Header logo"
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

NavLink.propTypes = {
  title: PropTypes.string,
};

export default Header;
