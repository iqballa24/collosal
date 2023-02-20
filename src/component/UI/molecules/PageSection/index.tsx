import {
  PageDescription,
  PageTitle,
  SectionBadge,
} from '@/component/UI/atoms/Typography';
import React from 'react';

type Props = {
  badge: string;
  title: string;
  description?: string;
  position: 'left' | 'center' | 'right';
};

const PageSection: React.FC<Props> = ({
  badge,
  title,
  description,
  position,
}) => {
  return (
    <div className={`flex flex-col text-${position} w-full mx-auto`}>
      <SectionBadge text={badge} />
      <PageTitle text={title} fontSize="3xl" />
      {description && <PageDescription text={description} />}
    </div>
  );
};

export default React.memo(PageSection);
