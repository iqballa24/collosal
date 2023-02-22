import QuoteBadge from '@/assets/Quote-badge.svg';
import React from 'react';

const Avatar: React.FC<{
  alt: string;
  src: string;
  width: number;
  withQuote?: boolean;
}> = ({ src, alt, width, withQuote }) => {
  const className = ['rounded-full'];

  return (
    <div className="relative w-fit">
      <img src={src} alt={alt} className={className.join(' ')} width={width} />
      {withQuote && (
        <div className="absolute bottom-0 -right-1">
          <img src={QuoteBadge} alt="" className="w-[28px]" />
        </div>
      )}
    </div>
  );
};

export default Avatar;
