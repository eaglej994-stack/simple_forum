import React from 'react'
import {useRef} from 'react'
import { Link, useBeforeUnload } from 'react-router-dom'
import axiosBase from '../axiosConfig'
import { useNavigate } from 'react-router-dom'
import classes from './Register.module.css'
import { BsBarChartFill } from "react-icons/bs";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoLogoApple } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

function Register() {
  const navigate=useNavigate()


  const userNameDom=useRef()
  const firstNameDom=useRef()
  const lastNameDom=useRef()
  const emailDom=useRef()
  const passwordDom=useRef()
  async function handleSubmit(e) {
    e.preventDefault();
    const usernameValue=userNameDom.current.value;
    const firstnameValue=firstNameDom.current.value;
    const lastnameValue=lastNameDom.current.value;
    const emailValue=emailDom.current.value;
    const passValue=passwordDom.current.value;
        if(
      !usernameValue||
      !firstnameValue||
      !lastnameValue||
      !emailValue||
      !passValue
    ){
      alert("Please provide all required information")
      return
    }
    try{
      await axiosBase.post('/user/register',{
        userName:usernameValue,
        firstName:firstnameValue,
        lastName:lastnameValue,
        email:emailValue,
        password:passValue
      })
      alert("Registered successfully. please login")
      navigate('/login')

    }catch (error){
      alert("something went wrong")
      console.log(error.response)
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
          <p>Create Your account and take the <br />
          first step toward smarter <br />
          business management</p>
        </div>

        <div className={classes["login-direction"]}>
          <h4> Already have an account?<br /><Link to={'/login'} style={{color:"orangered"}}>Login </Link></h4>
          
        </div>

      </div>

      <div className={classes["right-container"]}>
          <div className={classes["form-title"]}>
            <h2>Create Your Account</h2>
            <span>Fill in your details to get started</span>
          </div>
          <br />
          <form className={classes["form-list"]} onSubmit={handleSubmit}>
            <div>
              <span>User Name</span>
              <br />
              <input ref={userNameDom} type="text" placeholder='Enter your User Name' />
            </div>
            <div>
              <span>First Name</span>
              <br />
            <input ref={firstNameDom}  type="text" placeholder='Enter Your First Name' />
            </div>
            <div>
              <span>Last Name</span>
              <br />
              <input ref={lastNameDom} type="text" placeholder='Enter Your Middle Name' />
            </div>
            <div>
              <span>email</span>
              <br />
              <input ref={emailDom} type="email" placeholder='Enter Your Email' />
            </div>
            <div>
              <span>Password</span>
              <br />
              <input ref={passwordDom} type="password" placeholder='Enter Your Password' />
            </div>
            <div >
              <p>I agree to the <Link to={''} style={{color:"orange"}}>Terms & Conditions</Link> and <Link to={''} style={{color:"orange"}}>Privacy Policy</Link></p>
            </div>
            <div>
              <button ><span>Create an Account</span> <IoArrowForward /></button>
            </div>
          </form>
          <div className={classes["buttom"]}>
            <h5>or contact us</h5>
            <div>
              <span><button><FaGoogle /> Google</button></span>
              <span><button><FaFacebook /> Facebook</button></span>
              <span><button><IoLogoApple /> Apple</button></span>
            </div>

          </div>
      

      </div>
      
    </section>
  )
}

export default Register
