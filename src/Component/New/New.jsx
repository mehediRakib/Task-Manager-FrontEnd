import React, {useEffect} from 'react';
import {AiOutlineDelete, AiTwotoneCalendar} from "react-icons/ai";
import {CiEdit} from "react-icons/ci";
import { TaskListByStatus} from "../../ApiRequest/ApiRequests.js";
import {useSelector} from "react-redux";
import DeleteHelper from "../../Utility/DeleteHelper.js";
import StatusHelper from "../../Utility/Status-helper.js";
import {Toaster} from "react-hot-toast";

const New = () => {
    useEffect( () => {
        (async () => {
            await TaskListByStatus("New")
        })()
    }, []);

    const DeleteTask=async (id) => {
        await DeleteHelper(id,"New")
    }

    const StatusChange=async (id,status)=>{
        await StatusHelper(id,status)
    }

    const NewTaskList = useSelector((state) => state.task.New)
    return (
        <div className="container mt-8 ">
            <div className="">
                <div className="flex justify-between pb-5">
                    <div className="ml-10">
                        <h3 className="font-semibold text-xl">New Task</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            className="w-52 border bg-white py-2 px-4 rounded-l-md border-pink-300 focus:outline-none focus:border-pink-500 focus:border-2"
                            placeholder="Search here..."
                        />
                        <button
                            type="button"
                            className="relative bg-pink-400 py-2 px-4 rounded-r-md border-2 border-pink-400 text-white hover:bg-pink-500 transition duration-200 ease-in-out -inset-x-3"
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap mx-4 px-2 mt-5">
                    {NewTaskList.map((item, i) => (
                        <div key={i.toString()} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-8">
                            <div className="h-full shadow-md bg-white rounded-md flex flex-col">
                                <div className="p-4 flex-1">
                                    <div className="font-semibold font-sans text-lg mb-2 animated fadeInUp">
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className="h-28 text-gray-600 overflow-y-auto mb-4">
                                        <p className="animated fadeInUp">{item.description}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gray-100 border-t border-gray-300">
                                    <div className="flex items-center space-x-2 text-gray-700 animated fadeInUp">
                                        <AiTwotoneCalendar className="w-5 h-5" />
                                        <p>{item.createdDate}</p>
                                    </div>
                                    <div className="flex space-x-4">
                                        <button onClick={() => StatusChange(item._id, item.status)} className="p-2 text-white rounded-full transition duration-300 ease-in-out transform hover:bg-pink-400 hover:scale-105 hover:rotate-12 hover:shadow-lg">
                                            <CiEdit className="text-pink-900 w-5 h-5" />
                                        </button>
                                        <button onClick={() => DeleteTask(item['_id'])} className="p-2 text-white rounded-full transition duration-300 ease-in-out transform hover:bg-pink-400 hover:scale-105 hover:rotate-12 hover:shadow-lg">
                                            <AiOutlineDelete className="text-pink-900 w-5 h-5" />
                                        </button>
                                    </div>
                                    <div className="py-1 bg-cyan-500 rounded-md">
                                        <p className="px-4 text-white animated fadeInUp">New</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Toaster position="bottom-center"/>
        </div>

    );
};

export default New;