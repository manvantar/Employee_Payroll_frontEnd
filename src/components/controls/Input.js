import React from "react";
import { TextField } from "@material-ui/core";


/**
 * @description functional component to return TextField
 * @param props with name, label, value, error and onChange
 * @return material Ui TextField
 */
export default function Input(props) {
  const { name, label, value, error = null, onChange, ...other } = props;
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { error: true, helperText: error })}
    />
  );
}
