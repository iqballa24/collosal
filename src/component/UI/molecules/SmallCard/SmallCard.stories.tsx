import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SmallCard from '.';
import MousePointer from '@/assets/mouse-pointer.svg'

export default {
  title: 'Molecules/SmallCard',
  component: SmallCard,
} as ComponentMeta<typeof SmallCard>;

const Template: ComponentStory<typeof SmallCard> = (args) => (
  <SmallCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  icon: MousePointer,
  title: 'Card title',
  description: 'Card description',
};
