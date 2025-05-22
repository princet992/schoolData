import { useSelector } from "react-redux";


const Profile = () => {
  const { isAuthenticate, userLogin } = useSelector((state) => state.Auth);
  const { theme } = useSelector((state) => state.Themes);
  return (
    <>
      <div
        className={`min-h-screen p-2 sm:p-5 ${
          theme === "dark" && "bg-[#191a19] text-[#fff]"
        }`}
      >
        <h2 className="sm:text-xl font-semibold  ">Profile Summary</h2>
        <h2 className="text-sm sm:text-xl py-1">
          UserName:
          <span className="font-semibold text-[#1660eb] ms-2">
            {userLogin?.name}
          </span>
        </h2>
        <h2 className="text-sm sm:text-xl py-1">
          Email Id:
          <span className="font-semibold text-[#1660eb] ms-2">
            {userLogin?.email}
          </span>
        </h2>
      </div>
    </>
  );
};

export default Profile;
