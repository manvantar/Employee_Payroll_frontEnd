import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Controls from "../components/controls/Controls";
import { useForm, Form } from "../components/employeeForm/useForm";

const initialFValues = {
  firstName: "",
  lastName: "",
  emailId: "",
  mobile: "",
  city: "",
  salary: "",
  designation: "",
};

/**
 * @description Employee functional component to return Employee form Page
 * @param handlechange when the values changes in the form
 * @return Employee form page component
 */
export default function EmployeeForm(props) {
  const { addOrEdit, recordForEdit } = props;

  /**
  * @description Validates the form
  * @return Error if values have any error
  */
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("firstName" in fieldValues)
      temp.firstName = fieldValues.firstName ? "" : "This field is required.";
    if ("lastName" in fieldValues)
      temp.lastName = fieldValues.lastName ? "" : "This field is required.";
    if ("emailId" in fieldValues)
      temp.emailId = /$^|.+@.+..+/.test(fieldValues.emailId)
        ? ""
        : "Email is not valid.";
    if ("mobile" in fieldValues)
      temp.mobile =
        fieldValues.mobile.length >=9 ? "" : "Minimum 10 numbers required.";
    if ("salary" in fieldValues)
      temp.salary =
        fieldValues.salary.length > 3 ? "" : "Minimum 3 numbers required.";
    if ("company" in fieldValues)
      temp.company = fieldValues.company ? "" : "This field is required.";
    if ("city" in fieldValues)
      temp.city = fieldValues.city ? "" : "This field is required.";
    if ("designation" in fieldValues)
      temp.designation = fieldValues.designation
        ? ""
        : "This field is required.";

    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      let employeeData = {
        firstName: values.firstName,
        lastName: values.lastName,
        emailId: values.emailId,
        company: values.company,
        mobile: values.mobile,
        designation: values.designation,
        salary: values.salary,
        city: values.city,
      };
      addOrEdit(employeeData, resetForm);
    }
  };

  useEffect(() => {
    if (recordForEdit !== null)
      setValues({
        ...recordForEdit,
      });
  }, [recordForEdit]);

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="firstName"
            label="Full Name"
            value={values.firstName}
            onChange={handleInputChange}
            error={errors.firstName}
          />
          <Controls.Input
            name="lastName"
            label="Last Name"
            value={values.lastName}
            onChange={handleInputChange}
            error={errors.lastName}
          />
          <Controls.Input
            label="Email"
            name="emailId"
            value={values.emailId}
            onChange={handleInputChange}
            error={errors.emailId}
          />
          <Controls.Input
            label="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
            error={errors.mobile}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.Input
            label="City"
            name="city"
            value={values.city}
            onChange={handleInputChange}
          />
          <Controls.Input
            label="Salary"
            name="salary"
            value={values.salary}
            onChange={handleInputChange}
            error={errors.salary}
          />
          <Controls.Input
            name="company"
            label="Company-Name"
            value={values.company}
            onChange={handleInputChange}
            error={errors.company}
          />
          <Controls.Input
            name="designation"
            label="Designation"
            value={values.designation}
            onChange={handleInputChange}
            error={errors.designation}
          />
          <div>
            <Controls.Button type="submit" text="Submit" />
            <Controls.Button text="Reset" color="default" onClick={resetForm} />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}
