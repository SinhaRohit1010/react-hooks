import React, { useState } from 'react'

const Memo = () => {
  const [add, setAdd] = useState(0)
  const [sub, setSub] = useState(100)

  function Multi(){
    console.log(`if we dont use use Memo then this console will get displayed twice, 
      despite this has no relation with subtraction.`)
    return add*10
  }
  return (
    <>
    <div className='App'>
      <h1>Learning useMemo</h1>
      <br></br>
      <div>{Multi()}</div>
      <br></br>
      <button onClick={() => setAdd(add => add+1)}>Addition</button>
      <div>{add}</div>

      <button onClick={() => setSub(sub => sub-1)}>Subtraction</button>
      <div>{sub}</div>

    </div>
    </>
  )
}

export default Memo