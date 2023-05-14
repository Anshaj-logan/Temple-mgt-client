import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Userdon = () => {
  const login_id = localStorage.getItem("loginId");
  const [inputs, setInputs] = useState({
    login_id: login_id,
  });
  const setRegister = (event) => {
    console.log(event.target);
    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  const registerSubmit = (event) => {
    event.preventDefault();

    //   setformErrors(validate(inputs))
    // setIssubmit(true)
    // if(Object.keys(formErrors).length === 0 && isSubmit){
    axios
      .post(` http://localhost:2000/api/user/add-donation`, inputs)
      .then((data) => {
        console.log(data);
        setInputs({});
        window.location.reload();
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
      })
      .catch((err) => {
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
      });
  };
  return (
    <div style={{ background: "#001714" }}>
      <section id="book-a-table" className="book-a-table">
        <div className="container">
          <div className="section-title">
            <h2>
              <br />
              <br /> <span>Donation</span>
            </h2>
          </div>
          <ToastContainer />
          <form onSubmit={registerSubmit}>
            <div className="row">
              <div className="col-lg-4 col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  onChange={setRegister}
                  placeholder="Name"
                  data-rule="minlen:3"
                  data-msg="Please enter at least 3 chars"
                />
                <div className="validate" />
              </div>
              <div className="col-lg-4 col-md-6 form-group">
                <input
                  type="text"
                  name="hname"
                  onChange={setRegister}
                  className="form-control"
                  placeholder="House Name"
                  data-rule="minlen:3"
                  data-msg="Please enter at least 3 chars"
                />
                <div className="validate" />
              </div>
              <div className="col-lg-4 col-md-6 form-group">
                <input
                  type="text"
                  name="place"
                  className="form-control"
                  onChange={setRegister}
                  placeholder="Place"
                  data-rule="minlen:3"
                  data-msg="Please enter at least 3 chars"
                />
                <div className="validate" />
              </div>

              <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="text"
                  className="form-control"
                  name="amount"
                  onChange={setRegister}
                  placeholder="Amount"
                />
                <div className="validate" />
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
                <input
                  type="date"
                  name="date"
                  className="form-control"
                  onChange={setRegister}
                  placeholder="Date"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div className="validate" />
              </div>
            </div>
            <div
              style={{
                margin: "auto",
                textAlign: "center",
              }}
            >
              <button className="book-a-table-btn scrollto">Pay</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Userdon;
