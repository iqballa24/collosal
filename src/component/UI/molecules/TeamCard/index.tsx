import { TeamCardTypes } from '@/types';
import React from 'react';

const TeamCard: React.FC<TeamCardTypes> = ({ img, name, position }) => {
  return (
    <div className="w-[328px] h-fit bg-white/5">
      <div className="h-full max-h-[356px]">
        <img src={img} alt="" className="w-full" />
      </div>
      <div className="py-9 px-10 space-y-2.5">
        <h4 className="text-white text-lg font-bold">{name}</h4>
        <p className="text-muted text-sm font-medium">{position}</p>
      </div>
    </div>
  );
};

export default React.memo(TeamCard);
