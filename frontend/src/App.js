import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import Home from "./components/common/Home";
import Register from "./components/common/Register";
import SignIn from "./components/common/signin";
import Therapist_home from "./components/Therapist/t_home";
import Parent_home from "./components/Parent/p_home";
import Activities_page from "./components/Therapist/t_activity";
import Grades_page from "./components/Therapist/t_grade";
import Parent_therapist from "./components/Parent/p_my_therapist";
import Parent_grades_page from "./components/Parent/p_grades";
import Parent_message_page from "./components/Parent/p_message";
import Therapist_message_page from "./components/Therapist/t_message";
const Layout = () => {
  return (
    <div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Layout />}> 
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="register" element={<Register />} />
          <Route path="t_home" element={<Therapist_home />} />
          <Route path="p_home" element={<Parent_home />} />
          <Route path="t_activity" element={<Activities_page />} />
          <Route path="t_grade" element={<Grades_page />} />
          <Route path="p_my_therapist" element={<Parent_therapist />} />
          <Route path="p_grades" element={<Parent_grades_page />} />
          <Route path="p_message" element={<Parent_message_page />} />
          <Route path="t_message" element={<Therapist_message_page />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
