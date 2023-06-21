import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userDetails } from "./components/consonets/userDetails";
import Navbar from "./components/Navbar/Navbar";
import AgeCalulation from "./components/Age/AgeCalulation";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import Users from "./components/Users/Users";
import ToDoList from "./components/ToDoList/ToDoList";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import LoggedUser from "./components/Users/LoggedUser";
import Operations from "./components/Registration/Operations";
import { IsValid } from "./components/Registration/Helper/Authenticate";

const App = () => {
  const isValid = IsValid();
  const [currInfo, setCurrInfo] = useState(false);

  useEffect(() => {
    if (!currInfo) {
      setCurrInfo(isValid);
    }
  }, [currInfo, isValid]);

  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agecalculater" element={<AgeCalulation />} />
            <Route path="/currency" element={<CurrencyConverter />} />
            <Route
              path="/users"
              element={<Users userDetails={userDetails} />}
            />
            <Route path="/todo" element={<ToDoList />} />
            <Route
              path="/login"
              element={<Login setCurrInfo={setCurrInfo} />}
            />
            <Route path="/register" element={<Registration />} />
            <Route path="/:id/update" element={<Registration />} />
            <Route path="/loggedUser" element={<LoggedUser />} />
            {currInfo && <Route path="/action" element={<Operations />} />}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
