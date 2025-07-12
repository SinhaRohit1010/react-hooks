import React, { useEffect, useState } from 'react'

const Title = () => {
    const [counter, setCount] = useState(0);

    // useeffect hook automatically runs, when the browser is refreshed.
    // Twice beacuse of lifecycle method.

    useEffect(() => {
        console.log("use effect is running")
        document.title = counter;
    }, [counter])
  return (
    <div>
        <h2>Count : {counter}</h2>
        <button onClick={() => setCount(counter+1)}>Increment</button>
        <button onClick={() => setCount(counter -1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Title