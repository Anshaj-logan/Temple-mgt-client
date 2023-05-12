import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bookings = () => {
    const [pooja, setpooja] = useState([]);
    console.log(pooja);
    const user_id = localStorage.getItem("user_id")
    useEffect(() => {
      axios
        .get(
          `http://localhost:2000/api/pooja/view-pooja/${user_id}`
        )
        .then((response) => {
            console.log(response);
          if (response.data.success == true) {
            setpooja(response.data.details);
          }
        });
    }, []);
   
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
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {pooja.map((data,key) => (
                    <tr>
                      <td>{key+1}</td>
                      <td>{data.poojaName}</td>
                      <td>{data.category}</td>
                      <td>{data.amount}</td>
                      <td>{data.date}</td>
                     
                      
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Bookings;
