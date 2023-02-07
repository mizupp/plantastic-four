import React from "react"
import "./style.css"
import axios from 'axios'
import {redirect} from 'react-router-dom'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
//import PlantBackground from "../../components/PlantBackground"

const LoginRegister = () => {

const [login, setLogin] = useState(true);
const navigate = useNavigate()

const handleLogin = async (e) => {
  e.preventDefault()
  const username = e.target.form.elements[0].value
  const password = e.target.form.elements[1].value
  const details = {
    username: username,
    password: password
  }
  await axios.post('http://localhost:5000/login', details)
    .then(response => {
        sessionStorage.setItem('token', response.data.access_token),
        sessionStorage.setItem('username', username)})
    .then(navigate('/home'))
    .catch(error => console.log('Invalid Credentials'))
   
}

const handleRegister = async (e) => {
  e.preventDefault()

  const details = {
    username: e.target.form.elements[0].value,
    email: e.target.form.elements[1].value,
    password: e.target.form.elements[2].value
  }
  await axios.post('http://localhost:5000/register', details)
  .then(setLogin(true))
  .catch(error => console.log('Invalid Credentials'))
 
}


return (
    <>
    {/* <PlantBackground /> */}
        <div id="login-page" className="login-page">
          {/* <p id="plantintologin">House your plant doing?</p> */}
          <svg viewBox="15 20 300 80">
        <path id="curve" fill="transparent" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
        <text>
          <textPath  id="plantintologin" xlinkHref="#curve">
          House your plant doing?
          </textPath>
        </text>
      </svg>
        <div className="form">
          {
            login ? <form className="login-form">
              <input type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button onClick={handleLogin}>login</button>
              <p className="message">Not registered? <a href="#" onClick={() => setLogin(false)}>Create an account</a></p>
            </form> :<form className="register-form">
              <input type="text" placeholder="name" />
              <input type="text" placeholder="email address" />
              <input type="password" placeholder="password" />
              <button>create</button>
              <p className="message">Already registered? <a href="#" onClick={() => setLogin(true)}>Sign In</a></p>
            </form>
          }
        </div>
      </div>
    </>
)
}

export default LoginRegister;