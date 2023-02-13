import React from 'react';

const LabelIcon: React.FC<{ icon: React.ReactNode; label: string }> = ({
  icon,
  label,
}) => {
  return (
    <div className="flex flex-row items-center gap-4">
      {icon}
      <span className="text-white font-semibold text-base">{label}</span>
    </div>
  );
};

export default LabelIcon;
