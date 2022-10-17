import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./sidebar";
import "./css/sb-admin-2.css";
import "./css/fontawesome-free/css/all.min.css";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./User";
import Usercreate from "./Usercreate";
import Viewuser from "./Viewuser";
import Edituser from "./Edituser";
import { useContext } from "react";
import { UserContext } from "./Usercontext";
import Login from "./Login";
import PortalLayout from "./PortalLayout";

function App() {
  const userdata = useContext(UserContext);
  return (
    <BrowserRouter>
     <Routes>
              <Route path="/" element={<Login />}></Route>
              <Route path="/portal" element={<PortalLayout />}>
                <Route path="dashboard" element={<Dashboard />}></Route>
                <Route path="users" element={<User />}></Route>
                <Route path="user_create" element={<Usercreate />}></Route>
                <Route path="user/:id" element={<Viewuser />}></Route>
                <Route path="edit/:id" element={<Edituser />}></Route>
              </Route>
            </Routes>
    </BrowserRouter>
  );
}

export default App;
