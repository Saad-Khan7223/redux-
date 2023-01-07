const { cakeActions } = require('../cake/cakeSlice')

const createSlice=require('@reduxjs/toolkit').createSlice
const initialState={
    numOfIceCream:10
}
const iceSlice=createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        orderedIce:(state,action)=>{
            state.numOfIceCream--
        },

        restocked:(state,action)=>{
            state.numOfIceCream+=action.payload
        }

    },
    // extraReducers:{
    //     ['cake/ordered']:(state,action)=>{
    //         state.numOfIceCream--
    //     }
    // }
    extraReducers:(builder)=>{
        builder.addCase(cakeActions.ordered,(state)=>{
            state.numOfIceCream--
        })
    }
})

module.exports=iceSlice.reducer;
module.exports.iceActions=iceSlice.actions
