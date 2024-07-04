import { Navigate, Outlet } from "react-router-dom";
import PrivateNavbar from "../PrivateNavbar";

const PrivateLayout = () => {
    const auth = false;

    if(!auth){
        return(
            <Navigate to="/login" />
        );
    }

    return (
        <>
            <PrivateNavbar />
            <Outlet />
        </>
    );

};

export default PrivateLayout;