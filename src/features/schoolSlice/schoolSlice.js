import { createSlice } from "@reduxjs/toolkit";

const SchoolSlice = createSlice({
  name: "school",
  initialState: {
    schoolData: JSON.parse(localStorage.getItem("school")) || [],
    studentData: [],
  },
  reducers: {
    addSchools: (state, action) => {
      const existingSchool = state.schoolData.find(
        (school) => school.id === action.payload.id
      );
      if (existingSchool) {
        alert("this school is already registered");
      } else {
        state.schoolData.push(action.payload);
      }
    },
    removeSchool: (state, action) => {
      state.schoolData = state.schoolData.filter(
        (school) => school.id !== action.payload.id
      );
    },
    addStudent: (state, action) => {
      const existingStudent = state.studentData.find(
        (student) => student.id === action.payload.id
      );
      if (existingStudent) {
        state.studentData = state.studentData.map((student) =>
          student.id === action.payload.id
            ? { ...student, ...action.payload }
            : student
        );
      } else {
        state.studentData.push(action.payload);
      }
      localStorage.setItem("school", JSON.stringify(state.schoolData));
    },
    removeStudent: (state, action) => {
      state.studentData = state.studentData.filter(
        (student) => student.id !== action.payload
      );
    },
  },
});

export const { addSchools, addStudent, removeStudent, removeSchool } =
  SchoolSlice.actions;
export default SchoolSlice.reducer;
