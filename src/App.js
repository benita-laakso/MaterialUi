import React from 'react';
import MediaCard from './cards';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import InboxIcon from '@material-ui/icons/Inbox';
import EcoIcon from '@material-ui/icons/Eco';
import './App.css';
import './styles.css';

//Toolbar makes button small size and horisontal
//https://stackoverflow.com/questions/47686456/whats-the-right-way-to-float-right-or-left-using-the-material-ui-appbar-with-ma
const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography type="title" color="inherit" style={{ flex: 1 }}>
    Adventures
   </Typography>
        <Button variant="contained" color="primary" >
          Home
        </Button>

        <Button variant="contained" color="primary">
          Home
        </Button>
</Toolbar>
      </AppBar>


<MediaCard/>
    <Grid container direction="row" justify="space-evenly" alignItems="flex-start" className="footer" >

<div>
  <List component="nav" aria-label="main mailbox folders">
       <ListItem button>
         <ListItemIcon>
           <InboxIcon />
         </ListItemIcon>
         <ListItemText primary="Inbox" />
       </ListItem>
       <ListItem button>
         <ListItemIcon>
          <EcoIcon/>
         </ListItemIcon>
         <ListItemText primary="Eco" />
       </ListItem>
       <ListItem button>
         <ListItemIcon>
          <AcUnitIcon/>
         </ListItemIcon>
         <ListItemText primary="Acount" />
       </ListItem>
     </List>
</div>


    <form  direction="column">
      <TextField fullWidth="true"
      id="outlined-name"
      label="Firstname"
      margin="normal"
      variant="outlined"
    />
    <TextField fullWidth="true"
    id="outlined-name"
    label="Lastname"
    margin="normal"
    variant="outlined"
  />
<RadioGroup>
 <FormControlLabel value="female" control={<Radio />} label="Female" />
  <FormControlLabel value="male" control={<Radio />} label="Male" />
  <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
    <FormControlLabel control={ <Checkbox /> } label="I agree to the terms"/>
      <Button variant="contained" color="primary">
        Home
      </Button>
   </form>

    </Grid>
    </div>
  )
}

export default App;
