import React from 'react';

const PageTitle: React.FC<{ text: string; fontSize: '4xl' | '3xl' | '2xl' }> =
  ({ text, fontSize }) => {
    const CLASSNAME = [`text-white font-bold leading-[54px] mb-6`];

    switch (fontSize) {
      case '4xl':
        CLASSNAME.push('text-4xl');
        break;
      case '3xl':
        CLASSNAME.push('text-3xl');
        break;
      case '2xl':
        CLASSNAME.push('text-2xl');
        break;
    }

    return <h2 className={CLASSNAME.join(' ')}>{text}</h2>;
  };

export default React.memo(PageTitle);
