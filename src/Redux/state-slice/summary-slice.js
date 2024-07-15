import {createSlice} from "@reduxjs/toolkit";


const summarySlice=createSlice({
    name:"Summary",
    initialState:{
        value:[]
    },
    reducers:{
        SetSummary:(state,action)=>{
            state.value=action.payload;
        }
    }
})

export const {SetSummary}=summarySlice.actions;
export default summarySlice.reducer;