import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root :{
    buttons: {
      marginRight : "12rem"
  }}
  
}));

export function Navbar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  className = {classes.NavbarContainer} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Esat Yasar
          </Typography>
          <div className={{ root: classes.buttons}}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Resume</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Skills</Button>
            <Button color="inherit">Blog</Button>
            <Button color="inherit">Contacts</Button>
          </div>
          <MenuIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
