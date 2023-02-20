import { FeatureCard } from '@/component/UI/molecules';
import React from 'react';

type Props = {
  features: {
    id: number;
    icon: () => JSX.Element;
    title: string;
    description: string;
  }[];
};

const Features: React.FC<Props> = ({ features }) => {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-5">
      {features.map((feature) => (
        <FeatureCard
          key={feature.id}
          title={feature.title}
          description={feature.description}
          icon={<feature.icon />}
        />
      ))}
    </div>
  );
};

export default Features;
