import React, {useRef} from 'react';
import toast, {Toaster} from "react-hot-toast";
import {isEmail, isEmpty, isPassword} from "../../Utility/Form-helper.js";
import {ResetPassowrd} from "../../ApiRequest/ApiRequests.js";
import {useNavigate} from "react-router-dom";

const CreateNewPassword = () => {
    let emailRef,newPassRef,confirmPassRef=useRef();
     const navigate=useNavigate()
    const handlePassChange=async () => {
        let email = emailRef.value;
        let NewPass = newPassRef.value;
        let ConfirmPass = confirmPassRef.value;

        if (isEmail(email)) {
            toast.error("Required valid email");
        } else if (isPassword(NewPass)) {
            toast.error('6 digit password required')
        } else if (NewPass !== ConfirmPass) {
            toast.error("Confirm Password doesnt match");
        } else {
            const data = await ResetPassowrd(email,NewPass);
            if(data){
                navigate('/login')
            }
        }


    }
    return (
        <div className="container">
            <div className="flex justify-center items-center  mt-32">
                <div className="w-4/12 h-auto shadow-md rounded-lg bg-white border pb-5">
                    <div className="p-10 w-full">
                        <div>
                            <h5 className="text-xl font-serif font-semibold">SET NEW PASSWORD</h5>
                        </div>
                        <div className="pt-5">
                            <label className="block text-xs font-semibold mb-2  animated fadeInUp ">Your email address</label>
                            <input
                                ref={(input) => emailRef = input}
                                placeholder="User Email"
                                className=" animated fadeInUp w-full py-2 rounded-lg bg-white border border-pink-400 focus:outline-none focus:border-2 focus:border-pink-600 px-4"
                            />

                            <label className="block text-xs font-semibold mb-2 pt-5  animated fadeInUp ">New Password</label>
                            <input
                                ref={(input) => newPassRef = input}
                                type="password"
                                placeholder="New Password"
                                className=" animated fadeInUp w-full py-2 rounded-lg bg-white border border-pink-400 focus:outline-none focus:border-2 focus:border-pink-600 px-4"
                            />

                            <label className="block text-xs font-semibold mb-2 pt-5  animated fadeInUp">Confirm Password</label>
                            <input
                                ref={(input) => confirmPassRef = input}
                                placeholder="Confirm Password"
                                type="password"
                                className=" animated fadeInUp w-full py-2 rounded-lg bg-white border border-pink-400 focus:outline-none focus:border-2 focus:border-pink-600 px-4"
                            />
                        </div>
                        <div className="pt-5 ">
                            <button onClick={handlePassChange}
                                    className="w-full py-2 bg-pink-600 rounded-lg text-white  text-lg ring-1 ring-pink-800 hover:bg-pink-700 ">Next
                            </button>
                        </div>


                    </div>

                </div>
            </div>
            <Toaster position="bottom-center"/>
        </div>
    );
};

export default CreateNewPassword;