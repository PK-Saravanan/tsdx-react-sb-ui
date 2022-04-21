import React, { FC } from 'react';
import moment from 'moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

interface DateProps {
  firstDayOfWeek: string;
  daysArray: [string];
  disableToolbar: boolean;
  variant: string;
  format: string;
  margin: string;
  label: string;
  value: string;
  autoOk: boolean;
}
moment.updateLocale('en', {
  week: {
    dow: 1,
  },
});

const localeData = moment.localeData();
console.log(localeData.week);

 const EnbdDatePicker: FC<DateProps> = () => {
  return (
    <div className="App">
      <h1>Date Picker!</h1>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <KeyboardDatePicker
          firstDayOfWeek={1}
          daysArray={['M', 'T', 'W', 'T', 'F', 'S', 'S']}
          disableToolbar
          variant="inline"
          format="dd.MM.yyyy"
          margin="normal"
          label={`Weight Slip Date`}
          value={null}
          autoOk={true}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}
export default EnbdDatePicker