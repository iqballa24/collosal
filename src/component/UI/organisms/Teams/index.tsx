import React from 'react';
import { TeamCardTypes } from '@/types';
import TeamCard from '@/component/UI/molecules/TeamCard';

const Teams: React.FC<{ data: TeamCardTypes[] }> = ({ data }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center xl:justify-between gap-10">
      {data.map((team, index) => (
        <TeamCard
          key={index}
          img={team.img}
          name={team.name}
          position={team.position}
        />
      ))}
    </div>
  );
};

export default React.memo(Teams);
