import { useState } from 'react'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/feature/counter/counterSlice'

function App() {
  const dispatch = useDispatch()
  const {counter} =useSelector(state => state.counter)

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      <div>{counter}</div>
      <button onClick={()=> dispatch(decrement())}>-</button>


    </div>
  )
}

export default App
