import * as React from "react";
import { number } from "prop-types";

Arrow.propTypes = {
  margin: number,
};

function Arrow({ margin = 200, ...rest }) {
  return (
    <svg
      width={50}
      height={50}
      margin-top={200}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...rest}
    >
      <title>{"Circle-Load-Button Copy"}</title>
      <defs>
        <path id="prefix__a" d="M3 1L.5 3.5 6 9 .5 14.5 3 17l8-8z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle
          transform="rotate(-180 24.5 24.5)"
          cx={24}
          cy={24}
          r={24}
          opacity={0.3}
          stroke="#FFF"
          strokeWidth={2}
        />
        <use
          fill="#F9F9F9"
          transform="matrix(0 1 1 0 16 20.5)"
          xlinkHref="#prefix__a"
        />
      </g>
    </svg>
  );
}

export default Arrow;
