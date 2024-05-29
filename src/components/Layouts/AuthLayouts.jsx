import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-2xl  font-bold text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-6">
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="font-bold text-blue-500">
          Sign up
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        "Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-500">
          Log in
        </Link>
      </p>
    );
  }
};

export default AuthLayouts;
