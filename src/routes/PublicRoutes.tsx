import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Aluno from "../screen/Aluno/Aluno";
import Login from "../screen/Login/Login";
import Professor from "../screen/Professor/Professor";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/adm" element={<Professor />} />
        <Route path="/aluno" element={<Aluno />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
