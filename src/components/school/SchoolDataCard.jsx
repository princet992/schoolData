import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SchoolDataCard = ({ school }) => {
  const { theme } = useSelector((state) => state.Themes);
  const navigate = useNavigate();

  const handleRequest = (school) => {
    navigate("/request", { state: school });
  };

  const handleStudents = (school) => {
    navigate("/schoolData", { state: school });
  };
  return (
    <div
      className={`max-w-[20rem] min-h-[22rem] rounded-lg p-3 ${
        theme === "light" ? "bg-[#f1f1f1]" : "bg-[#000]"
      }`}
    >
      <img
        src={school?.photo}
        alt={school?.name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />
      <div className="h-28">
        <h2 className="font-semibold ">{school?.name}</h2>
        <h2 className="my-2 text-sm">{school?.address}</h2>
      </div>
      <div className="flex items-center gap-5">
        <button
          className={`px-3 py-1 rounded-lg ${
            theme === "light" ? "bg-[#6e996a]" : "bg-[#383832]"
          } text-sm font-semibold my-2`}
          onClick={() => handleRequest(school)}
        >
          View Request
        </button>
        <button
          className={`px-3 py-1 rounded-lg ${
            theme === "light" ? "bg-[#6e996a]" : "bg-[#383832]"
          } text-sm font-semibold my-2`}
          onClick={() => handleStudents(school)}
        >
          View Students
        </button>
      </div>
    </div>
  );
};

export default SchoolDataCard;
