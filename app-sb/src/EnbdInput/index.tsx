import React, { FC } from 'react';
import { inputProperties } from './properties';
import { getInputDefaultProps } from '../customThemeProvider';
import { EnbdStyledEngineProvider } from '../EnbdStyledEngineProvider';
import { BasicInput } from './basicInput'

export interface Props {
    type?: any;
}

/**
 * A custom MUI input component.
 */
export const EnbdInput: FC<Props> = ({type}) => {
    return <div>
        <EnbdStyledEngineProvider theme={getInputDefaultProps(inputProperties)}>
            {(() => {
                console.log("typeofComponent",type)
                switch (type) {
                    case 'basic': return <BasicInput></BasicInput>
                    case 'password': return <></>
                    case 'number': return <></>
                    case 'calender': return <></>
                    default: return <>hi</>
                }
            })()}
        </EnbdStyledEngineProvider>

    </div>;
};


