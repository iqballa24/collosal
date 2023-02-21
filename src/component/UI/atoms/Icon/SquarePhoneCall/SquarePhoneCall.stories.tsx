import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import SquarePhoneCall from '.';

export default {
  title: 'Atoms/Icons',
  component: SquarePhoneCall,
} as ComponentMeta<typeof SquarePhoneCall>;

const Template: ComponentStory<typeof SquarePhoneCall> = () => <SquarePhoneCall />;

export const SquarePhoneCallIcon = Template.bind({});
