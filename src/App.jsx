import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DashboardPage from "./Pages/Dashboard-Page.jsx";
import NewPage from "./Pages/New-Page.jsx";
import ProgressPage from "./Pages/Progress-Page.jsx";
import ProfilePage from "./Pages/Profile-Page.jsx";
import CreatePage from "./Pages/Create-page.jsx";
import LoginPage from "./Pages/Login-Page.jsx";
import RegistrationPage from "./Pages/Registration-Page.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage/>}/>
                <Route path="/All" element={<NewPage/>}/>
                <Route path="/progress" element={<ProgressPage/>}/>
                <Route path="/create-task" element={<CreatePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/registration" element={<RegistrationPage/>}/>
                <Route path="/Profile" element={<ProfilePage/>}/>


            </Routes>
        </BrowserRouter>
    );
};

export default App;