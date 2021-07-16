import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import '../scss/card.scss'

const SimpleCard = (props) => {

  const Employee = {
    ObjectId: "601212787dscsdsd", FirstName: "Manu", LastName: "KV", EmailId: "test@test.com",
    PhoneNumver: "9663393660", Company: "Infosys", Designation: "Jr Software Engineer",
    Salary: "10000", Location: "Bengaluru"
  };

  return (
    <div className="root">
      <Card >
        <CardContent>
          <Typography className="title" gutterBottom>
            objectId:{Employee.ObjectId}
          </Typography>
          <Typography className="pos">
            FirstName:{Employee.FirstName}
          </Typography>
          <Typography className="pos">
            LastName:{Employee.LastName}
          </Typography>
          <Typography className="pos">
            EmailId:{Employee.EmailId}
          </Typography>
          <Typography className="pos">
            Mobile:{Employee.PhoneNumver}
          </Typography>
          <Typography className="pos">
            JobTitle:{Employee.Designation}
          </Typography>
          <Typography className="pos">
            Company:{Employee.Company}
          </Typography>
          <Typography className="pos">
            Location:{Employee.Location}
          </Typography>
          <Typography className="pos">
            Salary:{Employee.Salary}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <EditIcon />
            {/* <ListItemText primary='Edit' /> */}
          </IconButton>
          <IconButton aria-label="share">
            <DeleteIcon />
            {/* <ListItemText primary='Delete' /> */}
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default SimpleCard;