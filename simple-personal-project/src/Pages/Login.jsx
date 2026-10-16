import React from 'react'
import {useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axiosBase from '../axiosConfig'
import classes from './Login.module.css'
import { BsBarChartFill } from "react-icons/bs";

function Login() {

  const navigate=useNavigate()
  const emailDom=useRef()
  const passwordDom=useRef()

  async function handleSubmit(e) {
    e.preventDefault();
    const emailValue=emailDom.current.value;
    const passValue=passwordDom.current.value;
        if(
      !emailValue||
      !passValue
    ){
      alert("Please provide all required information")
      return
    }
    try{
      const {data}=await axiosBase.post('/user/login',{
        email:emailValue,
        password:passValue
      })
      alert("Logged in successfully.")
      localStorage.setItem('token',data.token)
      console.log(data)
      navigate('/')
    }catch (error){
      alert(error?.response?.data?.message)
      console.log(error.response.data)
    }
  }
  return (
    <section className={classes["container"]}>
        <div className={classes["left-container"]}>
          <div className={classes["dashboard"]}>
            <h3><BsBarChartFill style={{color:"orange"}} /> Dashboard</h3>
          </div>
          <div className={classes["get-started"]}>
            <h2>Get Started With Your
            <br />
            <span className={classes["high-lite"]}>Account</span>
            </h2>
            <p>Smart insight better decision</p>
          </div>
          <div className={classes["login-direction"]}>
            <h4> Don't have an account?<br /><Link to={'/register'} style={{color:"orangered"}}>Register</Link></h4>
          </div>
        </div>

        <div className={classes["right-container-login"]}>
          <div className={classes["form-title"]}>
            <h2>WellCome Back</h2>
            <span>Login to your account to continue</span>
          </div>
          <br />
          <form className={classes["form-list"]} onSubmit={handleSubmit}>
          <div>
            <span>email</span>
            <br />
            <input ref={emailDom} type="email" placeholder='email'/>
          </div>
          <div>
            <span>password</span>
            <br />
            <input ref={passwordDom} type="password" placeholder='password' />
          </div>
          <br />
          <div>
            <button type='submit'>Login</button>
          </div>
        </form>
      </div> 
    </section>
  )
}

export default Login
