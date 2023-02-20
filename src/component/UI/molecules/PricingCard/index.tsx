import React from 'react';
import { Buttons } from '@/component/UI/atoms';
import { PricingCardTypes } from '@/types';

const PricingCard: React.FC<PricingCardTypes> = ({
  title,
  price,
  benefits,
  type,
}) => {
  const CLASSNAME = [
    'w-[328px] flex flex-col gap-9 px-[47px] pt-[58px] pb-[29px] rounded-[10px]',
  ];

  switch (type) {
    case 'low':
      CLASSNAME.push('bg-purple');
      break;
    case 'medium':
      CLASSNAME.push('bg-mazarine');
      break;
    case 'high':
      CLASSNAME.push('bg-byzantium');
      break;
  }

  return (
    <div className={CLASSNAME.join(' ')}>
      <div className="flex flex-row justify-between border-b border-white/10 pb-9">
        <h3 className="text-white font-bold">{title}</h3>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-muted">Starting from</span>
          <span className="text-4xl text-white font-bold">{price}$</span>
        </div>
      </div>
      <div className="flex flex-col gap-[50px]">
        <ul className="flex flex-col items-center gap-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-white font-medium">
              {benefit}
            </li>
          ))}
        </ul>
        <Buttons
          type="button"
          label="Detail"
          color="white"
          size="large"
          style="solid"
          isFull
          onClick={() => console.log()}
        />
      </div>
    </div>
  );
};

export default React.memo(PricingCard);
