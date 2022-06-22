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
import {  Typography } from '@material-ui/core';
// import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
 import MenuIcon from '@material-ui/core/Menu'

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
          <AppBar color="secondary">
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant = 'h6'>
                MUI Theming
              </Typography>
              <Button>
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Typography variant='h2' component='div'>
            Welcome to MUI
          </Typography>
          <Typography variant='subtitle1'>
            Learn how to use MUI
          </Typography>
          <ButtonStyled />

          <Grid container spacing = {9} justify='center'>
            <Grid item xs={3} sm={6}>
              <Paper style = {{height: 75, width: '100%', }} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style = {{height: 75, width: '100%', }} />
            </Grid>
            <Grid item xs={3} sm={6}>
              <Paper style = {{height: 75, wwidth: '100%', }} />
            </Grid>
            
            
            </Grid>
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
