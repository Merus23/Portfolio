import React from 'react';

const SVG = ({ width, height }) => {
  return (
    <svg width={width} height={height} viewBox="0 0 250 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_218_2)">
        <rect width="250" height="250" rx="70" fill="black" />
        <path
          d="M53.6488 48.5455H74.6715L124.103 169.284H125.808L175.24 48.5455H196.262V194H179.785V83.4886H178.365L132.91 194H117.001L71.5465 83.4886H70.1261V194H53.6488V48.5455Z"
          fill="white"
        />
      </g>
      <rect x="1.5" y="1.5" width="247" height="247" rx="68.5" stroke="white" strokeWidth="3" />
      <defs>
        <clipPath id="clip0_218_2">
          <rect width="250" height="250" rx="70" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVG;
