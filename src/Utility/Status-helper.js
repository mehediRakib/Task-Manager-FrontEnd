import Swal from "sweetalert2";
import {TaskListByStatus, updateStatus} from "../ApiRequest/ApiRequests.js";

const StatusHelper=async (id,status)=>{

      await Swal.fire({
        title: "Select status",
        input: "select",
        inputOptions: {
           New:"New",
            Completed:"Completed",
            Progress:"Progress",
            Canceled:"Canceled",
        },
        inputPlaceholder: status,
        showCancelButton: true,
        inputValidator: (value) => {
            return new Promise(async (resolve) => {
                if (value === "") {
                    resolve();
                } else {
                    await updateStatus(id, value)
                    await TaskListByStatus(status);
                    resolve();
                }
            });
        }
    });
}

export default StatusHelper;