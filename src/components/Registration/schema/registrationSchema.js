import * as Yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const nameRule = /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi;
export const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name Required !")
    .matches(nameRule, { message: "Invalid Name!" })
    .max(30, { message: "Name Max 30 !" }),
  email: Yup.string().email("Invalid Email!").required("Email Required !"),
  password: Yup.string()
    .matches(passwordRules, { message: "Please create a stronger password !" })
    .required("Password Required !"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm-Password Required !"),
});
