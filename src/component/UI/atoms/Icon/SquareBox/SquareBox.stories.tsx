import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import SquareBox from '.';

export default {
  title: 'Atoms/Icons',
  component: SquareBox,
} as ComponentMeta<typeof SquareBox>;

const Template: ComponentStory<typeof SquareBox> = () => <SquareBox />;

export const SquareBoxIcon = Template.bind({});
