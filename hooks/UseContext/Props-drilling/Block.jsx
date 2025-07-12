import React from 'react'
import People from './People'


const Block = ({money}) => {
  return (
   <>
    <div>this is block component</div>
    <People money = {money}/>
   </>
  )
}

export default Block