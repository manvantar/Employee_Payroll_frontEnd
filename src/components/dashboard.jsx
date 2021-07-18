import React, { useState } from "react";
import clsx from "clsx";
import { Button } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import ListIcon from "@material-ui/icons/List";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "../scss/dashboard.scss";
import { Grid, Badge } from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import { useHistory } from "react-router";
import employee from "../services/employee";
import EmployeeForm from "../pages/EmployeeForm.jsx";
import Card from "./card.jsx";
import Popup from "./employeeForm/Popup";
import * as employeeService from "../services/employeeService";
import employeeService2 from "../services/employee";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#c0c0c0",
    display: "flex",
    alignItems: "left",
    justifyContent: "flex-end",
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    display: "flex",
    marginTop: 60,
    alignItems: "center",
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 20,
  },
  contentShift: {
    display: "flex",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 240,
  },
}));

/**
 * @description dashboard functional component with sideNavigation bar and Header
 * @return sideNavigation bar and Header
 */

export default function PersistentDrawerLeft() {
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  //const [records, setRecords] = useState(employeeService.getAllEmployees())
  var [employeeRecords, setEmployeeRecords] = useState();
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  //const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
  // var EmployeeData;

  /**
   * @description handle drawerOpen, when its called sets setOPen variable to true
   */
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  /**
   * @description handle drawerClose, when its called sets setOPen variable to false
   */
  const handleDrawerClose = () => {
    setOpen(false);
  };

  /**
   * @description handle Logout button, when its called- clears Local storage and pushes the page to Login
   */
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  /**
   * @description handle Lisy button, when its fetches the Employee data from Backend
   */
  const handleList = () => {
    employee
      .getAllEmployees()
      .then((res) => {
        if (res.data.success === true) {
          setEmployeeRecords((employeeRecords = res.data.EmployeeData));
        } else {
          alert("Something went wrong");
        }
      })
      .catch((error) => {
        alert("Something went wrong " + error.message);
      });
  };
  //handleList();

  const addOrEdit = (employee, resetForm) => {
    //console.log(employee);
    if (employee.id === 0) {
      let employeeAddData = {
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId,
        company: employee.company,
        mobile: employee.mobile,
        designation: employee.designation,
        salary: employee.salary,
        city: employee.city,
      };
      employeeService2
        .insertEmployees(employeeAddData)
        .then((res) => {
          if (res.data.success === true) {
            handleList();
            alert(res.data.message);
          } else {
            alert("Something went wrong");
          }
        })
        .catch((error) => {
          alert("Something went wrong " + error.message);
        });
    } else employeeService.updateEmployee(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setNotify({
      isOpen: true,
      message: "Submitted Successfully",
      type: "success",
    });
  };

  const onDelete = (id) => {
    if (id) {
      employeeService2.deleteEmployee(id).then((res) => {
        if (res.data.success === true) {
          handleList();
          alert(res.data.message);
        }
      });
    } else {
      alert("Something went wrong");
    }
  };

  const onEdit = (employee) => {
    console.log(employee);
  };
  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
  };

  return (
    <div className="">
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx("Header", classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h8" className="heading">
            EMPLOYEE PAYROLL
          </Typography>
          <Grid container alignItems="center">
            <Grid item sm></Grid>
            <Grid item>
              <IconButton>
                <Badge badgeContent={1} variant="sharp" color="secondary">
                  <NotificationsNoneIcon fontSize="small" />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={1} variant="sharp" color="primary">
                  <ChatBubbleOutlineIcon fontSize="small" />
                </Badge>
              </IconButton>
              <Button
                variant="contained"
                type="submit"
                onClick={handleLogout}
                color="primary"
              >
                logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Drawer
        className="drawer"
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className="drawerHeader">
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button key="List">
            <ListItemIcon>{<ListIcon />}</ListItemIcon>
            <ListItemText type="submit" onClick={handleList} primary="List" />
          </ListItem>

          <ListItem button key="Add">
            <ListItemIcon>{<AddIcon />}</ListItemIcon>
            <ListItemText
              onClick={() => {
                setOpenPopup(true);
                setRecordForEdit(null);
              }}
              primary="Add"
            />
          </ListItem>

          <ListItem button key="Edit">
            <ListItemIcon>{<EditIcon />}</ListItemIcon>
            <ListItemText primary="Edit" />
          </ListItem>

          <ListItem button key="Delete">
            <ListItemIcon>{<DeleteIcon />}</ListItemIcon>
            <ListItemText primary="Delete" />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Grid
          container
          direction="row"
          justifyContent="left"
          alignItems="center"
        >
          {employeeRecords
            ? employeeRecords.map((employee) => {
                return (
                  <Card
                    id={employee._id}
                    employee={employee}
                    deleteItem={onDelete}
                    editItem={onEdit}
                  />
                );
              })
            : null}
        </Grid>
      </main>
      <Popup
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm recordForEdit={recordForEdit} addOrEdit={addOrEdit} />
      </Popup>
    </div>
  );
}
