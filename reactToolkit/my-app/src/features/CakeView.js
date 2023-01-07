import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { orderCake,restockedCake } from './cakeSlice'

export default function CakeView() {
    const cakes=useSelector((state)=>state.cake.numOfCake)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>NUmber of Cakes Available={cakes}</h1>
      <button onClick={()=>dispatch(orderCake())}>order</button>
      <button onClick={()=>dispatch(restockedCake(5))}>Restocked</button>
    </div>
  )
}
