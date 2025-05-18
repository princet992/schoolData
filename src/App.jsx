import { Route, Routes } from "react-router-dom";
import Header from "./components/ui/Header";
import SchoolForm from "./components/school/SchoolForm";
import StudentForm from "./components/student/StudentForm";
import Home from "./pages/Home";
import Request from "./components/school/Request";
import SchoolData from "./components/school/SchoolData";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schoolForm" element={<SchoolForm />} />
        <Route path="/schoolData" element={<SchoolData />} />
        <Route path="/request" element={<Request />} />
        <Route path="/studentForm" element={<StudentForm />} />
      </Routes>
    </>
  );
}

export default App;
