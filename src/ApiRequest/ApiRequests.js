import axios from "axios";
import toast from "react-hot-toast";
import {setToken, setUserDetails} from "../Utility/sessionHelper.js";

// const BaseUrl="https://task-manager-back-end-4xnh.vercel.app/api/v1";

const BaseUrl="http://localhost:7050/api/v1";
export async function NewTaskRequest(title, description) {
    let URL = BaseUrl+ "/createTask";
    let PostBody = {title: title, description: description, status: "New"}
    try {
        const res = await axios.post(URL,PostBody,{
            withCredentials:true
        });
        console.log(res);
        if(res.status===200 && res.data['status']==='success'){
            toast.success("New Task Created");
            return true;
        }
        else {
            toast.error("Something went wrong");
            return false;
        }

    } catch (e) {
      toast.error("Something went wrong");
      return false;
    }
}

export async function LoginRequest(email,pass){
    let URL = BaseUrl + "/login";
    let postBody={email:email,password:pass};
    try{
        const res=await axios.post(URL,postBody);
        console.log(res);
        if(res.data['status']==='success'){
            // setToken(res.data['token']);
            // setUserDetails(res.data['data']);
            toast.success("Login success");
            return true
        }
        else {
            toast.error("Required Valid email or password");
            return false;
        }

    }catch (e) {
        toast.error("Something went wrong")
        return false
    }

}

export async function RegistrationRequest(postBody){
    let URL=BaseUrl+"/registration";

    try{
        let res=await axios.post(URL,postBody);
        if(res.data['status']==='success'){
            toast.success('Registrationl successfull');
            return true
        }
        else if(res.data['status']==='exist'){
            toast.error("Email already used!")
        }

        else {
            toast.error("Something went wrong");
            return false
        }
    }catch (e) {
        toast.error("Something went wrong")
        return false;
    }


}