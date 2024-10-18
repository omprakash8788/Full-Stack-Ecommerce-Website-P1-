import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";

const App = () => {
  const [token, setToken]=useState("");

  return (
    <div className="bg-gray-50 min-h-screen">

     {
      token==="" ? <Login/> : 
      <>
        <Navbar />
        <hr />
        <div className="flex w-full">
          <Sidebar />
          <Routes>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </div>
      </>
     }

    </div>
  );
};

export default App;
