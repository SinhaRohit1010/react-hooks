import React, { useMemo, useState } from 'react'

const Memo1 = () => {
  const [add, setAdd] = useState(0)
  const [sub, setSub] = useState(100)

  const Multiplication = useMemo(
    // to make the function run only when addition is called, we need to 
    // pass "add" in the dependency list.
    function Multi(){
    console.log(`By using useMemo, this will run only when "add" button is 
        pressed.`)
    return add*10
  }, [add])
  return (
    <>
    <div className='App'>
      <h1>Learning useMemo</h1>
      <br></br>
      <div>{Multiplication}</div>
      <br></br>
      <button onClick={() => setAdd(add => add+1)}>Addition</button>
      <div>{add}</div>

      <button onClick={() => setSub(sub => sub-1)}>Subtraction</button>
      <div>{sub}</div>

    </div>
    </>
  )
}

export default Memo1