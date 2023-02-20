import React from 'react';
import { Buttons } from '@/component/UI/atoms';

const Callout: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center justify-between py-[47px] border-y border-white/10">
      <h2 className='text-3xl text-white text-center lg:text-left leading-[48px] font-bold max-w-xl'>{text}</h2>
      <div className="flex flex-row gap-[10px]">
        <Buttons
          color="primary"
          style="solid"
          label="Send Quote"
          type="button"
          size="large"
          onClick={() => console.log('')}
        />
        <Buttons
          color="white"
          style="light"
          label="Ask Us"
          type="button"
          size="large"
          onClick={() => console.log('')}
        />
      </div>
    </div>
  );
};

export default Callout;
