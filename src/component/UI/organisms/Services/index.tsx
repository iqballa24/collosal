import React from 'react';
import PricingCard from '@/component/UI/molecules/PricingCard';
import { PricingCardTypes } from '@/types';

const Services: React.FC<{
  data: PricingCardTypes[];
}> = ({ data }) => {
  return (
    <div className="w-full flex flex-row flex-wrap justify-center gap-5">
      {data.map((service, index) => (
        <PricingCard
          key={index}
          title={service.title}
          price={service.price}
          benefits={service.benefits}
          type={service.type}
        />
      ))}
    </div>
  );
};

export default Services;
