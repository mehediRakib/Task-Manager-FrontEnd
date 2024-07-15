import axios from "axios";
import toast from "react-hot-toast";
import {getUserEmail, setUserDetails, setUserEmail} from "../Utility/sessionHelper.js";
import {hideLoader, showLoader} from "../Redux/state-slice/settings-slice.js";
import store from "../Redux/store/store.js";
import {SetCanceledTask, SetCompletedTask, SetNewTask, SetProgressTask} from "../Redux/state-slice/task-slice.js";
import {SetSummary} from "../Redux/state-slice/summary-slice.js";
import {setProfile} from "../Redux/state-slice/profile-slice.js";
import {useNavigate} from "react-router-dom";

// const BaseUrl="https://task-manager-back-end-4xnh.vercel.app/api/v1";

const BaseUrl = "http://localhost:7050/api/v1";

export async function NewTaskRequest(title, description) {

    let URL = BaseUrl + "/createTask";
    let PostBody = {title: title, description: description, status: "New"}
    try {

        store.dispatch(showLoader());
        const res = await axios.post(URL, PostBody, {
            withCredentials: true
        });
        store.dispatch(hideLoader());
        if (res.status === 200 && res.data['status'] === 'success') {
            toast.success("New Task Created");
            return true;
        } else {
            toast.error("Something went wrong");
            return false;
        }

    } catch (e) {
        toast.error("Something went wrong");
        store.dispatch(hideLoader());
        return false;
    }
}

export async function TaskListByStatus(status) {
    try {
        const URL = BaseUrl + "/listTaskByStatus/" + status;
        const res = await axios.get(URL, {
            withCredentials: true
        });
        if (res.status === 200) {
            if (status === "New") {
                store.dispatch(SetNewTask(res.data['data']));
            } else if (status === 'Completed') {
                store.dispatch(SetCompletedTask(res.data['data']));
            } else if (status === 'Progress') {
                store.dispatch(SetProgressTask(res.data['data']));
            } else if (status === 'Canceled') {
                store.dispatch(SetCanceledTask(res.data['data']));
            } else {
                toast.error("Something went wrong")
            }
        }
    } catch (e) {
        toast.error("Something went wrong")

    }

}

export async function LoginRequest(email, pass) {
    let URL = BaseUrl + "/login";
    let postBody = {email: email, password: pass};
    try {
        const res = await axios.post(URL, postBody, {
            withCredentials: true
        });
        if (res.data['status'] === 'success') {
            setUserDetails(res.data['data']);
            toast.success("Login success");
            return true
        } else {
            toast.error("Required Valid email or password");
            return false;
        }

    } catch (e) {
        toast.error("Something went wrong")
        return false
    }

}

export async function RegistrationRequest(postBody) {
    let URL = BaseUrl + "/registration";

    try {
        let res = await axios.post(URL, postBody);
        if (res.data['status'] === 'success') {
            toast.success('Registrationl successfull');
            return true
        } else if (res.data['status'] === 'exist') {
            toast.error("Email already used!")
        } else {
            toast.error("Something went wrong");
            return false
        }
    } catch (e) {
        toast.error("Something went wrong")
        return false;
    }


}

export async function LogOutRequest() {
    const URL = BaseUrl + "/Logout";
    try {
        const res = await axios.get(URL, {
            withCredentials: true
        })
        if (res.data['status'] === 'success') {
            toast.success("Logout Successfull");
        } else {
            toast.error("Something went wrong");
        }
    } catch (e) {
        toast.error("Something went wrong");

    }
}

export async function ProfileUpdateRequest(email, firstName, lastName, mobile, password, photo) {
    const URL = BaseUrl + "/profileUpdate";
    try {
        const postBody = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            mobile: mobile,
            password: password,
            photo: photo
        }
        const userDetails={email:email,firstName:firstName,lastName:lastName,mobile:mobile,photo:photo}

        const res = await axios.post(URL, postBody, {
            withCredentials: true
        })
        if (res.data['status'] === 'success') {
            toast.success("Profile Updated Successfull");
            setUserDetails(userDetails);
            return true;


        } else {
            toast.error("Something went wrong")
            return false
        }
    } catch (e) {
        toast.error("Something went wrong");
        return false
    }

}

export async function summaryRequest() {
    const URL = BaseUrl + "/taskStatusCount";
    try {
        const res = await axios.get(URL, {
            withCredentials: true
        })
        if (res.data['status'] === 'success') {
            store.dispatch(SetSummary(res.data['data']));
        } else {
            toast.error("Something went wront!")
        }
    } catch (e) {
        toast.error("Something went wrong")
    }
}

export async function DeleteTaskRequest(id) {
    const URL = BaseUrl + "/deleteTask/" + id;
    try {
        const res = await axios.get(URL, {
            withCredentials: true
        })
        if (res.data['status'] === 'success') {
            toast.success("Delete successfull")
        } else {
            toast.error("Something went wrong")
        }

    } catch (e) {
        toast.error("Something went wrong")
    }

}

export async function updateStatus(id, status) {
    const URL = BaseUrl + "/updateStatus/" + id + "/" + status;
    try {
        const res = await axios.post(URL, {}, { // Added empty object as the second parameter
            withCredentials: true
        });
        if (res.data['status'] === 'success') {
            toast.success("Status successfully updated");
        } else {
            toast.error("Something went wrong");
        }
    } catch (e) {
        toast.error("Something went wrong");
    }
}


export async function ProfileDetails() {
    const URL = BaseUrl + "/profileDetails";
    try {
        const res = await axios.get(URL, {
            withCredentials: true
        })
        if (res.data['status'] === 'success') {
            store.dispatch(setProfile(res.data['data'][0]));
        } else {
            toast.error("Something went wrong!")
        }

    } catch (e) {
        toast.error("Something went wrong!");
    }
}


export async function RecoverVerifyEmail(email){
    const URL = BaseUrl + "/Recover-verify-email";
    try {
        const res = await axios.post(URL, email,{
            withCredentials: true
        })
        if (res.data['status'] === 'success') {
            setUserEmail(email);
            return true;
        } else {
            toast.error("Require valid email address");
            return false;
        }

    } catch (e) {
        toast.error("Something went wrong!");
        return false;
    }
}

export async function verifyOTP(otp){
    const email=getUserEmail()['email'];
    const URL=BaseUrl+'/Verify-OTP/'+email+"/"+otp;
    try{
        const res=await axios.get(URL,{
            withCredentials:true
        })
        if(res.data['status']==='success'){
            toast.success("OTP verification successfull");
            return true;
        }else {
            toast.error("Required valid OTP");
            return false
        }
    }catch (e) {
           toast.error("Something went wrong");
           return false;
    }
}

export async function ResetPassowrd(email,password){
    const postBody={
        email:email,
        password:password
    }
    const URL=BaseUrl+"/reset-password";
    try{
        const res=await axios.post(URL,postBody,{
            withCredentials:true
        })
        if(res.data['status']==='success'){
            toast.success("Password reset successfull")
            return true;
        }else {
            toast.error("Required valid email");
            return false
        }
    }catch (e) {
        toast.error("Something went wrong")
        return false

    }
}


