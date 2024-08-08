import React, { Fragment, useRef } from 'react';
import { Link } from "react-router-dom";
import { LoginRequest } from "../../ApiRequest/ApiRequests.js";
import { Toaster } from "react-hot-toast";

const Login = () => {
    const userEmailRef = useRef();
    const userPassRef = useRef();

    const DoLogin = async () => {
        const email = userEmailRef.current.value;
        const pass = userPassRef.current.value;
        const data = await LoginRequest(email, pass);
        if (data === true) {
            window.location.href = "/";
        }

        userEmailRef.current.value = "";
        userPassRef.current.value = "";
    }
    console.log("hello-")
    return (
        <Fragment>
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto shadow-md mt-24 border bg-white rounded-md p-5 m-10">
                    <div className="flex justify-center items-center">
                        <div className="w-full">
                            <div className="w-full flex justify-center font-semibold text-lg mt-8">
                                <h4>Sign In</h4>
                            </div>
                            <div className="flex justify-center items-center mt-5">
                                <div className="w-full space-y-6">
                                    <input
                                        ref={userEmailRef}
                                        className="animated fadeInUp w-full py-2 px-5 rounded-md border border-pink-400 focus:border-2 focus:outline-none focus:border-pink-400"
                                        placeholder="User Email"
                                    />
                                    <input
                                        type="password"
                                        ref={userPassRef}
                                        className="animated fadeInUp w-full py-2 px-5 rounded-md border border-pink-400 focus:border-2 focus:outline-none focus:border-pink-400"
                                        placeholder="User Password"
                                    />
                                    <input
                                        type="button"
                                        onClick={DoLogin}
                                        value="Next"
                                        className="animated fadeInUp w-full bg-pink-700 rounded-md py-2 px-5 text-white cursor-pointer focus:outline-none mt-4 font-semibold hover:bg-pink-600"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center items-center mt-5">
                                <div className="space-y-3">
                                    <div className="flex justify-center">
                                        <Link to="/registration" className="text-pink-500 hover:underline">
                                            Sign Up
                                        </Link>
                                    </div>
                                    <div className="text-center">
                                        <Link to="/Sent-Otp" className="text-pink-500 hover:underline">
                                            Forget Password
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Toaster position="bottom-center" />
            </div>
        </Fragment>
    );
};

export default Login;
