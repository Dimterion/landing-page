import { Element } from "react-scroll";
import infoLogo from "../assets/info/info_logo.svg";
import { info } from "../constants/index";
import InfoItem from "./InfoItem";

const Info = () => {
  const halfLength = Math.floor(info.length / 2);

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
        <div className="info-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            <div className="absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center rounded-half border-2 border-s2 bg-s1">
              <img
                src={infoLogo}
                alt="Info section logo"
                className="size-1/2"
              />
            </div>
            <div className="relative flex-1 pt-24">
              {info.slice(halfLength).map((infoItem, index) => (
                <InfoItem
                  key={infoItem.id}
                  infoItem={infoItem}
                  index={halfLength + index}
                />
              ))}
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Info;
