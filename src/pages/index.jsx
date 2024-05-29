import { Fragment, useContext } from "react";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const HomePage = () => {
  const { isDarkMode } = useContext(DarkMode);

  return (
    <Fragment>
      <Navbar />
      <div
        className={`flex flex-col min-h-screen justify-center items-center ${
          isDarkMode && "bg-slate-900 text-white"
        }`}
      >
        <div className="p-4 bg-zinc-400">HomePage</div>
      </div>
    </Fragment>
  );
};

export default HomePage;
