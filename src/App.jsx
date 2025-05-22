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
import ErrorPage from "./pages/ErrorPage";
import FormSuccess from "./pages/FormSuccess";
import UserAccess from "./components/ui/UserAccess";
import NavBar from "./components/ui/NavBar";
import Profile from "./pages/UserProfile";

function App() {
  return (
    <>
      {/* <Header /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/studentForm" element={<StudentForm />} />
          <Route path="/formSuccess" element={<FormSuccess />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/userAccess" element={<UserAccess />} />
        </Route>

        <Route element={<ProtectedRoute role={["admin"]} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/schoolForm" element={<SchoolForm />} />
          <Route path="/schoolData" element={<SchoolData />} />
          <Route path="/request" element={<Request />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
