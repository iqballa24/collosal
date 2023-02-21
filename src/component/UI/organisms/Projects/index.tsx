import { ProjectCard } from '@/component/UI/molecules';
import React from 'react';

type Props = {
  data: { id: number; title: string; description: string }[];
};

const Projects: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-row justify-center gap-10 flex-wrap">
      {data.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
};

export default Projects;
