import headerLogo from "../assets/header/header_logo.png";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full py-10">
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="z-2 flex-1 cursor-pointer lg:hidden">
          <img src={headerLogo} width={115} height={55} alt="Header logo" />
        </a>
        <div className="w-full border-2 border-amber-400">
          <nav>
            <ul className="flex max-lg:block max-lg:px-12">
              <li className=""></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
