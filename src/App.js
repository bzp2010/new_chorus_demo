import React, { Component } from 'react';
import {Route, Switch, Redirect} from 'react-router';
import {HashRouter, Link} from "react-router-dom";
import './App.css';
import './themes/base/sass/base.scss'
import { Icon } from '@material-ui/core';
import AppBar from "./components/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import {Search as SearchIcon, Inbox as InboxIcon, Mail as MailIcon} from '@material-ui/icons';
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NavBar from "./components/NavBar";

const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
      <h2>About</h2>
    </div>
);

const Product = () => (
    <div>
      <h2>Product</h2>
    </div>
);

class App extends Component {

  render() {
    return (
        <div>
          <AppBar/>

          <Drawer
              variant="permanent"
              style={{paddingTop: 54}}
          >
            <List>
              {['Music', 'Movie', 'TV Shows'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {['Browser', 'Add-ons', 'Thumbs up', 'Playlists', 'Settings', 'Help'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
              ))}
            </List>
          </Drawer>
          {/*<NavBar/>*/}


          <HashRouter>
            <Link to={'/b'}>About</Link>
            <Switch>
              <Route exact path='/'>
                <Redirect to="/a" />
              </Route>
              <Route exact path='/a' component={Home}/>
              <Route exact path='/b' component={About}/>
              <Route exact path='/c' component={Product}/>
            </Switch>
          </HashRouter>
        </div>
    );
  }
}

export default App;