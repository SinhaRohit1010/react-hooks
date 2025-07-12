import React from 'react'
import StateGov from './StateGov'


const IndianGov = () => {
    const money = 500;
    
  return (
   <>
    <div>this is indian govt component</div>
    <StateGov money = {money}/>
   </>
  )
}

export default IndianGov