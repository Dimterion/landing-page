import headerLogo from "../assets/header/header_logo.png";

const Header = () => {
  return (
    <header>
      <div>
        <a>
          <img src={headerLogo} width={115} height={55} alt="Header logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
