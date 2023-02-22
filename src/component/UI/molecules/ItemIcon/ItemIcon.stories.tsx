import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ItemIcon from '.';
import PhoneCall from '@/assets/phone-call.svg';
import Figma from '@/assets/figma.svg';

export default {
  title: 'Molecules/ItemIcon',
  component: ItemIcon,
} as ComponentMeta<typeof ItemIcon>;

const Template: ComponentStory<typeof ItemIcon> = (args) => (
  <ItemIcon {...args} />
);

export const WithDescription = Template.bind({});

WithDescription.args = {
  icon: PhoneCall,
  value: 'Key',
  description: 'Value',
};

export const WithoutDescription = Template.bind({});

WithoutDescription.args = {
  icon: Figma,
  description: 'Value',
};
