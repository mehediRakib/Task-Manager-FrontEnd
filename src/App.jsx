import React, {Fragment} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import DashboardPage from "./Pages/Dashboard-Page.jsx";
import NewPage from "./Pages/New-Page.jsx";
import ProgressPage from "./Pages/Progress-Page.jsx";
import ProfilePage from "./Pages/Profile-Page.jsx";
import CreatePage from "./Pages/Create-page.jsx";
import LoginPage from "./Pages/Login-Page.jsx";
import RegistrationPage from "./Pages/Registration-Page.jsx";
import FullScreenLoader from "./Component/MasterLayout/Full-screen-Loader.jsx";
import cookies from 'js-cookie'
import CompletedPage from "./Pages/Completed-Page.jsx";
import CancelPage from "./Pages/Cancel-Page.jsx";
import SendOtp from "./Component/AccountRecover/Send-Otp.jsx";
import VerifyOtp from "./Component/AccountRecover/Verify-Otp.jsx";
import CreateNewPassword from "./Component/AccountRecover/Create-New-Password.jsx";

const App = () => {
    const cookie=cookies.get('token');
    console.log(cookie)

    if(cookie){
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<DashboardPage/>}/>
                        <Route path="/All" element={<NewPage/>}/>
                        <Route path="/progress" element={<ProgressPage/>}/>
                        <Route path="/create-task" element={<CreatePage/>}/>
                        <Route path="/new-task" element={<NewPage/>}/>
                        <Route path="/completed" element={<CompletedPage/>}/>
                        <Route path="/canceled" element={<CancelPage/>}/>
                        <Route path="/registration" element={<RegistrationPage/>}/>
                        <Route path="/Profile" element={<ProfilePage/>}/>

                    </Routes>
                </BrowserRouter>
                <FullScreenLoader/>
            </Fragment>
        );
    }else {
        return (
            <Fragment>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/login"/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/registration" element={<RegistrationPage/>}/>

                        <Route path="/Sent-Otp" element={<SendOtp/>}/>
                        <Route path="/verify-otp" element={<VerifyOtp/>}/>
                        <Route path="/create-password" element={<CreateNewPassword/>}/>
                    </Routes>
                </BrowserRouter>
                <FullScreenLoader/>
            </Fragment>
        );
    }
};

export default App;