import React from "react";
import { useSelector } from "react-redux";
import SchoolCard from "../components/school/SchoolCard";


const Home = () => {

  const { schoolData } = useSelector((state) => state.school);
   const { theme } = useSelector((state) => state.Themes);
  
  return (
    <>
      <div className={`flex justify-center items-center gap-5 py-10 px-4 flex-wrap ${theme === 'dark' && 'bg-[#191a19]'}`}>
        {schoolData?.map((school) => (
          <SchoolCard school={school} key={school.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
