import React from 'react';

const TestimonialDescription: React.FC<{ text: string }> = ({ text }) => {
  return <q className="text-white font-medium text-center leading-8">{text}</q>;
};

export default TestimonialDescription;
