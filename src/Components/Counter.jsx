import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/CounterSlice'

function Counter() {

  const [amount,setAmount]=useState("")
    const dispatch=useDispatch()
    const count=useSelector((state)=>state.counter.count)

    const handleIncrement=()=>{
      if(amount==""){
        alert("please provide amount..!")
     }
     else{
      // dispatch action
      dispatch(incrementByAmount(Number(amount)))
     }
    }

  return (
    <div style={{height:"70vh"}} className='w-100 d-flex justify-content-center align-items-center'> 
    <div className='d-flex justify-content-center align-items-center border rounded p-5 w-50 flex-column'>
    <h1 style={{fontPalette:"100px"}}>{count}</h1>
    <div className="d-flex justify-content-between w-50 mt-5">
        <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
        <button onClick={()=>dispatch(increment())} className='btn btn-success'>Increment</button>
    </div>
    <div className='d-flex m-5 flex-wrap'>
      
      <input onChange={(e)=>setAmount(e.target.value)} type="text" className="form-control m-2" placeholder='Enter the amount'/>
      <button onClick={handleIncrement} 
      
      className='btn btn-info ms-3' > Increment by amount</button>
  
    </div>
    </div>
        
    </div>
  )
}

export default Counter