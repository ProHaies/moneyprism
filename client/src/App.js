import React from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import SideBar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <Router>
 <SideBar>
        <Routes>
          <Route path="/" element={<Home/>} />

        </Routes>
        </SideBar>
    </Router>
  );
}

export default App;
