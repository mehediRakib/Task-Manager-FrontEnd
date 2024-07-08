import React, {Fragment, useEffect, useRef, useState} from 'react';
import {
    AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineFullscreen,
    AiOutlineLogout,
    AiOutlineMenuUnfold,
    AiOutlineUser, AiTwotoneEdit
} from "react-icons/ai";
import logo from '../../assets/image/logo.svg'
import {MdOutlineDashboard} from "react-icons/md";
import {BsListNested} from "react-icons/bs";
import {LuHourglass} from "react-icons/lu";
import {Link} from "react-router-dom";
const MasterLayout = (props) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const dialogRef=useRef(null);
    const [hideBar,setHidebar]=useState(true);

    const handleSideBar=()=>{
        setHidebar(!hideBar);
    }


    const handleImageClick = () => {
        setIsDialogOpen(!isDialogOpen);
    };

    const handleClickOutSide=(event)=>{
        if(dialogRef.current && !dialogRef.current.contains(event.target)){
            setIsDialogOpen(false)
        }
    }
    useEffect(() => {
        if(isDialogOpen){
            document.addEventListener('mousedown',handleClickOutSide);
        }
        else {
            document.removeEventListener('mousedown',handleClickOutSide);
        }
        return()=>{
            document.removeEventListener('mousedown',handleClickOutSide)
        }
    }, [isDialogOpen]);

    return (
            <Fragment>

                    <div className="h-16 w-full fixed top-0 left-0 right-0  shadow-lg pt-4 bg-white flex items-center justify-between">
                        <div className="flex items-center pl-5">
                            <a className="icon-nav m-0"><AiOutlineMenuUnfold className="h-5 w-5" onClick={handleSideBar}/></a>
                            <img className="nav-logo mx-2" src={logo} alt=""/>
                        </div>

                        <div className="flex justify-center items-center space-x-5">
                            <div>
                                <AiOutlineFullscreen className="h-6 w-6" />
                            </div>
                            <div className="pr-7 pb-2">
                                <img className="h-10 w-10 rounded-full ring-2 ring-purple-500" src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/435906163_399431466217958_7396757603800250124_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEp1JguPeL6ZjtO_1CU4xBIWwUizI0jPHpbBSLMjSM8ekrL4rZL-qH9EErWqI-Dz2dvWFWOnyQFME7NM7MicmBx&_nc_ohc=Sgz1cK-4IIQQ7kNvgG_S5Z7&_nc_ht=scontent.fdac157-1.fna&gid=Avmc3ORBxeD6QrbRr2NK4mO&oh=00_AYAiF_Eq1wvvZe88d_EwRJKnSKVgK--1BcypsFgIDZKI-w&oe=668BFFC9"

                                     alt=""
                                     onClick={handleImageClick}
                                />
                                {isDialogOpen && (
                                    <div ref={dialogRef} className="absolute right-0 mt-2 w-52 bg-white border border-gray-300 rounded-lg shadow-lg p-4 mx-2">
                                        <div className="mt-2">
                                            <div className="flex justify-center">
                                                <img
                                                    className="h-10 w-10 rounded-full ring-2 ring-purple-500"
                                                    src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-1/435906163_399431466217958_7396757603800250124_n.jpg?stp=dst-jpg_s200x200&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEp1JguPeL6ZjtO_1CU4xBIWwUizI0jPHpbBSLMjSM8ekrL4rZL-qH9EErWqI-Dz2dvWFWOnyQFME7NM7MicmBx&_nc_ohc=Sgz1cK-4IIQQ7kNvgG_S5Z7&_nc_ht=scontent.fdac157-1.fna&gid=Avmc3ORBxeD6QrbRr2NK4mO&oh=00_AYAiF_Eq1wvvZe88d_EwRJKnSKVgK--1BcypsFgIDZKI-w&oe=668BFFC9"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="flex justify-center">
                                                <h5 className="text-center">Mehedi hasan</h5>
                                            </div>
                                            <hr className="mt-5"/>

                                        </div>
                                        <div>
                                            <div className="space-y-2 mt-2 ">
                                                <Link to="/Profile" className="flex items-center space-x-2 hover:bg-pink-100 hover:border-2 hover:border-l-pink-600 px-2 py-1 rounded-md">
                                                    <AiOutlineUser className="w-5 h-5" />
                                                    <span>Profile</span>
                                                </Link>
                                                <Link to="/logout" className="flex items-center space-x-2 hover:bg-pink-100 hover:border-2 hover:border-l-pink-600 px-2 py-1 rounded-md">
                                                    <AiOutlineLogout className="w-5 h-5" />
                                                    <span>Logout</span>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {
                        hideBar?
                            (
                                <div className="flex">

                                    <div className="w-1/6 h-screen shadow-lg left-0 border-r pt-20">
                                        <div className="py-4 space-y-4">
                                            <div className="pl-5 w-full hover:bg-pink-100 hover:border-l-4 hover:border-l-pink-500 py-3 hover-underline-animation">
                                                <Link to="/" className="flex space-x-2 font-sans text-sm opacity-75">
                                                    <MdOutlineDashboard className="w-6 h-6" />
                                                    <h5 className="font-semibold">Dashboard</h5>
                                                </Link>
                                            </div>
                                            <div className="pl-5 w-full hover:bg-pink-100 hover:border-l-4 hover:border-l-pink-500 py-3 hover-underline-animation">
                                                <Link to="/create-task" className="flex space-x-2 font-sans text-sm opacity-75">
                                                    <AiTwotoneEdit className="w-6 h-6" />
                                                    <h5 className="font-semibold">Create New</h5>
                                                </Link>
                                            </div>
                                            <div className="pl-5 w-full hover:bg-pink-100 hover:border-l-4 hover:border-l-pink-500 py-3 hover-underline-animation">
                                                <Link to="/" className="flex space-x-2 font-sans text-sm opacity-75">
                                                    <BsListNested className="w-6 h-6" />
                                                    <h5 className="font-semibold">New Task</h5>
                                                </Link>
                                            </div>
                                            <div className="pl-5 w-full hover:bg-pink-100 hover:border-l-4 hover:border-l-pink-500 py-3 hover-underline-animation">
                                                <Link to="/" className="flex space-x-2 font-sans text-sm opacity-75">
                                                    <LuHourglass className="w-6 h-6" />
                                                    <span className="font-semibold">In Progress</span>
                                                </Link>
                                            </div>
                                            <div className="pl-5 w-full hover:bg-pink-100 hover:border-l-4 hover:border-l-pink-500 py-3 hover-underline-animation">
                                                <Link to="/" className="flex space-x-2 font-sans text-sm opacity-75">
                                                    <AiOutlineCheckCircle className="w-6 h-6" />
                                                    <span className="font-semibold ">Completed</span>
                                                </Link>
                                            </div>
                                            <div className="pl-5 w-full hover:bg-pink-100 hover:border-l-4 hover:border-l-pink-500 py-3 hover-underline-animation">
                                                <Link to="/" className="flex space-x-2 font-sans text-sm opacity-75">
                                                    <AiOutlineCloseCircle className="w-6 h-6" />
                                                    <span className="font-semibold">Canceled</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-16 w-full">
                                        {props.children}
                                    </div>
                                </div>
                            ):(
                                <>
                                </>
                            )

                    }

            </Fragment>

    );
};

export default MasterLayout;