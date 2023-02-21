import React from 'react';

type Props = {
  label: string;
  type: 'text' | 'address' | 'email';
};

const Input: React.FC<Props> = ({ label, type }) => {
  return (
    <div className="flex flex-col gap-[6px] w-full">
      <label htmlFor={label} className="text-muted text-sm font-normal">
        {label}
      </label>
      <input
        id={label}
        type={type}
        className="text-white bg-transparent border border-white/10 rounded-[3px] py-2 px-4 w-full"
      />
    </div>
  );
};

export default Input;
