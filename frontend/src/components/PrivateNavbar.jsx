import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PrivateNavbar = () =>{

    const navigate = useNavigate();

    const handleLogout = () => {
        window.localStorage.removeItem("blogData");
        toast.success("Logout successfull", {
            position: "top-right",
            autoClose: true
        });
        navigate("/login");
    };

    return(
        <nav className="primary-link">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/setting">Setting</NavLink>
            <NavLink to="/login" onClick={handleLogout}>Logout</NavLink>
        </nav>
        
    );
};

export default PrivateNavbar;