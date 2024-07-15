import {configureStore} from "@reduxjs/toolkit";

import settingsReducer from '../../Redux/state-slice/settings-slice.js';
import taskReducer from '../../Redux/state-slice/task-slice.js';
import summarySlice from "../../Redux/state-slice/summary-slice.js";
import ProfileSlice from "../../Redux/state-slice/profile-slice.js";


export default  configureStore({
    reducer:{
        task:taskReducer,
        settings:settingsReducer,
        summary:summarySlice,
        profile:ProfileSlice,
    }
})