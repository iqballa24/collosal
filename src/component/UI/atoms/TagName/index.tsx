import React from 'react';

const TagName: React.FC<{ title: string; text: string }> = ({
  title,
  text,
}) => {
  return (
    <div className='flex flex-col gap-[6px]'>
      <h3 className="text-xl text-white font-semibold">{title}</h3>
      <p className="text-xs text-muted font-semibold">{text}</p>
    </div>
  );
};

export default TagName;
