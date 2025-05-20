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
import AdminRoute from "./components/Auth/AdminRoute";
import FormSuccess from "./pages/FormSuccess";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/studentForm" element={<StudentForm />} />
          <Route path="/formSuccess" element={<FormSuccess />} />
        </Route>
        <Route element={<AdminRoute />}>
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
