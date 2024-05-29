import Button from "../Elements/Button";
import { useLogin } from "../../hooks/useLogin";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const { total: totalPrice } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-between h-20 bg-blue-600 text-white items-center px-10">
      <div>
        <Link to="/">
          <h1 className="cursor-pointer text-2xl font-bold text-white-500 p-3 hover:text-orange-100 hover:bg-blue-400 rounded-md transition-all duration-150 ease-in-out">
            MELSTORE
          </h1>
        </Link>
      </div>
      <div className="flex">
        <Link
          to="/profile"
          className="text-white font-bold p-2 hover:bg-cyan-50 hover:text-blue-600 rounded-md transition-all duration-300 ease-in-out"
        >
          {username.toUpperCase()}
        </Link>
        <div className="flex items-center bg-gray-800 rounded-md mx-5 p-2 px-4 hover:bg-amber-500 transition-all duration-300 ease-in-out">
          <Link to="/products" className="text-white">
            Item: {totalCart} | price: $ {totalPrice}
          </Link>
        </div>
        <Button
          classname="bg-black px-10 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </Button>
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
