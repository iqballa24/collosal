import React from 'react';

const SectionBadge: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="text-cyan font-semibold leading-8 mb-3 uppercase">
      {text}
    </span>
  );
};

export default React.memo(SectionBadge);
