import { Fragment } from "react";
import { useLogin } from "../hooks/useLogin";
import Navbar from "../components/Layouts/Navbar";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <Fragment>
      <Navbar />
      <div>
        <h1>ProfilePage</h1>
        <p>username : {username}</p>
      </div>
    </Fragment>
  );
};

export default ProfilePage;
