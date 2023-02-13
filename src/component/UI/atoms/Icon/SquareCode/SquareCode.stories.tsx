import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import SquareCode from './';

export default {
  title: 'Atoms/Icons',
  component: SquareCode,
} as ComponentMeta<typeof SquareCode>;

const Template: ComponentStory<typeof SquareCode> = (args) => <SquareCode />;

export const SquareCodeIcon = Template.bind({});
