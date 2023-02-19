import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import CircleLinkedin from '.';

export default {
  title: 'Atoms/Icons',
  component: CircleLinkedin,
} as ComponentMeta<typeof CircleLinkedin>;

const Template: ComponentStory<typeof CircleLinkedin> = (args) => <CircleLinkedin />;

export const CircleLinkedinIcon = Template.bind({});
