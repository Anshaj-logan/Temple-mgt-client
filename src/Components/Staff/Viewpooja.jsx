import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Viewpooja = () => {

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
  const delete_pooja = (id)=>{
    axios
    .get(
      `http://localhost:2000/api/pooja/delete/${id}`
    )
    .then((response) => {
      if (response.data.success == true) {
          window.location.reload()
        }
      })
      
    };
  
  return (

    <div id="acchero"
      style={{
        background: "#001714"
      }}>
      <br /><br /> <br /> <br /><br />
      <br />
      <div className="section-title">
        <h2>
          <span>Poojas</span>
        </h2>
      </div>
      <ToastContainer />
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
                        <button type="submit" onClick={()=>{delete_pooja(data._id)}} className='btn btn-danger'>Delete</button>
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

export default Viewpooja