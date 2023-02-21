import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Monitor from '.';

export default {
  title: 'Atoms/Icons',
  component: Monitor,
} as ComponentMeta<typeof Monitor>;

const Template: ComponentStory<typeof Monitor> = () => <Monitor />;

export const MonitorIcon = Template.bind({});
