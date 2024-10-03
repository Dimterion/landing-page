import { Element, Link as LinkScroll } from "react-scroll";
import Button from "./Button";
import heroBtn from "../assets/hero/hero_btn.svg";

const Hero = () => {
  return (
    <section className="relative border-2 border-amber-400 pb-40 pt-60 max-lg:pb-36 max-lg:pt-52 max-md:pb-32 max-md:pt-36">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">Lorem ipsum</div>
            <h1 className="h1 max-lg:h2 mb-6 uppercase text-p4 max-lg:mb-7 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Lorem, ipsum dolor.
            </h1>
            <p className="body-1 mb-14 max-w-440 max-md:mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius,
              aspernatur?
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon={heroBtn}>Button</Button>
            </LinkScroll>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Hero;
