import React from 'react';
import { Meta, Story } from '@storybook/react';
import { EnbdButton, iButtonProps } from '../src/EnbdButton';
import SendIcon from '@mui/icons-material/Send';

import DeleteIcon from '@mui/icons-material/Delete';
const meta: Meta = {
  title: 'Enbd Button',
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
Default.args = {
    label: "Submit",
    variant : "contained",
    color : "primary",
    startIcon : <SendIcon/>,
    endIcon : <DeleteIcon/>
};

export const SendBtn = Template.bind({});
SendBtn.args = {
  label : "Send",
  variant : "outlined",
  color : "primary",
  startIcon : <SendIcon/> 
};