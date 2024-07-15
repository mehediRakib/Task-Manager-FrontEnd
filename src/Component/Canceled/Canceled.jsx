import React, {useEffect} from 'react';
import {AiOutlineDelete, AiTwotoneCalendar} from "react-icons/ai";
import {CiEdit} from "react-icons/ci";
import {TaskListByStatus} from "../../ApiRequest/ApiRequests.js";
import {useSelector} from "react-redux";
import DeleteHelper from "../../Utility/DeleteHelper.js";
import StatusHelper from "../../Utility/Status-helper.js";

const Canceled =()=> {

    useEffect( () => {
        (async () => {
            await TaskListByStatus("Canceled")
        })()
    }, []);

    const CanceledTaskList = useSelector((state) => state.task.Canceled)

    const DeleteTask=async (id) => {
        await DeleteHelper(id,"Canceled")
    }

    const StatusChange=async (id,status)=>{
        await StatusHelper(id,status)
    }

    return (
        <div className="container mt-8">
            <div className="">
                <div className="flex justify-between">
                    <div className="ml-10">
                        <h3 className="font-semibold text-xl">Task Canceled</h3>
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
                <div className="flex flex-wrap mx-4 px-2">
                    {CanceledTaskList.map((item, i) => (
                        <div key={i.toString()} className="w-1/3 px-4 mt-10 mb-8">
                            <div className="h-60 shadow-md bg-white rounded-md">
                                <div className="ml-4 pt-4">
                                    <div className="font-semibold font-sans text-lg">
                                        <h4>{item.title}</h4>
                                    </div>
                                    <div className="mt-4 h-28 text-gray-600 overflow-y-auto">
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                                <div className="mt-6 ml-4 flex justify-between">
                                    <div className="flex space-x-2 text-gray-700">
                                        <AiTwotoneCalendar className="w-5 h-5" />
                                        <p>{item.createdDate}</p>
                                    </div>
                                    <div className="flex space-x-6 mr-8 ">
                                        <button onClick={()=>{StatusChange(item._id,item.status)}} className="flex items-center justify-center p-1 text-white rounded-full transition duration-300 ease-in-out transform hover:bg-pink-400 hover:scale-105 hover:rotate-12 hover:shadow-lg">
                                            <CiEdit className="text-pink-900 w-5 h-5" />
                                        </button>
                                        <button onClick={()=>DeleteTask(item['_id'])} className="flex items-center justify-center p-1 text-white rounded-full transition duration-300 ease-in-out transform hover:bg-pink-400 hover:scale-105 hover:rotate-12 hover:shadow-lg">
                                            <AiOutlineDelete className="text-pink-900 w-5 h-5" />
                                        </button>
                                    </div>
                                    <div className="py-1 bg-red-500 rounded-md mr-6">
                                        <p className="px-4 text-white">Canceled</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Canceled;