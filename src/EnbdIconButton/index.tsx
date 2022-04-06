import React, { FC, MouseEventHandler } from 'react';
import Button from '@mui/material/Button';
import { deepmerge } from '@mui/utils';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  createTheme,
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
  /** Button type declaration */  
  primary?: boolean;
  /** Button disable action */
  disabled?: boolean;
  /** Button size selection */
  size?: 'small' | 'medium' | 'large';
  /** On Click mouse event */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
            root: {
                fontSize: '1rem',
                color: 'Black',
                backgroundColor: '#ff9800',
                textTransform: 'none',
                fontWeight: 700,
                '&:hover': {
                    backgroundColor: '#ff9800'
                }

            },
        },
        defaultProps: {
          startIcon: <SearchIcon />,
          disableElevation: true,
          disableFocusRipple: true,
          disableRipple: true,
          endIcon: <ChevronRightIcon />,
        },
      },
    },
  });

const getDeepMergeObj = (themeObj: any) => {
  return createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            ...themeObj,
          },
        },
      },
    },
  });
};

/**
 * A custom MUI Icon button component.
 */

export const EnbdIconButton: FC<Props> = ({ label, theme, primary = false,size = 'medium',backgroundColor,...props }) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
    <div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={deepmerge(CustomTheme, getDeepMergeObj(theme))}>
          <Button variant="contained" className={['storybook-button', `storybook-button--${size}`, mode].join(' ')} style={{ backgroundColor }}>{label}</Button>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
};
