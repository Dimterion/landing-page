import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";

const InfoItem = ({ infoItem, index }) => {
  const [activeId, setActiveId] = useState(null);
  const active = activeId === infoItem.id;

  return (
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        onClick={() => {
          setActiveId(activeId === infoItem.id ? null : infoItem.id);
        }}
      >
        <div className="flex-1">
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {index < 10 ? "0" : ""}
            {index}
          </div>
          <div
            className={clsx(
              "h6 max-md:mih-h-20 text-p4 transition-colors duration-500 max-md:flex max-md:items-center",
              active && "max-lg:text-p1",
            )}
          >
            {infoItem.question}
          </div>
        </div>
      </div>
    </div>
  );
};

InfoItem.propTypes = {
  infoItem: PropTypes.object,
  index: PropTypes.number,
};

export default InfoItem;
