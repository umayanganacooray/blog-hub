import { Navigate, Outlet } from "react-router-dom";
import PublicNavbar from "../PublicNavbar";

const PublicLayout = () => {
    const auth = false;

    if(auth){
        return(
            <Navigate to="/" />
        );
    }

    return (
        <>
            <PublicNavbar />
            <Outlet />
        </>
    );

};

export default PublicLayout;