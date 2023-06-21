import React,{Suspense} from "react";
import ReactLoading from 'react-loading';
import Card from "./Card";

const Users = (props) => {
  return (
    <>
    <Suspense
    fallback={
      <ReactLoading type="cubes" color="red" height={'20%'} width={'20%'} />
    }
    />
      <div className="grid gap-10 md:grid-cols-2  mt-8 w-[53rem] ml-auto mr-auto">
        {props.userDetails.map((user) => (
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

export default Users;
