import React from "react";
import { Snackbar, makeStyles } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    top: theme.spacing(9),
  },
}));

/**
 * @description functional component to return SnackBar
 * @param props having message and type and boolean value
 * @return Snackbar with message
*/
export default function Notification(props) {
  const { notify, setNotify } = props;
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setNotify({
      ...notify,
      isOpen: false,
    });
  };

  return (
    <Snackbar
      className={classes.root}
      open={notify.isOpen}
      autoHideDuration={2000}
      anchorOrigin={{ vertical: "top", horizontal: "center"  }}
      onClose={handleClose}
    >
     <Alert severity={notify.type} variant="filled" onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
}
