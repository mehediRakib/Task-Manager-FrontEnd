import React, {useRef} from 'react';
import {NewTaskRequest} from "../../ApiRequest/ApiRequests.js";
import toast, {Toaster} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const navigate=useNavigate()
    const taskNameRef=useRef(null);
    const taskDescriptionRef=useRef(null);

    const handleTaskCreate=async () => {
        const taskName = taskNameRef.current.value;
        const taskDescription = taskDescriptionRef.current.value;
         if(!taskName)
         {
             toast.error("Task name required")
         }else if(!taskDescription){
             toast.error("Task Description required");
         }
         else {
             const Data = await NewTaskRequest(taskName, taskDescription);
             if(Data===true) {
                 taskNameRef.current.value = "";
                 taskDescriptionRef.current.value = "";
                 navigate('/All')
             }
         }

    }

    return (
        <div className="">
            <div className="flex justify-center items-center mt-3">
                <div className="w-3/5 h-auto shadow-md bg-white rounded-md border p-5 pt-10 ">
                    <div className="flex justify-center">
                        <h4 className="font-semibold text-xl">Create New Task</h4>
                    </div>
                   <div className="flex justify-center items-center mx-0 w-full mt-8">
                       <div className=" w-full max-w-2xl space-y-5">
                           <input ref={taskNameRef} type="text" className="animated fadeInUp w-full border py-3 border-pink-300 rounded-md px-5 focus:border-2 focus:outline-none focus:border-pink-400" placeholder="Task Name"/>
                           <textarea ref={taskDescriptionRef} className="animated fadeInUp w-full border py-3 border-pink-300 rounded-md px-5 h-24  focus:border-2 focus:outline-none focus:border-pink-400 "  placeholder="Task Description"/>
                       </div>
                   </div>
                    <div className="flex justify-center mt-4 mr-6">
                        <input
                            type="button"
                            value="create"
                            className="px-5 py-1 border rounded-full ring-2 ring-pink-400 font-semibold hover:bg-pink-400 hover:outline-none hover:ring-orange-300"
                            onClick={handleTaskCreate}
                        />

                    </div>

                </div>
            </div>
            <Toaster position="bottom-center"/>

        </div>
    );
};

export default Create;