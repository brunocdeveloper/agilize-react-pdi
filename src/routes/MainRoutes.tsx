import { useUserContext } from "../context/UserContext";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const MainRoutes = () => {
  const { isLoged } = useUserContext();
  return isLoged ? <PrivateRoutes /> : <PublicRoutes />;
};

export default MainRoutes;
