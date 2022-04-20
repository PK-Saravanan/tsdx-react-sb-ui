import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';


export interface Props extends HTMLAttributes<HTMLDivElement> {
    /** custom content, defaults to 'the snozzberries taste like snozzberries' */
    children?: ReactChild;
    theme?:any;
  }

export const EnbdStyledEngineProvider: FC<Props> = ({ children, theme }) => {
    return <div>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    </div>;
};