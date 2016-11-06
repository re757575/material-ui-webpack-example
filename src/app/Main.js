import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const styles = {
  appBar: {
    position: 'fixed',
    top: 0,
  },
};

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Refresh" />
    <MenuItem primaryText="Help" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {drawerOpen: false};
  }

  handleDrawerToggle = () => {
    this.setState({drawerOpen: !this.state.drawerOpen});
  };

  handleDrawerClose = () => {
    this.setState({drawerOpen: false});
  };

  render() {
    return (
      <div>
        <AppBar
          title="Title"
          style={styles.appBar}
          iconElementRight={<Logged />}
          onLeftIconButtonTouchTap={this.handleDrawerToggle}
        />
        <Drawer
          docked={false}
          width={250}
          open={this.state.drawerOpen}
          onRequestChange={(drawerOpen) => this.setState({drawerOpen})}
        >
          <MenuItem onTouchTap={this.handleDrawerClose}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.handleDrawerClose}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}


export default Main;
