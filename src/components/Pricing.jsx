import clsx from "clsx";
import { useState } from "react";
import { Element } from "react-scroll";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="pricing-head_before relative mx-auto max-w-960 border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 max-sm:maw-w-sm relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </h3>
            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <button
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>
              <div
                className={clsx(
                  "g4 pricing-head_btn_befor absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden rounded-14 shadow-400 transition-transform duration-500 before:h-100",
                  !monthly && "translate-x-full",
                )}
              />
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
