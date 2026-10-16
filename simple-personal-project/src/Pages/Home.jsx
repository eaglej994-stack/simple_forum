import React from 'react'
import { useContext } from 'react'
import { appState } from '../App'

function Home() {
  const {user}=useContext(appState)
  
  return (
    <div>
      <h1>this home</h1>
      <br />
      <br />
      <br />
      <h2>WellCome : {user.userName}</h2>
    </div>
  )
}

export default Home
