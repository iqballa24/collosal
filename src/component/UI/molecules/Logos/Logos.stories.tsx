import React from 'react';

import GoogleLogo from '../../../../assets/GoogleLogo.svg';
import GithubLogo from '../../../../assets/GithubLogo.svg';
import ForbesLogo from '../../../../assets/ForbesLogo.svg';
import FacebookLogo from '../../../../assets/FacebookLogo.svg';
import MicrosoftLogo from '../../../../assets/MicrosoftLogo.svg';

import { ComponentMeta, ComponentStory } from '@storybook/react';

const data = {
  customers: [GithubLogo, ForbesLogo, GoogleLogo, MicrosoftLogo, FacebookLogo],
};

import Logos from '.';

export default {
  title: 'Molecules/Logos',
  component: Logos,
} as ComponentMeta<typeof Logos>;

const Template: ComponentStory<typeof Logos> = (args) => <Logos {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: data.customers,
};
