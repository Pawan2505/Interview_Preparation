import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../redux/Action';

const CounterApp = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch();

  return (
    <div>

        <h1>{count}</h1>
        <button onClick={()=>dispatch(increase())}>Increment</button>
        <button onClick={()=>dispatch(decrease())}>Decrement</button>
      
    </div>
  )
}

export default CounterApp
