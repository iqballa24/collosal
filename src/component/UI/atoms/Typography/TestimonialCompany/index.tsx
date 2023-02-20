import React from 'react';

const TestimonialCompany: React.FC<{ text: string }> = ({ text }) => {
  return <span className="text-muted text-sm font-medium">{text}</span>;
};

export default TestimonialCompany;
