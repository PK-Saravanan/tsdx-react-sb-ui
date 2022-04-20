import React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnbdInput  } from '../src/EnbdInput';
import { InputIconLeading } from '../src/EnbdInput/inputIconLeading'

const meta: Meta = {
  title: 'Enbd Input',
  component: EnbdInput,
  parameters: {
    controls: { expanded: true },
  },

};

export default meta;

const Template: Story<any> = args => <EnbdInput {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing

export const Basic = Template.bind({});
Basic.args = {
    label: "Filled",
    variant : "filled",
    id:"filled-basic",
    type:"basic"
};