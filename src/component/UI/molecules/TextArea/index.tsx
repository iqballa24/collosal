import React from 'react';

type Props = {
  label: string;
  rows: number;
};

const TextArea: React.FC<Props> = ({ label, rows }) => {
  return (
    <div className="flex flex-col gap-[6px] w-full">
      <label htmlFor={label} className="text-muted text-sm">
        {label}
      </label>
      <textarea
        id={label}
        rows={rows}
        className="text-white bg-transparent border border-white/10 rounded-[3px] py-2 px-4 w-full"
      ></textarea>
    </div>
  );
};

export default TextArea;
