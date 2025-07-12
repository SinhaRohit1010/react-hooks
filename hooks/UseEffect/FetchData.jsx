import React, { useState } from 'react'

const FetchData = () => {
    const [state, setState] = useState([])

    useState(() => {
        const fetchData = async() => {
            try{
                const api = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await api.json()
                setState(data)
            }catch(err){
                console.log(`error is : ${err}`)
            }
        }
        fetchData()
    }, [])
  return (

    <>
    <div>
        <h2>users data : </h2>
        {state.map((user) => (
            <div key={user.id}>
                <h2>{user.name}</h2>
                <h1>{user.email}</h1>
            </div>
        ))}
    </div>
    </>
  )
}

export default FetchData