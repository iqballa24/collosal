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
      <a href={linkedin} target="_blank" rel="noreferrer">
        <CircleTwitter />
      </a>
      <a href={facebook} target="_blank" rel="noreferrer">
        <CircleFacebook />
      </a>
      <a href={twitter} target="_blank" rel="noreferrer">
        <CircleLinkedin />
      </a>
    </div>
  );
};

export default React.memo(Socials);
