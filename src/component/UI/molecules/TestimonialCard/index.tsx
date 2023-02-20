import React from 'react';
import { Avatar } from '@/component/UI/atoms';
import {
  TestimonialCompany,
  TestimonialDescription,
  TestimonialName,
} from '@/component/UI/atoms/Typography';

type Props = {
  image: string;
  name: string;
  company: string;
  description: string;
};

const TestimonialCard: React.FC<Props> = ({
  image,
  name,
  company,
  description,
}) => {
  return (
    <div className="w-full flex flex-col gap-8 py-[63px] px-[47px] bg-white/5">
      <div className="flex flex-col items-center gap-[21px]">
        <Avatar src={image} alt="" width={90} withQuote />
        <div className="flex flex-col items-center gap-2">
          <TestimonialName text={name} />
          <TestimonialCompany text={company} />
        </div>
      </div>
      <TestimonialDescription text={description} />
    </div>
  );
};

export default React.memo(TestimonialCard);
