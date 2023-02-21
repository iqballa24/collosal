import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import SquareMail from '.';

export default {
  title: 'Atoms/Icons',
  component: SquareMail,
} as ComponentMeta<typeof SquareMail>;

const Template: ComponentStory<typeof SquareMail> = () => <SquareMail />;

export const SquareMailIcon = Template.bind({});
