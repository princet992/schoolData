import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header";
import SchoolForm from "./components/school/SchoolForm";
import StudentForm from "./components/student/StudentForm";
import Home from "./pages/Home";
import Request from "./components/school/Request";
import SchoolData from "./components/school/SchoolData";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import ProtectedRoute from "./components/Auth/ProtectedRoute";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />} >
          <Route path='/home' element={<Home />} />
        </Route>
        
        <Route path="/schoolForm" element={<SchoolForm />} />
        <Route path="/studentForm" element={<StudentForm />} />
        <Route path="/schoolData" element={<SchoolData />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </>
  );
}

export default App;
