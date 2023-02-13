import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import FeatureCard from '.';
import FigmaIcon from '../../atoms/Icon/SquareFigma';

export default {
  title: 'Molecules/FeatureCard',
  component: FeatureCard,
} as ComponentMeta<typeof FeatureCard>;

const Template: ComponentStory<typeof FeatureCard> = (args) => (
  <FeatureCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  icon: <FigmaIcon />,
  title: 'Feature title',
  description: 'Feature description',
};
