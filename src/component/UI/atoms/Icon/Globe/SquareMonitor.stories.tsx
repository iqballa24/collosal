import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import SquareGlobe from '.';

export default {
  title: 'Atoms/Icons',
  component: SquareGlobe,
} as ComponentMeta<typeof SquareGlobe>;

const Template: ComponentStory<typeof SquareGlobe> = () => <SquareGlobe />;

export const SquareGlobeIcon = Template.bind({});
