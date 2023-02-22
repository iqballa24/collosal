import { FeatureCard } from '@/component/UI/molecules';
import React from 'react';

type Props = {
  features: {
    id: number;
    icon: string;
    title: string;
    description: string;
  }[];
};

const Features: React.FC<Props> = ({ features }) => {
  return (
    <div className="flex flex-row flex-wrap justify-center items-stretch gap-5">
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
        />
      ))}
    </div>
  );
};

export default Features;
