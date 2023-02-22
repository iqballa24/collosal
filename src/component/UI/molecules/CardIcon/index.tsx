
import LabelIcon from '@/component/UI/molecules/LabelIcon';
import React from 'react';

const CardIcon: React.FC<{ icon: string; label: string }> = ({
  icon,
  label,
}) => {
  return (
    <div className="flex flex-row py-[15px] px-[22px] w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-[3px]">
      <LabelIcon icon={icon} label={label} />
    </div>
  );
};

export default CardIcon;
