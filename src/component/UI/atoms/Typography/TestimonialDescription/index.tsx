import React from 'react';

const TestimonialDescription: React.FC<{ text: string }> = ({ text }) => {
  return (
    <q className="text-white font-medium text-center leading-8">
      Your company is truly upstanding and is behind its product 100%. It's the
      perfect solution for our business. It has really helped our business.
    </q>
  );
};

export default TestimonialDescription;
