import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 1000 1000"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M355.914,61.065c-81.42-81.42-213.428-81.42-294.849,0s-81.421,213.427,0,294.849c81.42,81.42,213.428,81.42,294.849,0
      C437.334,274.492,437.334,142.485,355.914,61.065z M312.525,258.763c4.454,4.454,4.454,11.675,0,16.129l-37.632,37.632
      c-4.454,4.454-11.675,4.453-16.13,0l-50.273-50.275l-50.275,50.275c-4.453,4.455-11.674,4.453-16.128,0l-37.632-37.632
      c-4.454-4.454-4.453-11.674,0-16.127l50.275-50.276l-50.275-50.275c-4.453-4.454-4.453-11.675,0-16.128l37.633-37.632
      c4.454-4.454,11.675-4.454,16.127,0l50.275,50.275l50.274-50.275c4.454-4.454,11.675-4.454,16.129,0l37.632,37.632
      c4.453,4.454,4.454,11.675,0,16.128l-50.275,50.275L312.525,258.763z"
    />
  </svg>
);

export default SVG;
