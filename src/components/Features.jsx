import { Element } from "react-scroll";
import { features } from "../constants";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="feature-after md:g7 relative flex flex-nowrap rounded-7xl border-2 border-s3 max-md:flex-col max-md:gap-3 max-md:rounded-none max-md:border-none md:flex-wrap md:overflow-hidden">
            {features.map(({ id, icon, title, caption }) => (
              <div
                key={id}
                className="max-md:g7 relative z-2 flex-50 px-5 pb-5 max-md:flex-320 max-md:rounded-3xl max-md:border-2 max-md:border-s3 md:px-10 md:pb-10"
              >
                <div className="flex w-full items-start justify-start">
                  <div className="-ml-3 mb-12 flex flex-col items-center justify-center">
                    <div className="h-16 w-0.5 bg-s3" />
                    <img
                      src={icon}
                      className="size-28 object-contain"
                      alt={`${title} icon`}
                    />
                  </div>
                </div>
                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                <h2 className="h3 max-md:h5 mb-7 max-w-400 text-p4 max-md:mb-6">
                  {title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
