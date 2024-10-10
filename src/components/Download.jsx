import { Element } from "react-scroll";
import logo from "../assets/general/logo.png";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
              <div className="mb-10">
                <img src={logo} width={160} height={55} alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Download;
