import React from 'react';
import { Buttons } from '@/component/UI/atoms';
import { Input, ComboboxInput, TextArea } from '@/component/UI/molecules';

const FormQuote = () => {
  return (
    <form className="flex flex-col gap-7 bg-white/5 rounded-[5px] p-9 py-12 max-w-[412px]">
      <div className="flex flex-row gap-4 w-full">
        <Input label="Name" type="text" />
        <Input label="Email" type="email" />
      </div>
      <div className="flex flex-row gap-4 w-full">
        <Input label="Company" type="text" />
        <ComboboxInput
          label="Company Size"
          options={[
            { id: 1, text: 'Functional' },
            { id: 2, text: 'Business' },
            { id: 3, text: 'Corporate' },
          ]}
        />
      </div>
      <TextArea label="Tell Us Your Problem" rows={5} />
      <Buttons
        type="button"
        label="Send Quote"
        color="primary"
        size="large"
        style="solid"
        isFull
        onClick={() => console.log()}
      />
    </form>
  );
};

export default React.memo(FormQuote);
