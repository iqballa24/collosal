import { Buttons } from '@/component/UI/atoms';
import { PageHeader } from '@/component/UI/molecules';
import { Form } from '@/component/UI/organisms';
import React from 'react';

const Quote = () => {
  return (
    <React.Fragment>
      <div className="wrapper py-[120px] flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-10">
        <div className="flex flex-col gap-[47px]">
          <PageHeader
            badge="send quote"
            title="Tell us about your problem and how we can help"
            description="We are happy to help you, tell us what is the problem with your company, and we are ready to answer these problems. It usually takes a few minutes for us to respond."
            position="left"
          />
          <Buttons
            type="button"
            label="Ask Us"
            color="white"
            style="light"
            size="large"
            onClick={() => console.log()}
          />
        </div>
        <Form.FormQuote />
      </div>
    </React.Fragment>
  );
};

export default Quote;
