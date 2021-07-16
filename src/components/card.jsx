import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
// import ShareIcon from '@material-ui/icons/Share';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useHistory } from "react-router";
import '../scss/card.scss'

const SimpleCard = (props) => {
  const EmployeeData = props.EmployeeData

  const history = useHistory();
  const handleEdit=()=>{
      return "";
  };
  const handleDelete=()=>{
  //  console.log(listItems);
  };

  return EmployeeData.map((employee)=>
    <div className="root">
      <Card >
        <CardContent>
          {/* <Typography className="title" gutterBottom>
            objectId:{Employee.ObjectId} */}
          {/* </Typography> */}
          <Typography className="pos">
            {employee.FirstName} <a>(firstName) </a>
          </Typography>
          <Typography className="pos">
            {employee.LastName}(lastName)
          </Typography>
          <Typography className="pos">
            {employee.EmailId}(email)
          </Typography>
          <Typography className="pos">
            {employee.PhoneNumber}(mobile)
          </Typography>
          <Typography className="pos">
            {employee.Designation}(jobTitle)
          </Typography>
          <Typography className="pos">
            {employee.Company}(company)
          </Typography>
          <Typography className="pos">
            {employee.Location}(location)
          </Typography>
          <Typography className="pos">
            {employee.Salary}(salary)
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <EditIcon onClick={handleEdit}></EditIcon>
            {/* <ListItemText primary='Edit' /> */}
          </IconButton>
          <IconButton aria-label="share">
            <DeleteIcon onClick={handleDelete}></DeleteIcon>
            {/* <ListItemText primary='Delete' /> */}
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default SimpleCard;