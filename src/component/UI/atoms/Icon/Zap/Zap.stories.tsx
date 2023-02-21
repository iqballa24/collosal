import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Zap from '.';

export default {
  title: 'Atoms/Icons',
  component: Zap,
} as ComponentMeta<typeof Zap>;

const Template: ComponentStory<typeof Zap> = () => <Zap />;

export const ZapIcon = Template.bind({});
