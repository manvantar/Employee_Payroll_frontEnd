import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../scss/card.scss'

export default function SimpleCard() {

    const Employee={
        ObjectId:"601212787dscsdsd",FirstName:"Manu",LastName:"KV",EmailId:"test@test.com",
        PhoneNumver:"9663393660",Company:"Infosys",Designation:"Jr Software Engineer",
        Salary:"10000",Location:"Bengaluru"} ;

  return (
    <Card className="root">
      <CardContent>
        <Typography className="title"  gutterBottom>
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
    </Card>
  );
}