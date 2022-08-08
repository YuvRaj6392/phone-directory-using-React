import React, { useReducer } from 'react'
const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'increment':
            return {count:state.count+1}
        case 'decrement':
            return {count:state.count-1}
        default:
            return state
    }
}
export default function App() {
    const [state,dispatch]=useReducer(reducer,{count:0});
  return (
    <div>
        <button onClick={()=>
        {
            dispatch({type:'increment'})
        }}>Increment</button>
        <span>{state.count}</span>
        <button onClick={()=>{
            dispatch({type:'decrement'})
        }}>Decrement</button>
    </div>
  )
}
