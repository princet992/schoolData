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
import { useLocation, useNavigate } from "react-router-dom";

import { addStudent } from "../../features/schoolSlice/schoolSlice";

const SchoolData = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.Themes);
  const { studentData } = useSelector((state) => state.school);
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const acceptedStudent = studentData.filter(
    (student) => student.school === data?.name && student.request === "success"
  );

  const handleDel = (student) => {
    const newData = { ...student, request: "pending" };
    dispatch(addStudent(newData));
  };

  return (
    <>
      <div
        className={`${
          theme === "dark" && "bg-[#191a19] text-[#fff]"
        } min-h-screen text-center `}
      >
        {data ? (
          <>
            <h2 className="text-center py-4 font-semibold underline underline-offset-2">
              {data.name} - Student-Data
            </h2>
            {acceptedStudent.length > 0 ? (
              <TableContainer component={Paper}>
                <Table
                  sx={{
                    minWidth: 650,
                    margin: "auto",
                    backgroundColor: theme === "light" ? "whitesmoke" : "gray",
                    color: theme === "light" ? "gray" : "white",
                  }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow sx={{ font: 700 }}>
                      <TableCell
                        sx={{ fontWeight: "bold", border: "1px solid black" }}
                      >
                        Sr.No.
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", border: "1px solid black" }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", border: "1px solid black" }}
                      >
                        School
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", border: "1px solid black" }}
                      >
                        Phone
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", border: "1px solid black" }}
                      >
                        Class
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", border: "1px solid black" }}
                      >
                        Address
                      </TableCell>
                      <TableCell
                        sx={{ fontWeight: "bold", border: "1px solid black" }}
                      >
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {acceptedStudent.map((student, index) => (
                      <TableRow key={student.id}>
                        <TableCell sx={{ border: "1px solid black" }}>
                          {index + 1}
                        </TableCell>
                        <TableCell sx={{ border: "1px solid black" }}>
                          {student.name}
                        </TableCell>
                        <TableCell sx={{ border: "1px solid black" }}>
                          {student.school}
                        </TableCell>
                        <TableCell sx={{ border: "1px solid black" }}>
                          {student.phone}
                        </TableCell>
                        <TableCell sx={{ border: "1px solid black" }}>
                          {student.class}
                        </TableCell>
                        <TableCell sx={{ border: "1px solid black" }}>
                          {student.address}
                        </TableCell>
                        <TableCell sx={{ border: "1px solid black" }}>
                          <Button
                            variant="contained"
                            size="small"
                            sx={{ fontSize: "10px" }}
                            onClick={() => handleDel(student)}
                          >
                            Remove
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
          </>
        ) : (
          <p>
            Go to{" "}
            <span
              onClick={() => navigate("/home")}
              className="font-bold text-[#00f] text-center py-3"
            >
              homepage
            </span>{" "}
            to view students
          </p>
        )}
        <Button
          variant="contained"
          color="success"
          sx={{ fontSize: "10px",mt:'10px' }}
          onClick={() => navigate("/home", { replace: true })}
        >
          Go Back
        </Button>
      </div>
    </>
  );
};

export default SchoolData;
