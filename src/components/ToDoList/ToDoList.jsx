import { Field, Formik, Form, ErrorMessage } from "formik";
import { useTodo } from "./hook/useTodo";

const ToDoList = () => {
  const { initialValues, handleSubmit, todo, todoSchema } = useTodo();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={todoSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="flex justify-center items-center p-20 font-Pacifico text-white">
            <div className="flex gap-3 flex-col justify-start items-start  p-11 bg-slate-600 rounded-md">
              <label className="text-lg" htmlFor="todo">
                To Do
              </label>
              <Field
                type="text"
                name="todo"
                id="todo"
                autoComplete="off"
                className="h-28 rounded-xl text-black"
              />
              <ErrorMessage
                name="todo"
                component="div"
                className="text-red-600"
              />
              <button
                className="bg-red-400 p-1.5 w-1/2 rounded-2xl"
                type="submit"
              >
                ADD
              </button>
            </div>
          </div>
        </Form>
      </Formik>
      <div className=" w-1/2 flex flex-col gap-2 justify-center mr-auto ml-auto items-center font-Pacifico text-white">
        {todo.map((item, index) => (
          <label
            key={index}
            className="bg-slate-700 w-60 h-16 text-center p-4 rounded-lg"
          >
            {item}
          </label>
        ))}
      </div>
    </>
  );
};

export default ToDoList;
