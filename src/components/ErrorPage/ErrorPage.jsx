import React from "react";

const ErrorPage = (props) => {
  return (
    <>
      <div className="flex justify-center items-center py-80">
        <h1 className=" text-2xl md:text-5xl  font-bold">404</h1>
        <h1 className=" text-2xl md:text-5xl  font-bold">
          {props.message || "Page Not Found"}
        </h1>
      </div>
    </>
  );
};

export default ErrorPage;
