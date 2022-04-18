import React, { FC } from 'react';
import Button, { ButtonClasses, ButtonTypeMap } from '@mui/material/Button';
import { btnProperties } from './properties';
import { getBtnDefaultProps } from '../customThemeProvider';
import { ThemeProvider, StyledEngineProvider, SxProps, Theme } from '@mui/material/styles';


export interface iButtonProps extends ButtonTypeMap {
    /** Name of the button will be displayed */
    label: string;

    /**
     * The content of the component.
     */
    children?: React.ReactNode;
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ButtonClasses>;
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
     * If `true`, no elevation is used.
     * @default false
     */
    disableElevation?: boolean;
    /**
     * If `true`, the  keyboard focus ripple is disabled.
     * @default false
     */
    disableFocusRipple?: boolean;
    /**
     * Element placed after the children.
     */
    endIcon?: React.ReactNode;
    /**
     * If `true`, the button will take up the full width of its container.
     * @default false
     */
    fullWidth?: boolean;
    /**
     * The URL to link to when the button is clicked.
     * If defined, an `a` element will be used as the root node.
     */
    href?: string;
    /**
     * The size of the component.
     * `small` is equivalent to the dense button styling.
     * @default 'medium'
     */
    size?: any;
    /**
     * Element placed before the children.
     */
    startIcon?: React.ReactNode;
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
export const EnbdButton: FC<iButtonProps > = ({ label,startIcon,endIcon, ...rest }) => {
    return <div>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={getBtnDefaultProps(btnProperties)}>
                <Button {...rest} startIcon={startIcon} endIcon={endIcon} >
                    {label}
                </Button>
               
            </ThemeProvider>
        </StyledEngineProvider>
    </div>;
};

