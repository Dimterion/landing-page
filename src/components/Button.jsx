import PropTypes from "prop-types";
import clsx from "clsx";

const Button = ({ icon, children, href, containerClassName, onClick }) => {
  const Inner = () => (
    <>
      <span>
        <span>Marker</span>
        {icon && (
          <img
            src={icon}
            alt="Hero section button icon"
            className="z-10 mr-5 size-10 object-contain"
          />
        )}
        <span>{children}</span>
      </span>
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
};

export default Button;
