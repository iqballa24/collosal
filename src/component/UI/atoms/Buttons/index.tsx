import React from 'react';
import { ButtonProps } from '../../../../types';

const Buttons: React.FC<ButtonProps> = ({
  type,
  size,
  color,
  style,
  isRounded,
  label,
  onClick,
}) => {
  const CLASSNAME: string[] = ['max-h-[52px] transition-all'];

  switch (size) {
    case 'small':
      CLASSNAME.push('px-[30px] py-[10px] text-sm font-medium');
      break;
    case 'large':
      CLASSNAME.push('px-14 py-4 text-base font-semibold');
      break;
  }

  switch (color) {
    case 'primary':
      switch (style) {
        case 'solid':
          CLASSNAME.push('bg-primary text-white hover:brightness-90');
          break;
        case 'light':
          CLASSNAME.push('bg-primary bg-opacity-10 text-white hover:brightness-90');
          break;
        case 'outline':
          CLASSNAME.push('bg-transparant border border-primary text-primary hover:bg-primary hover:text-white');
          break;
      }

      break;
    case 'white':
      switch (style) {
        case 'solid':
          CLASSNAME.push('bg-white text-dark hover:brightness-90');
          break;
        case 'light':
          CLASSNAME.push('bg-white bg-opacity-10 text-white hover:brightness-90');
          break;
        case 'outline':
          CLASSNAME.push('bg-transparant border border-white text-white hover:bg-white hover:text-primary');
          break;
      }
      break;
  }

  CLASSNAME.push(isRounded ? 'rounded-full' : 'rounded');

  return (
    <button type={type} className={CLASSNAME.join(' ')} onClick={onClick}>
      {label}
    </button>
  );
};

export default Buttons;
