
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import { customThemeProvider, EnbdButton } from 'app-sb';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

// customThemeProvider({ "btnColor": "green" })

const App = () => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <EnbdButton variant="contained" startIcon={<SendIcon/>} label='Send' />
        <EnbdButton variant="contained" endIcon={<DeleteIcon/>} label='Delete'/>
        <EnbdButton variant="contained" label='Revert' />
        <EnbdButton variant="outlined" label='Yes' />
        <EnbdButton variant="outlined" label='No' />
        <EnbdButton variant="outlined" label='Add' startIcon={<SendIcon/>}/>
      </Stack>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
