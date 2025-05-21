import React, { useEffect, useState } from "react";

const UserAccess = () => {
  // const [isLoading, setisLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setisLoading(false);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className="grid place-items-center h-[calc(100vh-62px)]">
      {/* <h2 className="my-5 font-semibold">Access Denied</h2> */}
      <img src="error.gif" alt="access-denied" className="w-[80vw] mx-auto rounded-xl" />
    </div>
  );
};

export default UserAccess;
