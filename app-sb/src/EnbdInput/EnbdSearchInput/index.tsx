import { createStyles } from '@material-ui/core/styles';
import { makeStyles } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@material-ui/core/InputBase';
import { searchProperties } from './properties';
import { getSearchDefaultProps } from './EnbdSearchTheme';
import {
  ThemeProvider,
  StyledEngineProvider,
  SxProps,
  Theme,
} from '@mui/material/styles';
import React, { FC } from 'react';

export interface iSearchProps {
  /** Name of the Search Floating Label will be displayed */
  label: string;
  /**
   * Override or extend the styles applied to the component.
   */
  classes?: any;
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/customization/palette/#adding-new-colors).
   * @default 'primary'
   */
  color?: any;
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size?: any;
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx?: SxProps<Theme>;
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: any;
}

/**
 * A custom MUI button component.
 */

 const useStyles:any = makeStyles((theme: Theme) =>
 createStyles({
   search: {
     position: 'relative',
     borderRadius: theme.shape.borderRadius,
     '&:hover': {
       
     },
     marginLeft: 0,
     width: '100%',
     [theme.breakpoints.up('sm')]: {
       marginLeft: theme.spacing(1),
       width: 'auto',
     },
   },
   searchIcon: {
     padding: theme.spacing(0, 2),
     height: '100%',
     position: 'absolute',
     pointerEvents: 'none',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
   },
   inputRoot: {
     color: 'inherit',
   },
   inputInput: {
     padding: theme.spacing(1, 1, 1, 0),
     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
     transition: theme.transitions.create('width'),
     width: '100%',
     [theme.breakpoints.up('sm')]: {
       width: '12ch',
       '&:focus': {
         width: '20ch',
       },
     },
   },
 })
);

export const EnbdSearchField: FC<iSearchProps> = ({
  label,
  fullWidth,
  variant,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={getSearchDefaultProps(searchProperties)}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search ' }}
            />
          </div>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
};