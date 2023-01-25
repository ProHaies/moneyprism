import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import SideBar from "./components/Sidebar/Sidebar";
import Auth from "./components/Home/Authentication/AuthenticationButton/Auth";
import { gapi } from "gapi-script";
import PostDetails from "./components/PostDetails/PostDetails";
import { useState } from "react";
function App() {
  const user = JSON.parse(localStorage.getItem('profile'));

  gapi.load("client:auth2", () => {
    gapi.client.init({
      clientId:
        "*****.apps.googleusercontent.com",
      plugin_name: "chat",
    });
  });
  const [currentId, setCurrentId] = useState(0);

  return (
    
    <Router>
 <SideBar>
        <Routes>
          <Route path="/" element={<Navigate to="/posts" />} />
          <Route path="/posts" element={<Home currentId={currentId} setCurrentId={setCurrentId}/>}/>
          <Route path="/posts/search" element={<Home/>}/>
          <Route path="/posts/addPost" element={<Home/>}/>
          <Route path="/posts/:id" element={<PostDetails/>}  />
          <Route path="/posts/:id" element={<Navigate to='/posts/:id'/>}  />
          <Route path="/auth" element={(!user ? <Auth /> : <Navigate to="/posts" />)}/>
        </Routes>
        </SideBar>
    </Router>
  );
}

export default App;
