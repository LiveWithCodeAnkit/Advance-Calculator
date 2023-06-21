import { useState } from "react";
import { todoSchema } from "../schema/todoSchema";

export const useTodo = () => {
  const [todo, setTodo] = useState([]);
  const initialValues = {
    todo: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    todoSchema.cast(values);
    setTodo((prevTodo) => [...prevTodo, values.todo]);
    resetForm();
  };

  return { initialValues, handleSubmit, todo, todoSchema };
};
