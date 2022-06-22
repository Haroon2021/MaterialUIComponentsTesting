import React from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import {makeStyles } from '@material-ui/core/styles'
import 'fontsource-roboto';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE688B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5 30px'
  }
})


function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel 
    control={<Checkbox
      checked={checked}
      icon = {<SaveIcon />}
      checkedIcon = {<SaveIcon /> }
      onChange={(e)=>setChecked(e.target.checked)}
      inputProps={{
        'aria-label': 'secondary checkbox'
      }}
    />}
    label="Testing Checkbox"
    />
  )
}

function App() {
  return (
  
      <div className="App">
        <header className="App-header">
          <Typography variant='h2'>
            Welcome to MUI
          </Typography>
          <Typography variant='subtitle1'>
            Learn how to use MUI
          </Typography>
          <ButtonStyled />
          <TextField
          variant='filled'
          color='secondary'
          // type = 'date'  // useful to create a date field with a drop down
          // type = 'time' // can set a time
          type='email'
          label="Email address"
          placeholder="test@testing.com"
          />
          <CheckboxExample />
          <ButtonGroup variant = "contained" color="primary">
            <Button 
            startIcon={<SaveIcon /> }
            >
              Save
            </Button>
            <Button 
            startIcon={<DeleteIcon />}

              >
              Discard
            </Button>
          </ButtonGroup>

          <img src={logo} className="App-logo" alt="logo" />

        </header>
      </div>
 
  );
}

export default App;
