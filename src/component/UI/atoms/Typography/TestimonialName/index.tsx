import React from 'react';

const TestimonialName: React.FC<{ text: string }> = ({ text }) => {
  return <h3 className="text-white text-lg font-bold">{text}</h3>;
};

export default TestimonialName;
