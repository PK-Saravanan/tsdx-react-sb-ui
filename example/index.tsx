
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';

import {customThemeProvider, EnbdButton} from 'app-sb';

customThemeProvider({"btnColor":"green"})

const App = () => {
  return (
    <div>
      {/* <Thing /> */}
      <EnbdButton label='MUI Button' variant="contained" ></EnbdButton>
      {/* <EnbdButton label='MUI Button'></EnbdButton>
      <EnbdButton label='MUI Button' variant='outlined'></EnbdButton> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
