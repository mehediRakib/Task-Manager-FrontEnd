import React, {useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {LoginRequest} from "../../ApiRequest/ApiRequests.js";
import  {Toaster} from "react-hot-toast";

const Login = () => {
    const navigate=useNavigate();
    const userEmailRef=useRef(null);
    const userPassRef=useRef(null);
    const DoLogin=async () => {
        const email = userEmailRef.current.value;
        const pass = userPassRef.current.value;
        const data = await LoginRequest(email,pass)
        if(data===true){
            navigate('/');
        }

        userEmailRef.current.value="";
        userPassRef.current.value="";
    }
    return (
        <div className="flex justify-center items-center">
            <div className="w-4/12 h-96 shadow-md mt-24 border bg-white rounded-md">
                <div className="flex justify-center items-center">
                    <div className="w-4/5">
                        <div className="w-full flex justify-center font-semibold text-lg mt-8">
                            <h4>Sign In</h4>
                        </div>
                        <div className="flex justify-center items-center mt-5">
                            <div className="w-full max-w-xl space-y-6">
                                <input
                                    ref={userEmailRef}
                                    className="w-full py-2 px-5 rounded-md border border-pink-400 focus:border-2 focus:outline-none focus:border-pink-400 "
                                    placeholder="User Email"
                                />
                                <input
                                    ref={userPassRef}
                                    className="w-full py-2 px-5 rounded-md border border-pink-400 focus:border-2 focus:outline-none focus:border-pink-400 "
                                    placeholder="User Password"
                                />
                                <input
                                    type="button"
                                    onClick={DoLogin}
                                    value="Next"
                                    className="w-full bg-pink-700 rounded-md py-2 px-5 text-white cursor-pointer focus:outline-none mt-4 font-semibold hover:bg-pink-600"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-5">
                           <div className="space-y-3 ">
                               <div className="flex justify-center">
                                   <Link to="/registration">
                                       Sign Up
                                   </Link>
                               </div>
                               <div className="text-center">
                                   <Link to="/forget-password">
                                       Forget Password
                                   </Link>
                               </div>
                           </div>
                        </div>

                    </div>
                </div>
            </div>
            <Toaster position="bottom-center"/>
        </div>
    );
};

export default Login;