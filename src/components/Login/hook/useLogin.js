import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../schema/loginSchema";

export const useLogin = () => {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const initialValues = {
    email: "",
    password: "",
  };

  const handleLogin = (values, { resetForm }) => {
    const loggedUser = { ...values };

    const dataBase = JSON.parse(localStorage.getItem("UserRegister"));

    const validUser = dataBase.find(
      (record) =>
        record.email === loggedUser.email &&
        record.password === loggedUser.password
    );

    if (validUser !== undefined) {
      setLoginInfo((prevLoginInfo) => ({ ...prevLoginInfo, ...validUser }));
      localStorage.setItem("UserLogin", JSON.stringify(validUser));
      localStorage.setItem("Authenticate", "true");
      navigate("/loggedUser");
    } else {
      alert("Invalid Id PassWord");
    }

    resetForm();
  };

  return { initialValues, handleLogin, loginInfo, loginSchema };
};
