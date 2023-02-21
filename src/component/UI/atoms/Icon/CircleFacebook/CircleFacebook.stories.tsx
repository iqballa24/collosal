import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import CircleFacebook from '.';

export default {
  title: 'Atoms/Icons',
  component: CircleFacebook,
} as ComponentMeta<typeof CircleFacebook>;

const Template: ComponentStory<typeof CircleFacebook> = () => <CircleFacebook />;

export const CircleFacebookIcon = Template.bind({});
