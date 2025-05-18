import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { addStudent } from "../../features/schoolSlice/schoolSlice";

const SchoolData = () => {
  const dispatch = useDispatch();
  const { studentData } = useSelector((state) => state.school);
  const location = useLocation();
  const data = location.state;

  const acceptedStudent = studentData.filter(
    (student) => student.school === data.name && student.request === "success"
  );
  const handleDel = (student) => {
    const newData = {
      ...student,
      request: "pending",
    };
    dispatch(addStudent(newData));
  };
  return (
    <div>
      {acceptedStudent.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow className="font-bold">
                <TableCell>Sr.No.</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>School</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentData.map((student, index) => (
                <TableRow key={student.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.school}</TableCell>
                  <TableCell>{student.phone}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.address}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => handleDel(student)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p className="text-center text-[#f5073ff5] font-semibold py-5">
          No students to display
        </p>
      )}
    </div>
  );
};

export default SchoolData;
