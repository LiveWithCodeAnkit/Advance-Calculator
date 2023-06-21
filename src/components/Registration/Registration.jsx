import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { useRegistration } from "./hook/useRegistration";
import { useNavigate, useParams } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { initialValues, handleSubmit, schema } = useRegistration();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="bg-slate-600 flex flex-col justify-center items-center p-8 mr-auto ml-auto w-1/2 mt-32 rounded-3xl">
            <div className="flex flex-col  justify-center items-center gap-6 font-Pacifico text-white">
              <h1 className="text-4xl">
                {params.id ? `Update it !` : `Registration`}
              </h1>
              <div className="flex justify-center items-center gap-4">
                <label className="text-lg">Name</label>
                <Field
                  type="name"
                  name="name"
                  id="name"
                  className="h-12 rounded-2xl text-black text-center"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex justify-center items-center gap-4">
                <label className="text-lg">Email</label>
                <Field
                  type="email"
                  name="email"
                  disabled={params.id ? "disabled" : ""}
                  id="email"
                  className="h-12 rounded-2xl text-black text-center"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div className="flex justify-center items-center gap-4">
                <label className="text-lg">Password</label>
                <Field
                  type="text"
                  name="password"
                  id="password"
                  className="h-12 rounded-2xl text-black text-center"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600"
                />
              </div>

              <div className="flex justify-center items-center gap-4">
                <label className="text-lg">Confirm Password</label>
                <Field
                  type="text"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  className="h-12 rounded-2xl text-black text-center"
                />
                <ErrorMessage
                  name="passwordConfirmation"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex justify-between gap-5">
                <button
                  type="submit"
                  className="bg-red-400 w-auto p-4 rounded-xl text-white font-bold"
                >
                  {params.id ? `Update` : `Register`}
                </button>
                {params.id?
                <button
                  type="reset"
                  className="bg-red-400 w-auto p-4 rounded-xl text-white font-bold"
                  onClick={() => navigate("/action")}
                >
                  Cancel
                </button>:""
                }
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Registration;
