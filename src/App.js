import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AgeCalulation from "./components/Age/AgeCalulation";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agecalculater" element={<AgeCalulation />} />
          <Route path="/currency" element={<CurrencyConverter />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
