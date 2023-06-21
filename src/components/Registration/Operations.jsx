import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { ImPencil2 } from "react-icons/im";
import ErrorPage from "../ErrorPage/ErrorPage";

const Operations = () => {
  const navigate = useNavigate();

  const dataBase = JSON.parse(localStorage.getItem("UserRegister")) || [];

  const handleDelete = (id) => {
    const updatedDataBase = dataBase.filter((data) => data.id !== id);
    const result = window.confirm(`Are You Sure Delete This Record ?`);
    if (result) {
      localStorage.setItem("UserRegister", JSON.stringify(updatedDataBase));
      window.location.reload();
    }
  };
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            {dataBase.length === 0 ? (
              <ErrorPage message={"No Data Found"} />
            ) : (
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-4 " colSpan="2">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataBase.map((data) => (
                    <tr
                      key={data.id}
                      className="border-b border-danger-200 bg-danger-100 text-neutral-800"
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {data.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {data.email}
                      </td>
                      <td>
                        <button onClick={() => handleDelete(data.id)}>
                          <MdDelete className="text-2xl text-red-500" />
                        </button>
                      </td>
                      <td>
                        <button onClick={() => navigate(`/${data.id}/update`)}>
                          <ImPencil2 className="text-2xl text-blue-500" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operations;
