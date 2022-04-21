import React from 'react';
import { simpleInputProperties } from './properties';
import { getSimpleInputDefaultProps } from './EnbdSimpleInputTheme';
import {
  ThemeProvider,
  StyledEngineProvider,
  SxProps,
  Theme,
} from '@mui/material/styles';

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChangeEvent = React.ChangeEvent<InputElement>;

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  name?: string;
  multiline: boolean;
  rows: any;
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

const TextField = React.forwardRef<InputElement, TextFieldProps>(
  ({ onChange, ...rest }, ref) => {
    const [values, setValues] = React.useState<any>("");
  
    const handleChange =
      (prop: keyof TextFieldProps) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
      };
  
    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };
  
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
  
    return (
      <div>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={getSimpleInputDefaultProps(simpleInputProperties)}>
          <TextField label={''} value={''} onChange={function (val: string): void {
              throw new Error('Function not implemented.');
            } } multiline={false} rows={undefined}          
        />
          </ThemeProvider>
        </StyledEngineProvider>
      </div>
    );
  }
);

export default TextField;