import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import QuoteBadge from '.';

export default {
  title: 'Atoms/Icons',
  component: QuoteBadge,
} as ComponentMeta<typeof QuoteBadge>;

const Template: ComponentStory<typeof QuoteBadge> = (args) => <QuoteBadge />;

export const QuoteBadgeIcon = Template.bind({});
