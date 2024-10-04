import { Element } from "react-scroll";
import { features } from "../constants";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="feature-after md:g7 relative flex flex-nowrap rounded-7xl border-2 border-s3 max-md:flex-col max-md:gap-3 max-md:rounded-none max-md:border-none md:flex-wrap md:overflow-hidden">
            {features.map(({ id, icon, title }) => (
              <div
                key={id}
                className="max-md:g7 relative z-2 flex-50 px-5 pb-5 max-md:flex-320 max-md:rounded-3xl max-md:border-2 max-md:border-s3 md:px-10 md:pb-10"
              >
                <div className="flex w-full items-start justify-start">
                  <div className="">
                    <img
                      src={icon}
                      className="size-28 object-contain"
                      alt={`${title} icon`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
