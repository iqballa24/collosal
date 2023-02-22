import React from 'react';

const ItemIcon: React.FC<{
  icon: string;
  value?: string;
  description: string;
}> = ({ icon, value, description }) => {
  return value ? (
    <div className="flex flex-row items-center gap-7">
      <img src={icon} alt="" className="w-[70px]" />
      <div className="flex flex-col gap-[5px]">
        <span className="text-muted font-medium text-base">{description}</span>
        <span className="text-white font-bold text-xl">{value}</span>
      </div>
    </div>
  ) : (
    <div className="flex flex-row items-center gap-[25px]">
      <img src={icon} alt="" className="w-[50px]" />
      <span className="text-white font-medium text-base">{description}</span>
    </div>
  );
};

export default ItemIcon;
