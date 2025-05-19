import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const SchoolCard = ({ school }) => {

  const navigate = useNavigate();

  const handleRequest = (school) => {
    navigate("/request", { state: school });
  };

  const handleStudents = (school) => {
    navigate("/schoolData", { state: school });
  };

  return (
    <Card sx={{ backgroundColor: 'whitesmoke', minHeight: 385,maxWidth:345 }}>
      <CardMedia
        component="img"
        alt={school.name}
        height="140"
        image={school.photo}
      />
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          {school.name}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {school.address}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => handleRequest(school)}
        >
          View Request
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => handleStudents(school)}
        >
          View Students
        </Button>
      </CardActions>
    </Card>
  );
};

export default SchoolCard;
