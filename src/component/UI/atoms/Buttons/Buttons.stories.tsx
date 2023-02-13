import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Buttons from '.';

export default {
  title: 'Atoms/Buttons',
  component: Buttons,
  argTypes: {
    style: {
      table: {
        category: 'Button styles',
      },
    },
    color: {
      table: {
        category: 'Button styles',
      },
    },
    isRounded: {
      table: {
        category: 'Button styles',
      },
    },
    onClick: {
      table: {
        category: 'Events',
        subcategory: 'Button Events',
      },
    },
    size: {
      table: {
        category: 'Button sizes',
      },
    },
  },
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = (args) => (
  <Buttons {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  type: 'button',
  color: 'primary',
  label: 'Buttons',
  isRounded: true,
  size: 'large',
  style: 'solid',
};

export const White = Template.bind({});
White.args = {
  type: 'button',
  color: 'white',
  label: 'Buttons',
  isRounded: true,
  size: 'large',
  style: 'solid',
};

export const Outline = Template.bind({});

Outline.args = {
  type: 'button',
  color: 'primary',
  label: 'Buttons',
  isRounded: true,
  size: 'large',
  style: 'outline',
};

export const Light = Template.bind({});

Light.args = {
  type: 'button',
  color: 'primary',
  label: 'Buttons',
  isRounded: true,
  size: 'large',
  style: 'light',
};

export const Small = Template.bind({});

Small.args = {
  type: 'button',
  color: 'primary',
  label: 'Buttons',
  isRounded: true,
  size: 'small',
  style: 'light',
};
