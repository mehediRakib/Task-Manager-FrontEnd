import React, {useRef, useState} from 'react';
import ReactCodeInput from "react-code-input";
import toast, {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import {verifyOTP} from "../../ApiRequest/ApiRequests.js";

const VerifyOtp = () => {
    let [otp, setOtp] = useState('');
    const navigate=useNavigate();

    const handleOtpVerification = async () => {
        if (otp.length === 6) {
            const OtpVerification = await verifyOTP(otp);
            if(OtpVerification){
                navigate('/create-password');
            }
        } else {
            toast.error("6 digit otp required")
        }
    }

    let defaultStyle = {
        fontFamily: "monospace",
        MozAppearance: "textfield",
        margin: "4px",
        paddingLeft: "8px",
        width: "45px",
        borderRadius: '3px',
        height: "45px",
        fontSize: "32px",
        border: '2px solid lightskyblue',
        boxSizing: "border-box",
        color: "black",
        backgroundColor: "white",
        borderColor: "pink"
    };
    return (
        <div className="container">
            <div className="flex justify-center items-center  mt-32">
                <div className="w-4/12 h-auto shadow-md rounded-lg bg-white border pb-5">
                    <div className="p-10 w-full">
                        <div>
                            <h5 className="text-xl font-serif font-semibold">OTP Verification</h5>
                        </div>
                        <div className="pt-5">
                            <label className="block text-xs text-gray-600 mb-2 ">A 6 digit code has been sent to your
                                account</label>
                            <ReactCodeInput onChange={(e) => setOtp(e)} inputStyle={defaultStyle} type='text'
                                            fields={6}/>
                        </div>
                        <div className="pt-5 ">
                            <button onClick={handleOtpVerification}
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

export default VerifyOtp;