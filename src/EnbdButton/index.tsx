import React, { FC } from 'react';
import Button from '@mui/material/Button';
import { btnProperties } from './properties'
import { getBtnDefaultProps } from '../customThemeProvider';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

export interface Props {
    /** Name of the button will be displayed */
    label: string;
    /** optional needs to be string --test*/
    variant?: string;
    /** Custom styles object */
    theme?: object;
     /** Custom styles theme */
    type?: string;
      /** Custom styles size */
    size?: string;
     /** Custom styles disabled */
    disabled?: string;
     /** Custom styles component */
    component?:string;
    /** Custom styles color */
    color ?: string;
    /** Custom styles fullWidth */
    fullWidth? :boolean;
}

/**
 * A custom MUI button component.
 */
export const EnbdButton: FC<Props> = ({ label }, props) => {

    return <div>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={getBtnDefaultProps(btnProperties)}>
                <Button {...props}>{label}</Button>
            </ThemeProvider>
        </StyledEngineProvider>
    </div>;
};
