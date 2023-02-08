import React from "react";
import "./style.css";
import axios from "axios";
import { redirect } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import PlantBackground from "../../components/PlantBackground"

const LoginRegister = () => {
  const [login, setLogin] = useState(true);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target.form.elements[0].value;
    const password = e.target.form.elements[1].value;
    const details = {
      username: username,
      password: password,
    };
    await axios
      .post("http://localhost:5000/login", details)
      .then((response) => {
        sessionStorage.setItem("token", response.data.access_token);
        sessionStorage.setItem("username", username);
        // remove()
        navigate("/home");
        // document.body.removeChild(canvas)
        // document.body.removeElement(canvas)
      })
      .catch((error) => console.log("Invalid Credentials"));
  };

  // const remove= () => {
  //   document.body.removeElement(canvas)
  //  const canvasmain=  document.getElementsByClassName("canvas-main")
  //  canvasmain.removeElement()
  //   // let canvas = document.createElement("canvas"),
  //   // ctx = canvas.getContext("2d"),
  //   // W,
  //   // H;
  // }

  const handleRegister = async (e) => {
    e.preventDefault();

    const details = {
      username: e.target.form.elements[0].value,
      email: e.target.form.elements[1].value,
      password: e.target.form.elements[2].value,
    };
    await axios
      .post("http://localhost:5000/register", details)
      .then(setLogin(true))
      .catch((error) => console.log("Invalid Credentials"));
  };

  return (
    <>
      {/* <Canvas className="canvas-home"> */}
      {/* <PlantBackground /> */}
      <div id="login-back" className="login-back"></div>

      <div id="login-page" className="login-page">
        <div id="plantintologin">House your plant?</div>
        {/* <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="500px"
          height="500px"
          viewBox="0 0 500 500"
          enable-background="new 0 0 500 500"
          xml:space="preserve"
        >
          <path
            fill="none"
            stroke="red"
            id="red"
            stroke-opacity="1"
            d="M179.38 313.55A94.65 94.65 0 0 1 155 250a95 95 0 1 1 95 95 94.6 94.6 0 0 1-60.33-21.6"
          />
          <text>
            <textPath xlink:href="#red" class="text1" startOffset="0%">
              House
            </textPath>
          </text>

          <path
            fill="none"
            stroke="green"
            stroke-opacity="1"
            id="green"
            d="M145 350a144.5 144.5 0 0 1-40-100c0-80.08 64.92-145 145-145s145 64.92 145 145-64.92 145-145 145c-33.15 0-63.7-11.12-88.12-29.84"
          />
          <text>
            <textPath xlink:href="#green" class="text2" startOffset="0%">
              Your
            </textPath>
          </text>

          <path
            fill="none"
            stroke="blue"
            stroke-opacity="1"
            id="blue"
            d="M114.16 382.84A189.38 189.38 0 0 1 60 250c0-104.94 85.06-190 190-190 104.93 0 190 85.06 190 190 0 104.93-85.07 190-190 190-45.35 0-87-15.9-119.66-42.4"
          />
          <text>
            <textPath xlink:href="#blue" class="text3" startOffset="7%">
              Plant?
            </textPath>
          </text>
        </svg> */}

        <div className="form">
          {login ? (
            <form className="login-form">
              <label className="hidden-label" htmlFor="username">
                Username
              </label>
              <input type="text" placeholder="username" />
              <label className="hidden-label" htmlFor="password">
                Password
              </label>
              <input type="password" placeholder="password" />
              <button onClick={handleLogin}>login</button>
              <p className="message">
                Not registered?{" "}
                <a href="#" onClick={() => setLogin(false)}>
                  Create an account
                </a>
              </p>
            </form>
          ) : (
            <form className="register-form">
              <input type="text" placeholder="name" />
              <input type="text" placeholder="email address" />
              <input type="password" placeholder="password" />
              <button onClick={handleRegister}>create</button>
              <p className="message">
                Already registered?{" "}
                <a href="#" onClick={() => setLogin(true)}>
                  Sign In
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
      {/* </Canvas> */}
    </>
  );
};

export default LoginRegister;
