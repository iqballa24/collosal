import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import CircleTwitter from '.';

export default {
  title: 'Atoms/Icons',
  component: CircleTwitter,
} as ComponentMeta<typeof CircleTwitter>;

const Template: ComponentStory<typeof CircleTwitter> = (args) => <CircleTwitter />;

export const CircleTwitterIcon = Template.bind({});
