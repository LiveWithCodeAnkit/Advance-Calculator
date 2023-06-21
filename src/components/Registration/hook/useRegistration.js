import { registrationSchema } from "../schema/registrationSchema";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const useRegistration = () => {
  const navigate = useNavigate();
  const params = useParams();

  const dataBase = JSON.parse(localStorage.getItem("UserRegister"));
  let registrationInfo;
  if (params.id) {
    registrationInfo = dataBase.find((data) => data.id === params.id);
  }

  const initialValues = {
    id: registrationInfo
      ? registrationInfo.id
      : new Date().getTime().toString(),
    name: registrationInfo ? registrationInfo.name : "",
    email: registrationInfo ? registrationInfo.email : "",
    password: registrationInfo ? registrationInfo.password : "",
    passwordConfirmation: registrationInfo
      ? registrationInfo.passwordConfirmation
      : "",
  };

  const handleRegistration = (values, { resetForm }) => {
    if (params.id) {
      const storedData = localStorage.getItem("UserRegister");
      const storedInfo = storedData ? JSON.parse(storedData) : [];

      const updatedInfo = storedInfo.map((entry) => {
        if (entry.id === params.id) {
          return { id: entry.id, ...values };
        }
        return entry;
      });

      localStorage.setItem("UserRegister", JSON.stringify(updatedInfo));
      resetForm();
      navigate("/action");
    } else {
      const storedData = localStorage.getItem("UserRegister");
      const storedInfo = storedData ? JSON.parse(storedData) : [];
      const registrationEntry = {
        id: new Date().getTime().toString(),
        ...values,
      };

      const updatedInfo = [...storedInfo, registrationEntry];
      localStorage.setItem("UserRegister", JSON.stringify(updatedInfo));
      resetForm();
      navigate("/login");
    }
  };

  return {
    initialValues,
    handleSubmit: handleRegistration,
    schema: registrationSchema,
  };
};
