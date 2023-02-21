import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import TrendingUp from '.';

export default {
  title: 'Atoms/Icons',
  component: TrendingUp,
} as ComponentMeta<typeof TrendingUp>;

const Template: ComponentStory<typeof TrendingUp> = () => <TrendingUp />;

export const TrendingUpIcon = Template.bind({});
