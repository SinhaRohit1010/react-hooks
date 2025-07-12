import React, { useLayoutEffect, useState } from 'react'

const ChangeBg = () => {
    const [color, setColor] = useState('black')

    useLayoutEffect(() => {
        document.body.style.backgroundColor = color;

    }, [color] ) // dependency array 
  return (
    <>
        <h2>Current backgroundColor : {color}</h2>
        <button onClick={() => setColor('red')}>Red</button>
        <button onClick={() => setColor('green')}>Green</button>
        <button onClick={() => setColor('cyan')}>Cyan</button>
    </>
  )
}

export default ChangeBg