import React, { FC } from 'react';
import TextField from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';

export interface Props {
id?:string;
label?:string;
helperText?:string;
variant?:string;
}

/**
 * A custom MUI Input component.
 */
export const InputIconLeading: FC<Props> = () => {
    return <div>
        <TextField
        error = {true}
        id="input-with-icon-textfield"
        label="Username"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="filled"
        helperText="Incorrect username"
      />

    </div>;
};