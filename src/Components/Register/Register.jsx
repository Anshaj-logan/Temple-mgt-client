import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [inputs, setInputs] = useState({
    
    name:"",
    email:"",
    username: "",
    password: "",
    phone_no:"",
    house_name:"",
    place:"",
    pin:"",
    
    
  });
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)
  // const [passwordMatch, setPasswordMatch] = useState(true);

  

  const validate = (values)=>{
    var error = {}
    if(!values.name){
      error.name ="Enter Name"
    }
    if(!values.username){
      error.username ="Enter Username"
    }
    if(!values.password){
      error.password ="Enter Password"
    }
   
    if(!values.house_name){
      error.house_name ="Enter house name"
    }
    if(!values.email){
      error.email ="Enter Your Email"
    }
    if(!values.phone_no){
      error.phone_no ="Enter Phone Number"
    }
    if(!values.place){
      error.place ="Enter Location"
    }
   
   
    if(!values.pin){
      error.pin ="Enter Pincode"
    }
   
    return error
  }



    const setRegister = (event) => {
  
      const name = event.target.name;
      const value = event.target.value;   
      setInputs({...inputs, [name]: value });
      console.log(inputs);
    };
  
    const registerSubmit = (event) => {
   
      event.preventDefault();
   console.log(formErrors);
      setformErrors(validate(inputs))
      console.log(Object.keys(formErrors).length);
    setIssubmit(true)
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(inputs);
      axios.post('http://localhost:2000/api/register/',inputs).then((data)=>{
        console.log(data);
        // console.log(data.response.data.message);
        toast(data.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        
       
      }).catch((err)=>{
        console.log(err);
        toast(err.response.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      })
    }
    };
  return (
    <div id="reg"style={{ backgroundImage: "url(img/images/diwali-.webp)"  }}>
    


<div className="col-md-6">
   
   <br/><br/><br/><br/><br/><br/>
    <h3 className="tile-title">
      Register
    </h3>
    <div className="tile-body">
        <ToastContainer />
  <form onSubmit={registerSubmit}>
        <div className="form-group row">
          <label className="control-label col-md-3">
           
          </label>
          <div className="col-md-8">
            <span style={{color:"red"}} > {formErrors.name? formErrors.name :""}</span>
        <input
        name="name"
        value={inputs.name || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,name:""})}}
              type="text"
              placeholder="Enter full name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">
           
          </label>
          <div className="col-md-8">
             <span style={{color:"red"}} > {formErrors.email? formErrors.email :""}</span>
        <input
        name="email"
        value={inputs.email || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,email:""})}}
              type="text"
              placeholder="Enter email address"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">
            {/* <v>House Name</v> */}
          </label>
          <div className="col-md-8">
             <span style={{color:"red"}} > {formErrors.house_name? formErrors.house_name :""}</span>
        <input
        name="house_name"
        value={inputs.house_name || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,house_name:""})}}
              type="text"
              placeholder="Enter house name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">
           
          </label>
          <div className="col-md-8">
          <span style={{color:"red"}} > {formErrors.place? formErrors.place :""}</span>
        <input
        name="place"
        value={inputs.place || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,place:""})}}
              
              type="text"
              placeholder="Enter place"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">
            
          </label>
          <div className="col-md-8">
            <span style={{color:"red"}} > {formErrors.pin? formErrors.pin :""}</span>
        <input
        name="pin"
        value={inputs.pin || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,pin:""})}}
              type="text"
              placeholder="Enter pin"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">
           
          </label>
          <div className="col-md-8">
            <span style={{color:"red"}} > {formErrors.phone_no? formErrors.phone_no :""}</span>
        <input
        name="phone_no"
        value={inputs.phone_no || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,phone_no:""})}}
              type="text"
              placeholder="Enter phone number"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">
          
          </label>
          <div className="col-md-8">
             <span style={{color:"red"}} > {formErrors.username? formErrors.username :""}</span>
        <input
        name="username"
        value={inputs.username || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,username:""})}}
              type="text"
              placeholder="Enter User Name"
            />
          </div>
        </div>
       
        <div className="form-group row">
          <label className="control-label col-md-3">
          
          </label>
          <div className="col-md-8">
           <span style={{color:"red"}} > {formErrors.password? formErrors.password :""}</span>
        <input
        name="password"
        value={inputs.password || ""}
        onChange={setRegister} 
        onClick={()=>{setformErrors({...formErrors,password:""})}}
              type="text"
              placeholder="Enter Password"
            />
          </div>
        </div>
         <br />
        <p>
          <button type="submit" className="btn btn-success">
            REGISTER
          </button>
        </p>
      </form>
    </div>
    <div className="tile-footer"><br/><br/>
      
      <div className="row">
        <div className="col-md-8 col-md-offset-4"><br/><br/>
          </div></div>
    </div>
  </div>
</div>



  // </div>
//   </div>
  )
}

export default Register