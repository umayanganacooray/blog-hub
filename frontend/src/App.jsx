import {Routes, Route} from "react-router-dom";
import "react-toastify/ReactToastify.css";
import {ToastContainer} from "react-toastify";
import Home from "./pages/Home";
import PrivateLayout from "./components/Layout/PrivateLayout";
import PublicLayout from "./components/Layout/PublicLayout";
import CategoryList from "./pages/category/CategoryList";
import PostList from "./pages/post/PostList";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<CategoryList />} />
          <Route path="posts" element={<PostList />} />
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route element={<PublicLayout/>}>
           <Route path="signup" element={<Signup />} />
           <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>

  );
};

export default App;
