import { Element } from "react-scroll";

const Pricing = () => {
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 border-2 border-red-500">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 max-sm:maw-w-sm relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h3>
            <div>
              <button>Monthly</button>
              <button>Annual</button>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
