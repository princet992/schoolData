import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Alert,
  Snackbar,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addStudent,
  removeStudent,
} from "../../features/schoolSlice/schoolSlice";
const Request = () => {
  const dispatch = useDispatch();
  const { studentData } = useSelector((state) => state.school);
  const location = useLocation();
  const data = location.state;
  const studentRequest = studentData?.filter(
    (student) => student.school === data.name && student.request === "pending"
  );
  console.log(studentData);
  const [alert, setalert] = useState({
    isOpen: false,
    message: "",
    severity: "",
  });

  const handleAccept = (student) => {
    const newData = {
      ...student,
      request: "success",
    };
    dispatch(addStudent(newData));
    setalert({
      isOpen: true,
      message: "request accepted successfully",
      severity: "success",
    });
  };
  const handleClose = () => {
    setalert({ ...alert, isOpen: false });
  };
  const handleReject = (Id) => {
    dispatch(removeStudent(Id));
    setalert({ isOpen: true, message: "request rejected", severity: "error" });
  };
  return (
    <div className="text-center my-3">
      <Snackbar
        open={alert.isOpen}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center", margin: "20px" }}
      >
        <Alert variant="filled" severity={alert.severity} onClick={handleClose}>
          {alert.message}
        </Alert>
      </Snackbar>

      {studentRequest?.length ? (
        studentRequest?.map((student) => (
          <Card
            sx={{
              maxWidth: 800,
              margin: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "whitesmoke",
            }}
            key={student.id}
          >
            <CardContent>
              <Typography variant="subtitle1">
                Request from <span>{student.name}</span>
              </Typography>
              <Typography variant="overline" color="text.secondary">
                {student.name} has requested to join your organization.
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="success"
                variant="contained"
                onClick={() => handleAccept(student)}
              >
                Accept
              </Button>
              <Button
                size="small"
                color="error"
                variant="contained"
                onClick={() => handleReject(student.id)}
              >
                Reject
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <p className="text-center text-[#f5073ff5] font-semibold">
          No Request at the moment
        </p>
      )}
    </div>
  );
};

export default Request;
