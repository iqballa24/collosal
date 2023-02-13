import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import TagName from '.';

export default {
  title: 'Atoms/TagName',
  component: TagName,
} as ComponentMeta<typeof TagName>;

const Template: ComponentStory<typeof TagName> = (args) => (
  <TagName {...args} />
);

export const Default = Template.bind({});

Default.args = {
  title: 'Tengku Iqbal Nugraha',
  text: 'Front-end Developer',
};
