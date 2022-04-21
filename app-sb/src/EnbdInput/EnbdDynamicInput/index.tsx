import React from 'react';
import { Grid, TextField, Card, CardContent } from '@material-ui/core';
import { inputFormElements } from './formElements'

export default function EnbdDynamicInput() {
  return (
    <div className='App'>
      <Grid style={{ padding: "80px 5px 0 5px" }}>
        <Card style={{ maxWidth: 600, margin: "0 auto" }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                {
                  inputFormElements.slice(0, 4).map(input => <Grid xs={input.xs} sm={input.sm} item>
                    <TextField {...input} />
                  </Grid>)
                }
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}