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
import EmployeeForm from "./EmployeeForm.jsx";
import Card from "./card.jsx";
import Popup from "./employeeForm/Popup";
import employeeService from "../services/employee";
import Notification from "./employeeForm/Notification";
import auth from "../services/auth";

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
  const [open, setOpen] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);
  const [employeeIdEdit, setIdForEdit] = useState(null);
  const [addoredit, setOperation] = useState("add");
  var [employeeRecords, setEmployeeRecords] = useState();
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

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
    auth.logout(() => {
      history.push("/login");
    });
  };

  /**
   * @description handle Lisy button, when its fetches the Employee data from Backend
   * @returns SnakBar with success or failure message
   */
  const handleList = () => {
    employeeService
      .getAllEmployees()
      .then((res) => {
        if (res.data.success === true) {
          setEmployeeRecords((employeeRecords = res.data.EmployeeData));
          setNotify({
            isOpen: true,
            message: res.data.message,
            type: "success",
          });
        } else {
          setNotify({
            isOpen: true,
            message: "Something went wrong",
            type: "error",
          });
        }
      })
      .catch((error) => {
        setNotify({
          isOpen: true,
          message: "Something went wrong " + error.message,
          type: "error",
        });
      });
  };

  /**
   * @description handle addorEdit request button, when we want to add Employee data Edit
   * @param employeedata and resetForm are Passed
   * @returns SnakBar with success or failure message
   */
  const addOrEdit = (employee, resetForm) => {
    setNotify({
      isOpen: true,
      message: "Submitted Successfully",
      type: "info",
    });
    if (addoredit === "add") {
      employeeService
        .insertEmployees(employee)
        .then((res) => {
          if (res.data.success === true) {
            setNotify({
              isOpen: true,
              message: res.data.message,
              type: "success",
            });
            handleList();
          } else {
            setNotify({
              isOpen: true,
              message: "Something went wrong",
              type: "error",
            });
          }
        })
        .catch((error) => {
          setNotify({
            isOpen: true,
            message: "Something went wrong " + error.message,
            type: "error",
          });
        });
    } else {
      const employeeUpdateData = {
        _id: employeeIdEdit,
        firstName: employee.firstName,
        lastName: employee.lastName,
        emailId: employee.emailId,
        company: employee.company,
        mobile: employee.mobile,
        designation: employee.designation,
        salary: employee.salary,
        city: employee.city,
      };
  
      employeeService
        .updateEmployee(employeeUpdateData)
        .then((res) => {
          if (res.data.success === true) {
            handleList();
            setNotify({
              isOpen: true,
              message: res.data.message,
              type: "success",
            });
          } else {
            setNotify({
              isOpen: true,
              message: "Something went wrong",
              type: "error",
            });
          }
        })
        .catch((error) => {
          setNotify({
            isOpen: true,
            message: "Something went wrong " + error.message,
            type: "error",
          });
        });
    }
    resetForm();
    setOperation("add");
    setRecordForEdit(null);
    setOpenPopup(false);
  };

  /**
   * @description handle Ondelete request button, when we want to Delete and Employee data
   * @param employeeId is passed to delete the Item
   * @returns SnakBar with success or failure message
   */
  const onDelete = (id) => {
    if (id) {
      employeeService
        .deleteEmployee(id)
        .then((res) => {
          if (res.data.success === true) {
            handleList();
            setNotify({
              isOpen: true,
              message: res.data.message,
              type: "success",
            });
          }
        })
        .catch((error) => {
          setNotify({
            isOpen: true,
            message: "Something went wrong " + error.message,
            type: "error",
          });
        });
    } else {
      setNotify({
        isOpen: true,
        message: "Something went wrong",
        type: "error",
      });
    }
  };

  /**
   * @description handle OnEdit request from card
   * @param employee data to Edit is Passed
   */
  const openInPopup = (item) => {
    setRecordForEdit(item);
    setIdForEdit(item._id);
    setOperation("edit");
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
                setOperation("add");
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
                    editItem={openInPopup}
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
      <Notification notify={notify} setNotify={setNotify} />
    </div>
  );
}
