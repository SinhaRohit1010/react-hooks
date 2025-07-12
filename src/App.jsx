import { useState } from 'react'
import Counter from '../hooks/UseState/Counter'
import Title from '../hooks/UseEffect/Title'
import FetchData from '../hooks/UseEffect/FetchData'
import ChangeBg from '../hooks/UseLayout/ChangeBg'
import IndianGov from '../hooks/UseContext/Props-drilling/IndianGov'
import CompA from '../hooks/UseContext/CompA'
import Reducer from '../hooks/UseReducer/Reducer'
import Memo from '../hooks/UseMemo/Memo'
import Memo1 from '../hooks/UseMemo/Memo1'
import ChildA from '../hooks/UseCallback/ChildA'
function App() {
  
  // for ChildA
  const [add, setAdd] = useState(0)
  const Learning = () => {
    // some operation.
    // passing this function as a prop inside ChildA component.
  }
  return (
    <>
    {/* <Counter/> */}
    {/* <FetchData/> */}
    {/* <ChangeBg /> */}
    {/* <IndianGov /> */}
    {/* <CompA/> */}
    {/* <Reducer /> */}
    {/* <Memo /> */}
    {/* <Memo1 /> */}

    <div className='App'>
      <h1>Learning useCallback</h1>
      <ChildA Learning = {Learning}/>
      <h1>{add}</h1>
      <button onClick={() => setAdd(add => add+1)}>Addition</button>
    </div>
    
     </>
  )
}

export default App
