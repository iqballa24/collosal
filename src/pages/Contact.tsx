import { SquareMail, SquarePhoneCall } from '@/component/UI/atoms/Icon';
import { ItemIcon, PageHeader } from '@/component/UI/molecules';
import { Form } from '@/component/UI/organisms';
import React from 'react';

const Contact = () => {
  return (
    <React.Fragment>
      <div className="wrapper py-[120px] flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-10">
        <div className="flex flex-col gap-[50px] lg:max-w-[502px]">
          <PageHeader
            badge="contact"
            title="We love receiving messages from you, we are waiting for it."
            position="left"
          />
          <ItemIcon
            icon={<SquarePhoneCall />}
            value="phone"
            description="+62 1234 8921"
          />
          <ItemIcon
            icon={<SquareMail />}
            value="Email"
            description="support@collosal.tld"
          />
        </div>
        <Form.FormContact />
      </div>
    </React.Fragment>
  );
};

export default React.memo(Contact);
