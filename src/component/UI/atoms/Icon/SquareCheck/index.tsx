import React from 'react';

const SquareCheck = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="50" rx="3" fill="white" fillOpacity="0.05" />
      <g clipPath="url(#clip0_631_169)">
        <path
          d="M33.3334 24.2333V25C33.3324 26.797 32.7505 28.5455 31.6745 29.9848C30.5986 31.4241 29.0862 32.477 27.3629 32.9866C25.6396 33.4961 23.7978 33.4349 22.1121 32.8121C20.4265 32.1894 18.9873 31.0384 18.0092 29.5309C17.0311 28.0233 16.5666 26.24 16.6848 24.4469C16.8031 22.6538 17.4978 20.9469 18.6653 19.5809C19.8329 18.2148 21.4107 17.2628 23.1636 16.8668C24.9164 16.4707 26.7503 16.6519 28.3918 17.3833"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.3333 18.3333L25 26.6749L22.5 24.1749"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_631_169">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(15 15)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SquareCheck;
