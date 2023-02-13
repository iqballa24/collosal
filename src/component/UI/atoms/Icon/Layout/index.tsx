import React from 'react';

const Layout = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.5833 6.25H10.4167C8.11548 6.25 6.25 8.11548 6.25 10.4167V39.5833C6.25 41.8845 8.11548 43.75 10.4167 43.75H39.5833C41.8845 43.75 43.75 41.8845 43.75 39.5833V10.4167C43.75 8.11548 41.8845 6.25 39.5833 6.25Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.25 18.75H43.75"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.75 43.75V18.75"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Layout;