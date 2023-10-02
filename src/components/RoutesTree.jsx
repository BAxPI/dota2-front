import React from "react";
import { Route, Routes } from "react-router-dom";

// Import Components

import SignUp from "./SignUp";
import Login from "./Login"
import Home from "./Home";

const RoutesTree = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default RoutesTree;
