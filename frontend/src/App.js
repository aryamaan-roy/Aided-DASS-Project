import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import backgroundImage from "./components/images/background.jpg";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Register from "./components/common/Register";
import Sidebar from "./components/templates/Sidebar";
import Login from "./components/common/Login";
import Profile from "./components/users/Profile";

const Layout = () => {
  if (localStorage.getItem("id")) {
    return (
      <div>
        <Outlet />
      </div>
    );
  } else {
    return (
      // <div></div>
      <Outlet />
    );
  }
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<UsersList />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
