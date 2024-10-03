import PropTypes from "prop-types";
import clsx from "clsx";
import Marker from "./Marker";

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}) => {
  const Inner = () => (
    <>
      <span className="g4 inner-before relative flex min-h-[60px] items-center overflow-hidden rounded-2xl px-4 group-hover:before:opacity-100">
        <span className="absolute left-[-1px]">
          <Marker markerFill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="Hero section button icon"
            className="z-10 mr-5 size-10 object-contain"
          />
        )}
        <span className="base-bold relative z-2 font-poppins uppercase text-p1">
          {children}
        </span>
      </span>
      <span className="glow-before glow-after" />
    </>
  );

  return href ? (
    <a
      className={clsx(
        "g5 group relative rounded-2xl p-0.5 shadow-500",
        containerClassName,
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx("g5 group relative rounded-2xl p-0.5 shadow-500")}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.string,
  href: PropTypes.string,
  containerClassName: PropTypes.string,
  onClick: PropTypes.string,
  markerFill: PropTypes.string,
};

export default Button;
