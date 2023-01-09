import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import SideBar from "./components/Sidebar/Sidebar";
import Auth from "./components/Home/Authentication/AuthenticationButton/Auth";
import { gapi } from "gapi-script";
function App() {
  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "*****.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });
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
