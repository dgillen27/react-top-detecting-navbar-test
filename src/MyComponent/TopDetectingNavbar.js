import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function TopDetectingNavbar(props) {
  const {
    className,
    topClassName,
    height,
    width,
    backgroundColor,
    topBackgroundColor
  } = props;
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const topPosition = window.scrollY;
      if (topPosition <= 0) {
        setIsTop(true);
      } else if (topPosition > 0) {
        setIsTop(false);
      }
    });
  }, [setIsTop]);

  const defaultStyle = {
    height: height ? `${height}px` : "66px",
    width: width ? `${width}vw` : "100vw",
    background: backgroundColor ? backgroundColor : "grey",
    position: "fixed"
  };

  const defaultTopStyle = {
    height: height ? `${height}px` : "66px",
    width: width ? `${width}vw` : "100vw",
    background: topBackgroundColor
      ? topBackgroundColor
      : backgroundColor
        ? backgroundColor
        : "white",
    position: "fixed"
  };

  topClassName &&
    !className &&
    console.error(
      "If you are declaring a topClassName, you need to declare a className first"
    );

  return (
    <div
      className={
        isTop ? className && className.concat(" ", topClassName) : className
      }
      style={className ? null : isTop ? defaultTopStyle : defaultStyle}
    >
      {props.children}
    </div>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
  topClassName: PropTypes.string,
  height: PropTypes.number,
  backgroundColor: PropTypes.string,
  topBackgroundColor: PropTypes.string
};
