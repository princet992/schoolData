import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { addStudent } from "../../features/schoolSlice/schoolSlice";

const SchoolData = () => {

  const dispatch = useDispatch();
  const { studentData } = useSelector((state) => state.school);
  const location = useLocation();
  const data = location.state;

  const acceptedStudent = studentData.filter(
    (student) => student.school === data?.name && student.request === "success"
  );

  const handleDel = (student) => {
    const newData = { ...student, request: "pending" };
    dispatch(addStudent(newData));
  };
  // console.log(acceptedStudent)
  // console.log(studentData)
  return (
    <div>

      {data && <h2 className="text-center my-4 font-semibold underline underline-offset-2">{data.name} - Student-Data</h2>}

      {acceptedStudent.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, maxWidth: 1000, margin: 'auto', borderRadius: '15px' }} aria-label="simple table">
            <TableHead >
              <TableRow sx={{ font: 700, }}>
                <TableCell sx={{ fontWeight: 'bold', border: '1px solid black', }}>Sr.No.</TableCell>
                <TableCell sx={{ fontWeight: 'bold', border: '1px solid black' }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 'bold', border: '1px solid black' }}>School</TableCell>
                <TableCell sx={{ fontWeight: 'bold', border: '1px solid black' }}>Phone</TableCell>
                <TableCell sx={{ fontWeight: 'bold', border: '1px solid black' }}>Class</TableCell>
                <TableCell sx={{ fontWeight: 'bold', border: '1px solid black' }}>Address</TableCell>
                <TableCell sx={{ fontWeight: 'bold', border: '1px solid black' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {acceptedStudent.map((student, index) => (
                <TableRow key={student.id}>
                  <TableCell sx={{ border: '1px solid black' }}>{index + 1}</TableCell>
                  <TableCell sx={{ border: '1px solid black' }}>{student.name}</TableCell>
                  <TableCell sx={{ border: '1px solid black' }}>{student.school}</TableCell>
                  <TableCell sx={{ border: '1px solid black' }}>{student.phone}</TableCell>
                  <TableCell sx={{ border: '1px solid black' }}>{student.class}</TableCell>
                  <TableCell sx={{ border: '1px solid black' }}>{student.address}</TableCell>
                  <TableCell sx={{ border: '1px solid black' }}>
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
