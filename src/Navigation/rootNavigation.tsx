import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "../Features/Root/Home";
import About from "../Features/About/About";
import Login from '../Features/Login/Login';

import { RequireAuth } from '../Features/Auth/Auth';
const RootNavigation: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<RequireAuth><About/></RequireAuth>} />
        <Route path="/login" element={<Login/>}/>
    </Routes>
  );
};

export default RootNavigation;
