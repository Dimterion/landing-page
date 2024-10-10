import { Element } from "react-scroll";
import { links } from "../constants";
import Marker from "./Marker";
import logo from "../assets/general/logo.png";
import lines from "../assets/download/lines.svg";

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
              <p className="body-1 mb-10 max-w-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium unde, natus ullam ut perspiciatis expedita?
              </p>
              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon, title }) => (
                  <li
                    key={id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={url}
                      className="download_tech-icon_before relative flex size-22 items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-500"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src={lines}
                        alt="Lines image"
                        className="absolute size-13/20 object-contain"
                      />
                      <img
                        src={icon}
                        alt={`${title} icon`}
                        className="download_tech-icon"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after relative w-[955px] rounded-40 border-2 border-s5 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Download;
