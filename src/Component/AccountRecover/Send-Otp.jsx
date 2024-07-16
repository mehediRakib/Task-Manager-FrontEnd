import React, {useRef} from 'react';
import {isEmail} from "../../Utility/Form-helper.js";
import {RecoverVerifyEmail} from "../../ApiRequest/ApiRequests.js";
import toast, {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const SendOtp = () => {
    const navigate = useNavigate();

    let emailRef = useRef();
    const verifyEmail = async () => {
        const email = emailRef.value;
        const postBody={
            email:email
        }
        if (isEmail(email)) {
            toast.error("Required valid email address")
        } else {
            const result=await RecoverVerifyEmail(postBody);
            if(result){
                navigate('/verify-otp')
            }

        }

    }
    return (
        <div className="container">
            <div className="flex justify-center items-center  mt-32">
                <div className="w-4/12 h-auto shadow-md rounded-lg bg-white border pb-5">
                    <div className="p-10 w-full">
                        <div>
                            <h5 className="text-xl font-serif font-semibold">Email Address</h5>
                        </div>
                        <div className="pt-5">
                            <label className="block text-xs font-semibold mb-2  animated fadeInUp">Your email address</label>
                            <input
                                ref={(input) => emailRef = input}
                                placeholder="User Email"
                                className=" animated fadeInUp w-full py-2 rounded-lg bg-white border border-pink-400 focus:outline-none focus:border-2 focus:border-pink-600 px-4"
                            />
                        </div>
                        <div className="pt-5 ">
                            <button onClick={verifyEmail}
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

export default SendOtp;