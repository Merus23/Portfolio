import React from 'react';

const CustomSVG = ({ backgroundColor, fontColor, width, height }) => {
  const svgStyle = {
    backgroundColor: backgroundColor,
    color: fontColor,
  };

  return (
    <svg width={width} height={height} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
      <g clipPath="url(#clip0_217_6)">
        <rect width="250" height="250" fill="white" />
        <path d="M53.6488 48.5455H74.6715L124.103 169.284H125.808L175.24 48.5455H196.262V194H179.785V83.4886H178.365L132.91 194H117.001L71.5465 83.4886H70.1261V194H53.6488V48.5455Z" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_217_6">
          <rect width="250" height="250" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CustomSVG;