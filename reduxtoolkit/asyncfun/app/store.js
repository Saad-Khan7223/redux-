const configureStore=require('@reduxjs/toolkit').configureStore
const userReducer=require('../features/userSlice')

const store=configureStore({
    reducer:{
        user:userReducer
    }
})
module.exports=store