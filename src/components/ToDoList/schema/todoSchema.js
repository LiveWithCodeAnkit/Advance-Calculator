import * as Yup from "yup";
export const todoSchema = Yup.object().shape({
  todo: Yup.string()
    .min(2, "Must be 2 characters minimum")
    .required("To-do is required"),
});
