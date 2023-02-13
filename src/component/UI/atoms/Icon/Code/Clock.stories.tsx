import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Code from '.';

export default {
  title: 'Atoms/Icons',
  component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code />;

export const CodeIcon = Template.bind({});
