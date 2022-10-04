import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "../screen/Login/Login";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
