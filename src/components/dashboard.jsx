import React from 'react';
import clsx from 'clsx';
import { Button } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import '../scss/dashboard.scss'
import Header from './dashboard/Header'
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  appBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  appBarShift: {
     width: `calc(100% - ${drawerWidth}px)`,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    // necessary for content to be below app bar
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    // transition: theme.transitions.create('margin', {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    // transition: theme.transitions.create('margin', {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
    marginLeft: 10,
  }

}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className='root'>
      <CssBaseline />
      <Header/>
      {/* <AppBar
        <Header />
      //  // position="fixed"
      //   className={clsx(classes.appBar, {
      //     [classes.appBarShift]: open,
      //   })}
      >
        <Toolbar className='toolbar'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Employee Payroll
          </Typography>    
          <Button className='logout' >Logout</Button>     
        </Toolbar>
      
      </AppBar> */}
      <Drawer
        className='drawer'
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className='drawerHeader'>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>         
            <ListItem button key="List">
              <ListItemIcon>{ <ListIcon /> }</ListItemIcon>
              <ListItemText primary="List" />
            </ListItem>
      
            <ListItem button key="Add">
              <ListItemIcon>{ <AddIcon /> }</ListItemIcon>
              <ListItemText primary="Add" />
            </ListItem>
          
            <ListItem button key='Edit'>
              <ListItemIcon>{ <EditIcon /> }</ListItemIcon>
              <ListItemText primary='Edit' />
            </ListItem>
          
            <ListItem button key='Delete'>
              <ListItemIcon>{ <DeleteIcon /> }</ListItemIcon>
              <ListItemText primary='Delete' />
            </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       
      </main>
    </div>
  );
}
