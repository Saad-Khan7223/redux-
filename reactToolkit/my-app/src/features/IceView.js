import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { orderice,restockedice } from './iceSlice'

export default function CakeView() {
    const ices=useSelector((state)=>state.ice.numOfice)
    const dispatch=useDispatch()
  return (
    <div>
      <h1>NUmber of Ice Available= {ices}</h1>
      <button onClick={()=>dispatch(orderice())}>order</button>
      <button onClick={()=>dispatch(restockedice(4))}>Restocked</button>
    </div>
  )
}
