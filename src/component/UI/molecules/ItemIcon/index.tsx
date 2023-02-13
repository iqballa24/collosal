import React from 'react';

const ItemIcon: React.FC<{
  icon: React.ReactNode;
  value: string;
  description?: string;
}> = ({ icon, value, description }) => {
  return description ? (
    <div className="flex flex-row items-center gap-7">
      {icon}
      <div className="flex flex-col gap-[5px]">
        <span className="text-muted font-medium text-base">{description}</span>
        <span className="text-white font-bold text-xl">{value}</span>
      </div>
    </div>
  ) : (
    <div className="flex flex-row items-center gap-[25px]">
      {icon}
      <span className="text-white font-medium text-base">{value}</span>
    </div>
  );
};

export default ItemIcon;
