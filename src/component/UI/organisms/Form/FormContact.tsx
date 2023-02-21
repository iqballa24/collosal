import React from 'react';
import { Buttons } from '@/component/UI/atoms';
import { Input, TextArea } from '@/component/UI/molecules';

const FormContact = () => {
  return (
    <form className="flex flex-col gap-7 bg-white/5 rounded-[5px] p-9 py-12 max-w-[412px]">
      <div className="flex flex-row gap-4 w-full">
        <Input label="Name" type="text" />
        <Input label="Email" type="email" />
      </div>
      <Input label="Subject" type="text" />
      <TextArea label="Message" rows={5} />
      <Buttons
        type="button"
        label="Send Message"
        color="primary"
        size="large"
        style="solid"
        isFull
        onClick={() => console.log()}
      />
    </form>
  );
};

export default React.memo(FormContact);
