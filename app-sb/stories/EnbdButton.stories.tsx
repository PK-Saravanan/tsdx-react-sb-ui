import React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnbdButton, iButtonProps } from '../src/EnbdButton';
import SendIcon from '@mui/icons-material/Send';

import DeleteIcon from '@mui/icons-material/Delete';
const meta: Meta = {
  title: 'Standrad button',
  component: EnbdButton,
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

const Template: Story<iButtonProps & any> = args => <EnbdButton {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

const inputTheme = {
    // "btnHover": "red",
    // "btnColor": "orange",
    // "btnTextTransform": 'none'
}

Default.args = {
    label: "Standrad",
    variant : "contained",
    disabled : true,
    startIcon : <SendIcon/>,
    endIcon : <DeleteIcon/>
};
