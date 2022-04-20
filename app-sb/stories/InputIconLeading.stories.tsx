import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InputIconLeading } from '../src/EnbdInput/inputIconLeading'

const meta: Meta = {
  title: 'Enbd Input Icon Leading',
  component: InputIconLeading,
  parameters: {
    controls: { expanded: true },
  },

};

export default meta;

const Template: Story<any> = args => <InputIconLeading {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

export const IconLeading = Template.bind({});
IconLeading.args = {
   
};