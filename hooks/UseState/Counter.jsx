import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCount] = useState(0);
    
    const increment = () => {
        setCount(counter => counter + 1)
    }
    const decrement = () => {
        setCount(counter => counter + -1)
    }
    const reset = () => {
        setCount(0)
    }
  return (
    <div>
        <h2>Count : {counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter