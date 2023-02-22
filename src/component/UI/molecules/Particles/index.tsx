import React from 'react';

const Particles = () => {
  return (
    <>
      <img
        src="/ellipse-green.svg"
        alt=""
        className="absolute -top-10 right-16 lg:right-48"
      />
      <img
        src="/ellipse-purple.svg"
        alt=""
        className="absolute top-32 right-10 lg:right-32"
      />
      <img src="/ellipse-red.svg" alt="" className="absolute top-5 left-24" />
    </>
  );
};

export default React.memo(Particles);
