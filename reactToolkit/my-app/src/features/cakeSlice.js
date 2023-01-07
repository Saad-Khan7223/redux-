import { createSlice } from "@reduxjs/toolkit";
const initialState={
    numOfCake:10
}
const cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        orderCake:(state,action)=>{
            state.numOfCake-=1
        },
        restockedCake:(state,action)=>{
            state.numOfCake+=action.payload
        }

    }
})
export const {orderCake,restockedCake}=cakeSlice.actions
export default cakeSlice.reducer