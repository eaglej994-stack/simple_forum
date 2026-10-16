import { createContext, useEffect, useState } from 'react'
import {BrowserRouter, Route, Routes, useNavigate}from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import axiosBase from './axiosConfig'
export const appState=createContext()
function App() {
  const [user,setUser]= useState({})
  const token = localStorage.getItem('token')
  const navigate=useNavigate()
  async function checkUser() {
    try{
      const {data} = await axiosBase.get("/user/check",{
        headers:{
          Authorization: `Bearer ${token}`
      }
    })
    setUser(data)
    }catch(error){
      console.log(error.response)
      navigate("login")
    }   
  }
  useEffect(()=>{
    checkUser();
  }, [])
  return (
    <>
    <appState.Provider value={{user,setUser}}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </appState.Provider>
      
    </>
  )
}

export default App
