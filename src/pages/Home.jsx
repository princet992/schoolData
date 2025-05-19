import React from "react";
import { useSelector } from "react-redux";
import SchoolCard from "../components/school/SchoolCard";

const Home = () => {
  const { schoolData } = useSelector((state) => state.school);
  //   console.log(schoolData);
  return (
    <>
      <div className="grid grid-cols-3 justify-between items-center gap-5 p-10 flex-wrap">
        {schoolData?.map((school) => (
          <SchoolCard school={school} key={school.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
