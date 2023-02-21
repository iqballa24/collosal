import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Clock from '.';

export default {
  title: 'Atoms/Icons',
  component: Clock,
} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = () => <Clock />;

export const ClockIcon = Template.bind({});
