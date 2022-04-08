import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { btnProperties } from './LeadingIconProperties';
import { getBtnDefaultProps } from './LeadingIconCustomThemeProvider';
import {
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import './index.css'
export interface Props {
  /** Name of the button will be displayed */
  label: string;
  /** optional needs to be string --test*/
  variant?: string;
  /** Custom styles object */
  theme?: object;
    /** Choose Background color */
  backgroundColor?: string; 
  /** Button disable action */
  disabled?: boolean;
  /** Button size selection */
  size?: 'small' | 'medium' | 'large';
}

/**
 * A custom MUI Icon button component.
 */

export const EnbdLeadingIconButton: FC<Props> = ({ label, theme, size = 'medium', backgroundColor, ...props }) => {
    return (
    <div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={getBtnDefaultProps(btnProperties)}>
          <Button variant="contained" className={['storybook-button', `storybook-button--${size}`].join(' ')} style={{ backgroundColor }}>{label}</Button>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
};
