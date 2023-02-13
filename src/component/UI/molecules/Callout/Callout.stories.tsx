import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Callout from '.';

export default {
  title: 'Molecules/Callout',
  component: Callout,
} as ComponentMeta<typeof Callout>;

const Template: ComponentStory<typeof Callout> = (args) => (
  <Callout {...args} />
);

export const Default = Template.bind({});

Default.args = {
  text: 'We`ve prepared everything, it`s time for you to tell the problem',
};
