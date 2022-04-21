import React, { FC, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ToggleIcon from 'material-ui-toggle-icon';
import { makeStyles } from '@mui/material';

interface defaultProps {
  buttonDisabled: boolean;
  visible: boolean;
}
interface PaswordProps extends defaultProps {
  label: string;
  password: string;
  showPassword: boolean;
  startIcon: string;
  endIcon: string;
  propTypes: any;
  classes?: any;
  disabled: boolean;
}
const styles = {
  root: {},
  input: {},
  iconButton: {},
  icon: {},
};
const useStyles: any = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      '&:hover': {},
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 'auto',
      },
    },
    icon: {
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    iconButton: {
      color: 'inherit',
    },
    input: {
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
const PasswordField: FC<PaswordProps> = ({
  label,
  startIcon,
  endIcon,
  buttonDisabled,
  ...other
}) => {
  const [visible, setVisible] = useState(false);

  //   static getDerivedStateFromProps (nextProps, prevState) {
  //     if (nextProps.visible !== prevState.prevPropVisible) {
  //       return { visible: nextProps.visible, prevPropVisible: nextProps.visible }
  //     }
  //     return null
  //   }

  /**
   * Toogles the visibility the password.
   * @public
   */
  const toggleVisibility = () => {
    setVisible(visible != visible);
  };

  const handleButtonMouseDown = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  const classes = useStyles();
  return (
    <Input
      {...other}
      classes={{ root: classes.root, input: classes.input }}
      type={visible ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end" className={classes.adornment}>
          <IconButton
            className={classes.iconButton}
            onClick={toggleVisibility}
            onMouseDown={handleButtonMouseDown}
            disabled={other.disabled || buttonDisabled}
          >
            <ToggleIcon
              className={classes.icon}
              on={visible}
              onIcon={<Visibility />}
              offIcon={<VisibilityOff />}
            />
          </IconButton>
        </InputAdornment>
      }
    />
  );
};

PasswordField.defaultProps = {
  buttonDisabled: false,
  visible: false,
};

PasswordField.propTypes = {
  ...Input.propTypes,
  buttonDisabled: PropTypes.bool,
  visible: PropTypes.bool,
};

export default withStyles(styles)(PasswordField);
