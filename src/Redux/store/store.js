import {configureStore} from "@reduxjs/toolkit";

// import settingsReducer from '../../Redux/state-slice/settings-slice.js';
import taskReducer from '../../Redux/state-slice/task-slice.js';

export default  configureStore({
    reducer:{
        // settings:settingsReducer,
        task:taskReducer
    }
})