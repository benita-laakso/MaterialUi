import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "./App.css";
import "./styles.css";

import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

import Users from "./users";
import Contact from "./contact";
import Post from './post';
import Cards from "./cards";
import Footer from "./footer";

import dataexample from './dataexample';

//Toolbar makes button small size and horisontal
//https://stackoverflow.com/questions/47686456/whats-the-right-way-to-float-right-or-left-using-the-material-ui-appbar-with-ma
const App = ({match}) => {
  const posts = dataexample;
  return (
    <div>
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit" style={{ flex: 1 }}>
              Adventures
            </Typography>
            <nav>
              <Button variant="contained" color="primary">
                <Link to="/">Home</Link>
              </Button>

              <Button variant="contained" color="primary">
                <Link to="/users">Users</Link>
              </Button>

              <Button variant="contained" color="primary">
                <Link to="/contact">Contact</Link>
              </Button>

            </nav>
          </Toolbar>
        </AppBar>
        {/*Changing the content in the midle section*/}
        <Switch>
          <Route exact path="/" component={Cards} />
          <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} />
          {/*We are creating the component, render conects info from post component*/}
          <Route path={`/:postId`} render={ (props) => <Post data= {posts} {...props} />}/>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
