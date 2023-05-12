import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Staffaddpooja = () => {

  const navigate = useNavigate()
  const [inputs, setInputs] = useState({ pname:"", category:"", amound:"" })
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)

  

  const validate = (values)=>{
    var error = {}
    if(!values.pname){
      error.pname ="Enter pooja name"
    }
    if(!values.category){
      error.category ="Choose category"
    }
    if(!values.amound){
      error.amound ="Enter amount"
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
      console.log("ji");
      event.preventDefault();
      setformErrors(validate(inputs))
      console.log((formErrors));
    setIssubmit(true)
    if(Object.keys(formErrors).length === 0 && isSubmit){
     
      axios.post('http://localhost:2000/api/pooja/add-pooja',inputs).then((data)=>{
        console.log(data);
        navigate('/viewpoojastaff')
        // console.log(data.response.data.message);
       
        
       
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
        <div style={{ background:"#001714"
        }}>
            <section id="book-a-table" className="book-a-table">
      <div className="container">
        <div className="section-title">
          <h2>
            <br/><br/><f>Add</f> <span>a Pooja</span>
          </h2>
        </div>
        <ToastContainer />
        <form
        
          role="form"
          className="php-email-form"
        >
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group">
            <span style={{color:"red"}} > {formErrors.pname? formErrors.pname :""}</span>
              <input
                type="text"
                name="pname"
                onChange={setRegister}
                className="form-control"
                id="name"
                placeholder="Name"
                data-rule="minlen:3"
                data-msg="Please enter at least 3 chars"
              />
              <div className="validate" />
            </div>
            <div className="col-lg-4 col-md-6 form-group">
        {/* <label for="exampleFormControlSelect1"></label> */}
        <span style={{color:"red"}} > {formErrors.category? formErrors.category :""}</span>
        <select class="form-control" name='category' onChange={setRegister} id="exampleFormControlSelect1">
          <option defaultChecked>Category</option>
          <option value={'Kubera'}>Kubera</option>      
          <option value={'Ganapathy'}>Ganapathy</option>
          <option value={'General'}>General</option>
          <option value={'Special'}>Special</option>
        </select>
      </div>
      </div>
      <div className="row">
            <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
            <span style={{color:"red"}} > {formErrors.amound? formErrors.amound :""}</span>
              <input
                type="text"
                className="form-control"
                onChange={setRegister}
                name="amound"
                id="amount"
                placeholder="Amount"
    
              />
              <div className="validate" />
            </div>
            </div>
          <div className="text-center">
            <button type="button" className='btn btn-success' onClick={registerSubmit}>Add</button>
          </div>
        </form>
      </div>
    </section>
    
        </div>
      )
    }
    

export default Staffaddpooja