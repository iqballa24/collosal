import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Avatar from '.';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const WithQuote = Template.bind({});

WithQuote.args = {
  alt: '',
  src: 'https://ui-avatars.com/api/?name=Iqbal+Nugraha',
  width: 72,
  withQuote: true
};

export const WithoutQuote = Template.bind({});

WithoutQuote.args = {
  alt: '',
  src: 'https://ui-avatars.com/api/?name=Iqbal+Nugraha',
  width: 72,
  withQuote: false
};
