import {configureStore} from '@reduxjs/toolkit'
import cakeReducer from '../features/cakeSlice'
import iceReducer from '../features/iceSlice'

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        ice:iceReducer,
    }
})

export default store