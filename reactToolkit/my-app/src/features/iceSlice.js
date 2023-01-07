import { createSlice } from "@reduxjs/toolkit";
const initialState={
    numOfice:10
}
const iceSlice=createSlice({
    name:'ice',
    initialState,
    reducers:{
        orderice:(state,action)=>{
            state.numOfice-=1
        },
        restockedice:(state,action)=>{
            state.numOfice+=action.payload
        }

    }
})
export const {orderice,restockedice}=iceSlice.actions
export default iceSlice.reducer