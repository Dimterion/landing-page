import { Element } from "react-scroll";

const Info = () => {
  return (
    <section>
      <Element name="info" className="relative">
        <div className="container relative z-2 py-28">
          <div>
            <h3 className="h3 max-md:h5 max-lg:maw-w-md mb-7 max-w-640 text-p4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
          </div>
          <div className="info-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2" />
        </div>
      </Element>
    </section>
  );
};

export default Info;
