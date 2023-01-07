const configureStore=require('@reduxjs/toolkit').configureStore
const cakeReducer=require('../features/cake/cakeSlice')
const iceReducer=require('../features/iceCream/iceSlice')
const reduxLogger=require('redux-logger')
const { getDefaultMiddleware } = require('@reduxjs/toolkit')
const logger=reduxLogger.createLogger()


const store=configureStore({
    reducer:{
        cake:cakeReducer,
        ice:iceReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
})
module.exports=store