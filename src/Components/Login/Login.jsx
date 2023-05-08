
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [Input, setInput] = useState({
    username: "",
    password: "",
  });
const navigate = useNavigate()
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)

  const inputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...Input, [name]: value });
   
  };

  const validate = (values)=>{
    var error = {}
    if(!values.username){
      error.username ="Enter Username"
    }
    if(!values.password){
      error.password ="Enter Password"
    }
    return error
  }

  const validation = (e)=>{
    console.log(Input);
    e.preventDefault()
    setformErrors(validate(Input))
    setIssubmit(true)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      axios.post("http://localhost:2000/api/login/",Input).then((response)=>{
        console.log(response);
        if (response.data.success === true) {
          if (response.data.role === "1") {
            localStorage.setItem("name", response.data.username)
            localStorage.setItem("loginId", response.data.login_id)
            localStorage.setItem("role", response.data.role)
            localStorage.setItem("student_id", response.data.student_id)
              sessionStorage.setItem("currentloggedin", response.data.name);
              navigate("/user")
          }
          // else if (response.data.role === "2") {
          //   localStorage.setItem("name", response.data.username)
          //   localStorage.setItem("loginId", response.data.login_id)
          //   localStorage.setItem("role", response.data.role)
          //   localStorage.setItem("company_id", response.data.company_id)
          //   sessionStorage.setItem("currentloggedin", response.data.username);
          //     navigate("/Company")
          // }
         
      }
      }).catch((err)=>{
        console.log(err);
      })
    }
  }
  return (
    <div id="bg"
    style={{ backgroundImage: "url(img/slide/travelling-nepal.jpg)"  }}>
     <br/><br/> <br/>
     <br/><div className="container-fluid" id="log"
    >
<div className="row">
<div className="col-sm-4" />
</div>
    <div className="row">
      <div className="col-sm-4" />
      <div className="col-sm-4">
        <h3>
          <br />
          &nbsp;&nbsp;Login
          <br />
          <br />
        </h3>
      </div>
      <div className="col-sm-4" />
    </div>
    <div className="row">
      <div className="col-sm-4" />
      <div className="form-group">
      <form onSubmit={validation}>
      <span style={{color:"red"}} > {formErrors.username? formErrors.username :""}</span>
            <input
              type="text"
              onChange={inputChange}
              onClick={()=>{setformErrors({...formErrors,username:""})}}
              placeholder="Enter Username"
              name="username"
              
            />
          <br />
          <span style={{color:"red"}} > {formErrors.password? formErrors.password :""}</span>
            <input
              type="password"
              onChange={inputChange}
              onClick={()=>{setformErrors({...formErrors,password:""})}}
              placeholder="Enter Password"
              name="password"
              
            />
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">Forgot Password?</a>
          <br />
          <br />
          <p>
            <button type="button" className="log-btn scrollto">
              Login
            </button>
          </p>
          <br />
          <br />
        </form>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Login