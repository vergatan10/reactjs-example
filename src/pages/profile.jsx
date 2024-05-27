import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  if (!username) window.location.href = "/login";
  return (
    <div>
      <h1>ProfilePage</h1>
      <p>username : {username}</p>
    </div>
  );
};

export default ProfilePage;
