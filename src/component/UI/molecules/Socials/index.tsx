import React from 'react';

import FacebookLogo from '@/assets/facebook.svg';
import TwitterLogo from '@/assets/twitter.svg';
import LinkedinLogo from '@/assets/linkedin.svg';

import { socialsTypes } from '@/types';

const Socials: React.FC<socialsTypes> = ({ linkedin, facebook, twitter }) => {
  return (
    <div className="flex flex-row gap-[10px]">
      <a href={linkedin} target="_blank" rel="noreferrer">
        <div className="bg-white/5 hover:bg-primary p-3 rounded-full">
          <img src={LinkedinLogo} alt="" className="w-[20px]" />
        </div>
      </a>
      <a href={facebook} target="_blank" rel="noreferrer">
        <div className="bg-white/5 hover:bg-primary p-3 rounded-full">
          <img src={FacebookLogo} alt="" className="w-[20px]" />
        </div>
      </a>
      <a href={twitter} target="_blank" rel="noreferrer">
        <div className="bg-white/5 hover:bg-primary p-3 rounded-full">
          <img src={TwitterLogo} alt="" className="w-[20px]" />
        </div>
      </a>
    </div>
  );
};

export default React.memo(Socials);
