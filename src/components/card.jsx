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
      <Card data-testid="Card" className="Card">
        <CardContent className="CardContent" data-testid="CardContent">
          <Typography data-testid="FirstName" variant="h7" className="item">
            {employee.firstName}{" "}<br/>
            <Typography className="name">(firstName)</Typography>
          </Typography>
          <Typography  data-testid="LastName" variant="h7" className="item">
            {employee.lastName}{" "}
            <Typography className="name">(lastName)</Typography>
          </Typography>
          <Typography data-testid="email" variant="h7" className="item">
            {employee.emailId} <Typography className="name">(email)</Typography>
          </Typography>
          <Typography data-testid="mobile" variant="h7" className="item">
            {employee.mobile} <Typography className="name">(mobile)</Typography>
          </Typography>
          <Typography data-testid="jobTitle" variant="h7" className="item">
            {employee.designation}{" "}
            <Typography className="name"> (jobTitle)</Typography>
          </Typography>
          <Typography  data-testid="company" variant="h7" className="item">
            {employee.company}{" "}
            <Typography className="name"> (company)</Typography>
          </Typography>
          <Typography data-testid="location" variant="h7" className="item">
            {employee.city} <Typography className="name">(location)</Typography>
          </Typography>
          <Typography data-testid="salary" variant="h7" className="item">
            {employee.salary} <Typography className="name">(salary)</Typography>
          </Typography>
        </CardContent>
        <CardActions className="cardActions">
          <IconButton>
            <EditIcon data-testid="editIcon" color="primary" onClick={handleEdit}></EditIcon>
          </IconButton>
          <IconButton>
            <DeleteIcon data-testid="deleteIcon" color="secondary"
              onClick={handleDelete}
            ></DeleteIcon>
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default SimpleCard;
