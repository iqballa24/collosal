import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import SmartPhone from '.';

export default {
  title: 'Atoms/Icons',
  component: SmartPhone,
} as ComponentMeta<typeof SmartPhone>;

const Template: ComponentStory<typeof SmartPhone> = () =>  <SmartPhone />;

export const SmartPhoneIcon = Template.bind({});
