import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email!").required("Email Required !"),
  password: Yup.string().required("Password Required !"),
});
