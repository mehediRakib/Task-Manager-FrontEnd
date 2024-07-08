import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {isEmail, isEmpty, isMobile, isPassword} from "../../Utility/Form-helper.js";
import toast, {Toaster} from "react-hot-toast";
import {RegistrationRequest} from "../../ApiRequest/ApiRequests.js";

const Registration = () => {
    const navigate=useNavigate();
    const [email,setEmail]=useState();
    const [FirstName,setFirstName]=useState("");
    const [LastName,setLastName]=useState("");
    const [Mobile,setMobile]=useState("");
    const [pass,setPass]=useState("");

    let postBody={
        email:email,firstName:FirstName,lastName:LastName,mobile:Mobile,password:pass,photo:""
    }

    const DoRegistration=async () => {
        if (isEmail(email)) {
            toast.error("Required valid email address")
        } else if (isEmpty(FirstName)) {
            toast.error("Required First Name")
        } else if (isEmpty(LastName)) {
            toast.error("Required Last Name")
        } else if (isMobile(Mobile)) {
            toast.error("Required valid phone number ")
        } else if (isPassword(pass)) {
            toast.error("6 digit password required")
        } else {
            const res = await RegistrationRequest(postBody);
            if(res===true){
                navigate('/login');
            }
        }

    }



    return (
        <div className="flex justify-center items-center">
            <div className="w-4/12 h-auto shadow-md mt-24 border bg-white rounded-md">
                <div className="flex justify-center items-center mb-10">
                    <div className="w-4/5">
                        <div className="w-full flex justify-center font-semibold text-lg mt-8">
                            <h4>Sign In</h4>
                        </div>
                        <div className="flex justify-center items-center mt-5">
                            <div className="w-full max-w-xl space-y-6">
                                <input
                                   onChange={(e)=>setEmail(e.target.value)}
                                    className="w-full py-2 px-5 rounded-md border border-pink-400 focus:border-2 focus:outline-none focus:border-pink-400 "
                                    placeholder="User Email"
                                />
                                <input
                                    onChange={(e)=>setFirstName(e.target.value)}
                                    className="w-full py-2 px-5 rounded-md border border-pink-400 focus:border-2 focus:outline-none focus:border-pink-400 "
                                    placeholder="First Name"
                                />

                                <input
                                    onChange={(e)=>setLastName(e.target.value)}
                                    className="w-full py-2 px-5 rounded-md border border-pink-400 focus:border-2 focus:outline-none focus:border-pink-400 "
                                    placeholder="Last Name"
                                />
                                <input
                                    onChange={(e)=>setMobile(e.target.value)}
                                    className="w-full py-2 px-5 rounded-md border border-pink-400 focus:border-2 focus:outline-none focus:border-pink-400 "
                                    placeholder="Mobile"
                                />
                                <input
                                    onChange={(e)=>setPass(e.target.value)}
                                   placeholder="Password"
                                   className="w-full py-2 px-5 rounded-md border border-pink-400 focus:border-2 focus:outline-none focus:border-pink-400 "
                                />
                                <input
                                    type="button"
                                    onClick={DoRegistration}
                                    value="Next"
                                    className="w-full bg-pink-700 rounded-md py-2 px-5 text-white cursor-pointer focus:outline-none mt-4 font-semibold hover:bg-pink-600"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-5">
                            <div className="space-y-3 ">
                                <div className="flex justify-center">
                                    <Link to="/login">
                                        Sign In
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

export default Registration;