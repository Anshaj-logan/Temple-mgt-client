import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Scheduled = () => {
  const navigate = useNavigate()
  const [pooja, setpooja] = useState([]);
  console.log(pooja);
  useEffect(() => {
    axios
      .get(
        "http://localhost:2000/api/pooja/view-pooja/"
      )
      .then((response) => {
        if (response.data.success == true) {
          setpooja(response.data.details);
        }
      });
  }, []);
  const book_pooja = (id)=>{
   navigate(`/book/${id}`)
      
    };
  return (
    <div id="schedulhero"
    style={{ background:"#001714"
    }}>
        <br/><br/> <br/> <br/><br/>
        <br/>
        <div className="section-title">
      <h2>
        <f>Scheduled</f> <span>Pooja</span>
      </h2>
    </div>
    <div className="col-md-12">
      <div className="tile">
        <div className="tile-body">
          <div className="table-responsive">
         
          <table className="table table-hover table-bordered" id="sampleTable">
                <thead>
                  <tr>
                    <th>slNo.</th>
                    <th>Pooja</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {pooja.map((data,key) => (
                    <tr>
                      <td>{key+1}</td>
                      <td>{data.pname}</td>
                      <td>{data.category}</td>
                      <td>{data.amound}</td>
                      <td><div className="text-center">
                        <button type="submit" onClick={()=>{book_pooja(data._id)}} className='btn btn-primary'>Book</button>
                        {/* <button type="submit">Book</button> */}
                      </div></td>
                    </tr>
                  ))}

                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Scheduled