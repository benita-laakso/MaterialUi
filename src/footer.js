import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core/';
import {Grid, TextField, RadioGroup, FormControlLabel, Button, Radio, Checkbox} from '@material-ui/core/';

import AcUnitIcon from '@material-ui/icons/AcUnit';
import InboxIcon from '@material-ui/icons/Inbox';
import EcoIcon from '@material-ui/icons/Eco';

const Footer =()=>{
  return (
    <Grid container direction="row" justify="space-evenly" alignItems="flex-start" className="footer" >

<div>
  <List component="nav" aria-label="main mailbox folders">
       <ListItem button>
         <ListItemIcon>
             <InboxIcon />
         </ListItemIcon>
         <ListItemText primary="Inbox"/>
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
  )
}

export default Footer;
