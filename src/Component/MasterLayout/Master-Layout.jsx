import React, { Fragment, useEffect, useRef, useState } from 'react';
import {
    AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineFullscreen,
    AiOutlineLogout,
    AiOutlineMenuUnfold,
    AiOutlineUser, AiTwotoneEdit
} from "react-icons/ai";
import logo from '../../assets/image/logo.svg';
import { MdOutlineDashboard } from "react-icons/md";
import { BsListNested } from "react-icons/bs";
import { LuHourglass } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { LogOutRequest } from "../../ApiRequest/ApiRequests.js";
import { getUserDetails } from "../../Utility/sessionHelper.js";

const MasterLayout = (props) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const dialogRef = useRef(null);
    const [hideBar, setHidebar] = useState(true);

    const handleLogOut = async () => {
        await LogOutRequest();
        window.location.href = '/login';
    };

    const handleSideBar = () => {
        setHidebar(!hideBar);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dialogRef.current && !dialogRef.current.contains(event.target)) {
                setIsDialogOpen(false);
            }
        };

        if (isDialogOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDialogOpen]);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Fragment>
            <div>
                <div className="h-16 w-full fixed top-0 left-0 right-0 shadow-lg pt-4 bg-white flex items-center justify-between z-10">
                    <div className="flex items-center pl-5">
                        <a className="icon-nav m-0">
                            <AiOutlineMenuUnfold className="h-5 w-5" onClick={handleSideBar} />
                        </a>
                        <img className="nav-logo mx-2" src={logo} alt="" />
                    </div>
                    <div className="flex justify-center items-center space-x-5">
                        <div>
                            <AiOutlineFullscreen className="h-6 w-6" />
                        </div>
                        <div className="pr-7 pb-2 relative">
                            <img
                                className="h-12 w-12 md:w-10 md:h-10 sm:w-6 sm:6 rounded-full ring-2 ring-purple-500 cursor-pointer"
                                src={getUserDetails()['photo']}
                                alt=""
                                onClick={() => setIsDialogOpen(!isDialogOpen)}
                            />
                            {isDialogOpen && (
                                <div
                                    ref={dialogRef}
                                    className="absolute right-0 mt-2 w-52 bg-white border border-gray-300 rounded-lg shadow-lg p-4"
                                >
                                    <div className="flex flex-col items-center">
                                        <img
                                            className="h-12 w-12 rounded-full ring-2 ring-purple-500"
                                            src={getUserDetails()['photo']}
                                            alt=""
                                        />
                                        <h5 className="text-center mt-2">Mehedi Hasan</h5>
                                    </div>
                                    <hr className="mt-5" />
                                    <div className="space-y-2 mt-2">
                                        <Link
                                            to="/Profile"
                                            className="flex items-center space-x-2 hover:bg-pink-100 hover:border-2 hover:border-l-pink-600 px-2 py-1 rounded-md"
                                        >
                                            <AiOutlineUser className="w-5 h-5" />
                                            <span>Profile</span>
                                        </Link>
                                        <div className="hover:bg-pink-100 hover:border-2 hover:border-l-pink-600 px-2 py-1 rounded-md">
                                            <button onClick={handleLogOut} className="flex items-center space-x-2">
                                                <AiOutlineLogout className="w-5 h-5" />
                                                <span>Logout</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex min-h-screen">
                    <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0 w-64 md:w-1/6 shadow-lg border-r pt-10 bg-white ${hideBar ? '' : 'hidden'}`}>
                        <div className="py-4 mt-8">
                            <Link to="/">
                                <div className="pl-5 w-full hover:bg-pink-100 hover:border-l-4 hover:border-l-pink-500 py-3 hover-underline-animation mt-3">
                                    <div className="flex space-x-2 font-sans text-sm opacity-75">
                                        <MdOutlineDashboard className="w-6 h-6" />
                                        <h5 className="font-semibold">Dashboard</h5>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/create-task">
                                <div className="pl-5 w-full hover:bg-pink-100 hover:border-l-4 hover:border-l-pink-500 py-3 hover-underline-animation mt-3">
                                    <div className="flex space-x-2 font-sans text-sm opacity-75">
                                        <AiTwotoneEdit className="w-6 h-6" />
                                        <h5 className="font-semibold">Create New</h5>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/new-task">
                                <div className="pl-5 w-full hover:bg-pink-100 hover:border-l-4 hover:border-l-pink-500 py-3 hover-underline-animation mt-3">
                                    <div className="flex space-x-2 font-sans text-sm opacity-75">
                                        <BsListNested className="w-6 h-6" />
                                        <h5 className="font-semibold">New Task</h5>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/progress">
                                <div className="pl-5 w-full hover:bg-pink-100 hover:border-l-4 hover:border-l-pink-500 py-3 hover-underline-animation mt-3">
                                    <div className="flex space-x-2 font-sans text-sm opacity-75">
                                        <LuHourglass className="w-6 h-6" />
                                        <h5 className="font-semibold">In Progress</h5>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/completed">
                                <div className="pl-5 w-full hover:bg-pink-100 hover:border-l-4 hover:border-l-pink-500 py-3 hover-underline-animation mt-3">
                                    <div className="flex space-x-2 font-sans text-sm opacity-75">
                                        <AiOutlineCheckCircle className="w-6 h-6" />
                                        <h5 className="font-semibold">Completed</h5>
                                    </div>
                                </div>
                            </Link>
                            <Link to="/canceled">
                                <div className="pl-5 w-full hover:bg-pink-100 hover:border-l-4 hover:border-l-pink-500 py-3 hover-underline-animation mt-3">
                                    <div className="flex space-x-2 font-sans text-sm opacity-75">
                                        <AiOutlineCloseCircle className="w-6 h-6" />
                                        <h5 className="font-semibold">Canceled</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className={`mt-16 w-full ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300 ease-in-out md:ml-0 sm:ml-0`}>
                        <button className="md:hidden p-4" onClick={toggleSidebar}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                        {props.children}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default MasterLayout;

