import React from 'react';

const SectionDescription: React.FC<{ text: string }> = ({ text }) => {
  return <p className="text-muted text-base font-medium leading-8">{text}</p>;
};

export default React.memo(SectionDescription);
