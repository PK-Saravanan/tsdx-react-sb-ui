import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import TextField from '@material-ui/core/TextField';
import EnbdDatePicker from '../src/EnbdInput/EnbdDatePicker'

function themed (children) {
  return (
    <div style={{ fontFamily: 'Roboto, sans-serif' }}>
      {children}
    </div>
  )
}

storiesOf('EnbdDatePicker', module)
  .add('normal with hint text', () => themed(
    <EnbdDatePicker
      hintText='Pick the Date'
      floatingLabelText='Pick the Date'
      style={{ width: 400 }}
    />
  ))
  .add('normal without floating label', () => themed(
    <EnbdDatePicker
      hintText='Pick the Date'
      style={{ width: 400 }}
    />
  ))
  .add('normal without any labels', () => themed(
    <EnbdDatePicker
      style={{ width: 400 }}
    />
  ))
  .add('disabled', () => themed(
    <EnbdDatePicker
      floatingLabelText='Pick the Date'
      value='password'
      disabled
      style={{ width: 400 }}
    />
  ))
  .add('controlled', () => themed(
    <EnbdDatePicker
      floatingLabelText='Pick the Date'
      value=''
      onChange={action('onChange')}
    />
  ))
  .add('fullWidth', () => themed(
    <EnbdDatePicker
      floatingLabelText='Pick the Date'
      fullWidth
    />
  ))