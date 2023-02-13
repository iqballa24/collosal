import { Avatar, TagName } from '@/component/UI/atoms';
import React from 'react';

const AuthorCard = () => {
  return (
    <div className="flex flex-col sm:flex-row max-w-[676px] gap-[50px] p-10 bg-white bg-opacity-5">
      <div className="w-3/12">
        <Avatar
          src="https://ui-avatars.com/api/?name=Iqbal+Nugraha"
          alt=""
          width={101}
        />
      </div>
      <div className="w-9/12 flex flex-col gap-7">
        <div className="flex flex-row justify-between w-full">
          <TagName title="Alex Berner" text="UI Designer" />
          <TagName title="Alex Berner" text="UI Designer" />
          <ul className="flex flex-row gap-[10px]">
            <li></li>
          </ul>
        </div>
        <p className='text-white text-base font-medium leading-[34px]'>
          Night subdue their morning created every light earth very darkness
          they're you're deep female. Tree sixth divided greater, midst earth
          forth won't for moved.
        </p>
      </div>
    </div>
  );
};

export default AuthorCard;
