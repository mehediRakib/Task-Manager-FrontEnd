import React, {useEffect, useRef} from 'react';
import {ProfileDetails, ProfileUpdateRequest} from "../../ApiRequest/ApiRequests.js";
import {useSelector} from "react-redux";
import getBase64, { isEmail, isEmpty, isMobile, isPassword} from "../../Utility/Form-helper.js";
import toast, {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const Profile = () => {
    const navigate=useNavigate();
    let emailRef,firstNameRef,lastNameRef,mobileRef,passRef,userImgRef,userImgView=useRef();

    useEffect(() => {
        (async () => {
            await ProfileDetails()
        })()
    }, []);

    const profileDetails=useSelector((state)=>state.profile.value);
    const previewImg=async () => {
        const ImgFile = userImgRef.files[0];
        const base64Img = await getBase64(ImgFile);
        userImgView.src = base64Img

    }

    const UpdateProfile=async () => {
        let email = emailRef.value;
        let firstName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let mobile = mobileRef.value;
        let password = passRef.value;
        let photo=userImgView.src;

        if (isEmail(email)) {
            toast.error("Required valid email")
        } else if (isEmpty(firstName)) {
            toast.error("First Name is Required")
        } else if (isEmpty(lastName)) {
            toast.error("Last Name is required");
        } else if (isMobile(mobile)) {
            toast.error("Require valid Phone Number")
        } else if (isPassword(password)) {
            toast.error("6 digit password required")
        } else {
           const result= await ProfileUpdateRequest(email, firstName, lastName, mobile, password,photo)
            if(result===true){
                navigate('/')
            }
        }

    }
    return (
        <div className="container mt-8 ">
            <div className="flex justify-center items-center">
                <div className="w-5/6 h-auto shadow-md bg-white rounded-md mx-5 p-5">
                    <div className="w-20 h-20 rounded-full overflow-hidden flex items-center justify-center ring-2 ring-pink-500">
                        <img ref={(input)=>userImgView=input} className="w-full h-full object-cover " src={profileDetails['photo']} alt="profile"/>
                    </div>
                    <hr className="mt-5"/>
                    <div className="flex flex-wrap mt-4">
                        <div className="w-1/3 mt-8 px-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
                            <input
                                onChange={previewImg}
                                ref={(input)=>userImgRef=input}
                                type="file"
                                className="w-full py-1 px-2 border border-pink-400 rounded-md text-gray-600 focus:outline-none focus:ring-1 focus:ring-pink-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-200"
                            />
                        </div>

                        <div className="w-1/3 mt-8 px-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                            <input
                                readOnly={true}
                                ref={(input)=>emailRef=input}
                                type="email"
                                defaultValue={profileDetails['email']}
                                className="w-full py-2 px-2 border border-pink-400 rounded-md text-gray-600 focus:outline-none focus:ring-1 focus:ring-pink-500 "
                                placeholder="Email:"
                            />
                        </div>

                        <div className="w-1/3 mt-8 px-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">First Name:</label>
                            <input
                                key={Date.now()}
                                ref={(input)=>firstNameRef=input}
                                type="text"
                                defaultValue={profileDetails['firstName']}
                                className="w-full py-2 px-2 border border-pink-400 rounded-md text-gray-600 focus:outline-none focus:ring-1 focus:ring-pink-500 "
                                placeholder="First Name:"
                            />
                        </div>
                        <div className="w-1/3 mt-8 px-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name:</label>
                            <input
                                key={Date.now()}
                                ref={(input)=>lastNameRef=input}
                                type="text"
                                defaultValue={profileDetails['lastName']}
                                className="w-full py-2 px-2 border border-pink-400 rounded-md text-gray-600 focus:outline-none focus:ring-1 focus:ring-pink-500 "
                                placeholder="Last Name:"
                            />
                        </div>

                        <div className="w-1/3 mt-8 px-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile:</label>
                            <input
                                key={Date.now()}
                                ref={(input)=>mobileRef=input}
                                type="number"
                                defaultValue={profileDetails['mobile']}
                                className="w-full py-2 px-2 border border-pink-400 rounded-md text-gray-600 focus:outline-none focus:ring-1 focus:ring-pink-500 "
                                placeholder="Number:"
                            />
                        </div>

                        <div className="w-1/3 mt-8 px-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password:</label>
                            <input
                                key={Date.now()}
                                ref={(input)=>passRef=input}
                                type="password"
                                defaultValue={profileDetails['password']}
                                className="w-full py-2 px-2 border border-pink-400 rounded-md text-gray-600 focus:outline-none focus:ring-1 focus:ring-pink-500 "
                                placeholder="Password:"
                            />
                        </div>
                    </div>

                    <div className="w-1/3 px-2 mt-10 mb-8">
                        <button onClick={UpdateProfile} className="w-full px-4 rounded-md bg-pink-600 py-2 text-white font-semibold font-serif ring-1 ring-pink-800 hover:bg-pink-500">Update</button>
                    </div>

                </div>
            </div>
            <Toaster position="bottom-center"/>
        </div>
    );
};

export default Profile;