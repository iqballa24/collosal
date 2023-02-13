import React from 'react';
import LabelIcon from '@/component/UI/molecules/LabelIcon';
import { SmallCardProps } from '@/types';

const SmallCard: React.FC<SmallCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-[15px] bg-white bg-opacity-10 py-[23px] px-[22px] border border-white border-opacity-10 rounded-[3px] w-full max-w-[241px] min-h-[141px]">
      <LabelIcon icon={icon} label={title} />
      <span className='text-muted font-normal text-sm leading-6'>{description}</span>
    </div>
  );
};

export default SmallCard;
