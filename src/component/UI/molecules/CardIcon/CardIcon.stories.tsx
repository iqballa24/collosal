import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import CardIcon from '.';
import { SmartPhone } from '@/component/UI/atoms/Icon';

export default {
  title: 'Molecules/CardIcon',
  component: CardIcon,
} as ComponentMeta<typeof CardIcon>;

const Template: ComponentStory<typeof CardIcon> = (args) => (
  <CardIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  icon: <SmartPhone />,
  label: 'Label Icon',
};
