import { Buttons } from '@/component/UI/atoms';
import React from 'react';

const ProjectCard: React.FC<{
  title: string;
  description: string;
  onClick: () => void;
}> = ({ title, description, onClick }) => {
  return (
    <div className="flex flex-col h-full max-h-[636px] mb-[70px]">
      <img src="/project-illustration.svg" alt="" className="w-full" />
      <div className="flex flex-col items-center text-center pt-10 px-[72px]">
        <span className="text-white text-xl font-bold leading-[34px] pb-[10px]">
          {title}
        </span>
        <p className="text-muted leading-[34px] pb-[38px]">{description}</p>
        <Buttons
          type="button"
          color="white"
          label="Detail"
          style="outline"
          size="small"
          isRounded
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default React.memo(ProjectCard);
