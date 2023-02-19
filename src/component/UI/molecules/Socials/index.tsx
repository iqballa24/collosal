import React from 'react';
import {
  CircleTwitter,
  CircleFacebook,
  CircleLinkedin,
} from '@/component/UI/atoms/Icon';
import { socialsTypes } from '@/types';

const Socials: React.FC<socialsTypes> = ({ linkedin, facebook, twitter }) => {
  return (
    <div className="flex flex-row gap-[10px]">
      <CircleTwitter src={twitter} />
      <CircleFacebook src={facebook} />
      <CircleLinkedin src={linkedin} />
    </div>
  );
};

export default Socials;
