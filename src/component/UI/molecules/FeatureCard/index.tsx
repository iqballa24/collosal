import React from 'react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col py-8 px-10 gap-[29px] max-w-[328px] min-h-[276px] rounded-[5px] bg-white bg-opacity-10">
      {icon}
      <div className="flex flex-col gap-[8px]">
        <h3 className='text-white font-bold text-lg' >{title}</h3>
        <p className='text-muted font-medium text-base leading-8'>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
