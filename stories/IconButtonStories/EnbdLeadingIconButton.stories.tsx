import React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnbdLeadingIconButton, Props } from '../../src/EnbdLeadingIconButton';

const meta: Meta = {
  title: 'Leading Icon button',
  component: EnbdLeadingIconButton,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <EnbdLeadingIconButton {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  label: 'Leading Icon Button',
  theme: {
    '&:hover': {
      backgroundColor: 'red',
    },
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Leading Icon Button',
  theme: {
    '&:hover': {
      backgroundColor: 'red',
    },
  },
  primary: false,
  disabled: true,
  text: 'Disabled',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Leading Icon Button',
  theme: {
    '&:hover': {
      backgroundColor: 'red',
    },
  },
  primary: true,
  disabled: false,
  size: 'small',
  text: 'Small',
};

export const Medium = Template.bind({});
Medium.args = {
  label: 'Leading Icon Button',
  theme: {
    '&:hover': {
      backgroundColor: 'red',
    },
  },
  primary: true,
  disabled: false,
  size: 'medium',
  text: 'Medium',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Leading Icon Button',
  theme: {
    '&:hover': {
      backgroundColor: 'red',
    },
  },
  primary: true,
  disabled: false,
  size: 'large',
  text: 'Large',
};
