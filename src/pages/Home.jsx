import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SchoolCard from "../components/school/SchoolCard";
import { Button } from "@mui/material";
import { adminLogOut } from "../features/AuthSlice/AuthSlice";

const Home = () => {
  
  const dispatch = useDispatch();
  const { schoolData } = useSelector((state) => state.school);
  const { userLogin, isAdmin } = useSelector((state) => state.Auth);

  const handleLogOut = () => {
    dispatch(adminLogOut());
  };
  return (
    <>
      {isAdmin && (
        <div className="flex justify-end gap-3 items-center p-10">
          <p>
            Welcome <span className="font-semibold">{userLogin?.name}</span>
          </p>
          <Button
            variant="contained"
            sx={{ fontSize: "10px" }}
            onClick={handleLogOut}
          >
            LogOut
          </Button>
        </div>
      )}

      <div className="flex justify-between items-center gap-5 p-10 flex-wrap">
        {schoolData?.map((school) => (
          <SchoolCard school={school} key={school.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
