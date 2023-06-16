import Cookies from "js-cookie";
import {Navigate,Outlet} from "react-router-dom"
const PrivateUser = () => {
    const token = Cookies.get("token");
  return token ? <Outlet/> : <Navigate to='/login'/>
};

export default PrivateUser;
