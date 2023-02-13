import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Layout from './';

export default {
  title: 'Atoms/Icons',
  component: Layout,
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout />;

export const LayoutIcon = Template.bind({});
