import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Figma from './';

export default {
  title: 'Atoms/Icons',
  component: Figma,
} as ComponentMeta<typeof Figma>;

const Template: ComponentStory<typeof Figma> = () => <Figma />;

export const FigmaIcon = Template.bind({});
