import { Fragment, useContext } from "react";
import { useLogin } from "../hooks/useLogin";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProfilePage = () => {
  const username = useLogin();
  const { isDarkMode } = useContext(DarkMode);

  return (
    <Fragment>
      <Navbar />
      <div
        className={`flex flex-col min-h-screen ${
          isDarkMode && "bg-slate-900 text-white"
        }`}
      >
        <h1>ProfilePage</h1>
        <p>username : {username}</p>
      </div>
    </Fragment>
  );
};

export default ProfilePage;
