import React from 'react';

const SquareArrowUp = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="50" rx="3" fill="white" fillOpacity="0.05" />
      <path
        d="M25 30.8334V19.1667"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.1667 25.0001L25.0001 19.1667L30.8334 25.0001"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SquareArrowUp;
