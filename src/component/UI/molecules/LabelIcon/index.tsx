import React from 'react';

const LabelIcon: React.FC<{ icon: string; label: string }> = ({
  icon,
  label,
}) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <img src={icon} alt="" className='w-[30px]'/>
      <span className="text-white font-semibold text-base">{label}</span>
    </div>
  );
};

export default LabelIcon;
