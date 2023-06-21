import React from "react";
import Card from "./Card";

const LoggedUser = () => {
  const loggedUser = JSON.parse(localStorage.getItem("UserLogin"));
  const array = [loggedUser];
  return (
    <>
      <div className="grid gap-10 md:grid-cols-2  mt-8 w-[53rem] ml-auto mr-auto">
        {array.map((user) => (
          <Card
            key={user.id}
            img={user.img}
            name={user.name}
            id={user.id || new Date()}
            dob={user.dob || user.email}
          />
        ))}
      </div>
    </>
  );
};

export default LoggedUser;
