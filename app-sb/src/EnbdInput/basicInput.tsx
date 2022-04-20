import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
export interface Props {

}
/**
 * A custom MUI Input component.
 */
export const BasicInput: FC<Props> = () => {
    return <div>
        <TextField
            id="filled-helperText"
            label="Username"
            helperText="Enter only albabets"
            variant="filled"
        />

    </div>;
};