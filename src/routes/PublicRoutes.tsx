import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "../screen/Login/Login";
import Professor from "../screen/Professor/Professor";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adm" element={<Professor />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
