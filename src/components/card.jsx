import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "../scss/card.scss";

/**
 * @description SimpleCard functional component to return Employee Card
 * @param props values Containing Employee data
 * @return Employee card component
 */
const SimpleCard = (props) => {
  const employee = props.employee;

  /**
   * @description handleEdit functional used to handle on click of edit button
   * @return props containing employeeData
   */
  const handleEdit = () => {
    props.editItem(props.employee);
  };

  /**
   * @description handleDelete functional used to handle on click of delete button
   * @return props containing employeeID
   */
  const handleDelete = () => {
    props.deleteItem(props.id);
  };

  return (
    <div className="root">
      <Card>
        <CardContent>
          {/* <Typography className="title" gutterBottom>
            objectId:{Employee.ObjectId} */}
          {/* </Typography> */}
          <Typography className="pos">
            {employee.firstName} (firstName)
          </Typography>
          <Typography className="pos">
            {employee.lastName} (lastName)
          </Typography>
          <Typography className="pos">{employee.emailId} (email)</Typography>
          <Typography className="pos">{employee.mobile} (mobile)</Typography>
          <Typography className="pos">
            {employee.designation} (jobTitle)
          </Typography>
          <Typography className="pos">{employee.company} (company)</Typography>
          <Typography className="pos">{employee.city} (location)</Typography>
          <Typography className="pos">{employee.salary} (salary)</Typography>
        </CardContent>
        <CardActions className="cardActions">
          <IconButton>
            <EditIcon onClick={handleEdit}></EditIcon>
            {/* <ListItemText primary='Edit' /> */}
          </IconButton>
          <IconButton>
            <DeleteIcon onClick={handleDelete}></DeleteIcon>
            {/* <ListItemText primary='Delete' /> */}
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default SimpleCard;
