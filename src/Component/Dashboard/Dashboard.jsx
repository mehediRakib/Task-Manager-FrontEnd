import React, { useEffect} from 'react';
import {summaryRequest} from "../../ApiRequest/ApiRequests.js";
import {useSelector} from "react-redux";

const Dashboard = () => {
    useEffect(() => {
        (async () => {
            await summaryRequest();
        })()
    }, []);
    const summaryList =  useSelector((state) => state.summary.value);
    return (
                <div className="container mt-5">
                    <div className="grid grid-cols-4 px-2">
                        {
                            summaryList.map((item, i) =>
                                <div  key={i.toString()} className=" px-2 mb-8 ">
                                    <div className="h-48 shadow-md bg-white rounded-lg ring-1 ring-pink-300">
                                        <div className="flex justify-center pt-8 bg-pink-300">
                                            <h2 className="font-semibold text-lg pb-2 text-gray-700 animated fadeInUp">{item['_id']}</h2>
                                        </div>
                                        <hr className="border-pink-500 border"/>
                                        <div className="text-center pt-8">
                                            <h3 className="text-xl font-semibold animated fadeInUp">{item['sum']}</h3>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>
    );
};

export default Dashboard;