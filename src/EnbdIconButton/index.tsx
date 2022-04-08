import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { btnProperties } from './IconProperties';
import { getBtnDefaultProps } from './IconCustomThemeProvider';
import {
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';

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

export const EnbdIconButton: FC<Props> = ({ label, theme, size, backgroundColor, ...props }) => {
    return (
    <div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={getBtnDefaultProps(btnProperties)}>
            <Button variant="contained">{label}</Button>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
};