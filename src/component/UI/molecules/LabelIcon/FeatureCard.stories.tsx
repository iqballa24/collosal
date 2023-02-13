import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import LabelIcon from '.';
import FigmaIcon from '../../atoms/Icon/SquareFigma';

export default {
  title: 'Molecules/LabelIcon',
  component: LabelIcon,
} as ComponentMeta<typeof LabelIcon>;

const Template: ComponentStory<typeof LabelIcon> = (args) => (
  <LabelIcon {...args} />
);

export const Default = Template.bind({});

Default.args = {
  icon: <FigmaIcon />,
  label: 'Label Icon',
};
