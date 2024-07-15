import Swal from "sweetalert2";
import {DeleteTaskRequest, TaskListByStatus} from "../ApiRequest/ApiRequests.js";

const DeleteHelper=(id,status)=>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "bg-green-500 text-white  py-1 px-3 rounded mx-2 hover:bg-green-400 ring-2 ring-green-300",
            cancelButton: "bg-red-500 text-white py-1 rounded px-3 mx-2 hover:bg-red-400 focus:ring-2 focus:ring-red-300"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then(async (result) => {
        if (result.isConfirmed) {
            await DeleteTaskRequest(id)
            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            });
            await TaskListByStatus(status)
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your imaginary file is safe :)",
                icon: "error"
            });
        }
    });
}

export default DeleteHelper