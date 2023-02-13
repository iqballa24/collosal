import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import SquareFigma from './';

export default {
  title: 'Atoms/Icons',
  component: SquareFigma,
} as ComponentMeta<typeof SquareFigma>;

const Template: ComponentStory<typeof SquareFigma> = (args) => <SquareFigma />;

export const SquareFigmaIcon = Template.bind({});
