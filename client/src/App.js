import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import SideBar from "./components/Sidebar/Sidebar";
import Auth from "./components/Home/Authentication/AuthForm/Auth";
function App() {
  return (
    <Router>
 <SideBar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/auth" element={<Auth/>}/>
        </Routes>
        </SideBar>
    </Router>
  );
}

export default App;
