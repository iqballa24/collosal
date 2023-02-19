import React from 'react';
import { Avatar, TagName } from '@/component/UI/atoms';
import { Socials } from '@/component/UI/molecules';
import { userTypes } from '@/types';

const AuthorCard: React.FC<{ user: userTypes }> = ({ user }) => {
  const { avatar, name, job, socials, description } = user;

  return (
    <div className="flex flex-col sm:flex-row max-w-[676px] gap-[50px] p-10 bg-white bg-opacity-5">
      <div className="w-3/12">
        <Avatar src={avatar} alt="" width={101} />
      </div>
      <div className="w-9/12 flex flex-col gap-7">
        <div className="flex flex-row justify-between w-full">
          <TagName title={name} text={job} />
          <Socials
            facebook={socials.facebook}
            linkedin={socials.linkedin}
            twitter={socials.twitter}
          />
        </div>
        <p className="text-white text-base font-medium leading-[34px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
