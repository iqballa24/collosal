import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Socials from '.';

export default {
  title: 'Molecules/Socials',
  component: Socials,
} as ComponentMeta<typeof Socials>;

const Template: ComponentStory<typeof Socials> = (args) => (
  <Socials {...args} />
);

export const Default = Template.bind({});

Default.args = {
  twitter: '',
  facebook: '',
  linkedin: '',
};
