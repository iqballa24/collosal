import React from 'react';
import {
  PageDescription,
  PageTitle,
  SectionBadge,
} from '@/component/UI/atoms/Typography';

type Props = {
  badge: string;
  title: string;
  description?: string;
  position: 'left' | 'center' | 'right';
};

const PageHeader: React.FC<Props> = ({
  badge,
  title,
  description,
  position,
}) => {
  const CLASSNAME = ['flex flex-col w-full md:max-w-[601px] mx-auto'];

  switch (position) {
    case 'left':
      CLASSNAME.push('text-left');
      break;
    case 'center':
      CLASSNAME.push('text-center');
      break;
    case 'right':
      CLASSNAME.push('text-right');
      break;
  }

  return (
    <div className={CLASSNAME.join(' ')}>
      <SectionBadge text={badge} />
      <PageTitle text={title} fontSize="4xl" />
      {description && <PageDescription text={description} />}
    </div>
  );
};

export default React.memo(PageHeader);
