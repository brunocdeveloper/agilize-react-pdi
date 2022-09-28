import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aluno from "../screen/Aluno/Aluno";
import Professor from "../screen/Professor/Professor";

const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adm" element={<Professor />} />
        <Route path="/aluno" element={<Aluno />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
