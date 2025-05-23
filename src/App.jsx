import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import NavBar from "./components/ui/NavBar";
import Login from "./components/Auth/Login";

const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/UserProfile"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const SignUp = lazy(() => import("./components/Auth/SignUp"));
const FormSuccess = lazy(() => import("./pages/FormSuccess"));
const Request = lazy(() => import("./components/school/Request"));
const UserAccess = lazy(() => import("./components/ui/UserAccess"));
const SchoolData = lazy(() => import("./components/school/SchoolData"));
const SchoolForm = lazy(() => import("./components/school/SchoolForm"));
const StudentForm = lazy(() => import("./components/student/StudentForm"));
const ProtectedRoute = lazy(() => import("./components/Auth/ProtectedRoute"));

function App() {
  return (
    <>
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
