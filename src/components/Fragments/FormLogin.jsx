import { useEffect, useRef } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    login(data, (status, token) => {
      if (status) {
        localStorage.setItem("token", token);
        window.location.href = "/products";
      } else {
        window.location.href = "/login";
        return;
      }
    });
  };

  const usernameRef = useRef();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        placeholder="john"
        name="username"
        ref={usernameRef}
        value="johnd"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="*****"
        name="password"
        value="m38rmF$"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
