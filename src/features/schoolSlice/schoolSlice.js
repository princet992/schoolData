import { createSlice } from "@reduxjs/toolkit";

const SchoolSlice = createSlice({
  name: "school",
  initialState: {
    schoolData: [],
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
    },
    removeStudent: (state, action) => {},
  },
});

export const { addSchools, addStudent, removeStudent } = SchoolSlice.actions;
export default SchoolSlice.reducer;
