import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Book = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const user_id = localStorage.getItem("user_id")
  const [pooja, setpooja] = useState({})
  const amount = pooja.amound
  const [inputs, setInputs] = useState({
    user_id: user_id,
    pooja_id: id,
    name: "",
    date: "",
    nakshathra: "",
  })
  const [formErrors, setformErrors] = useState({})
  const [isSubmit, setIssubmit] = useState(false)

  console.log(inputs);
  useEffect(() => {

    axios.get(`http://localhost:2000/api/pooja/view-pooja-single/${id}`, inputs).then((data) => {
      setpooja(data.data.details)
    })
  }, []);

  const validate = (values) => {
    var error = {}
    if (!values.name) {
      error.name = "Enter  name"
    }
    if (!values.date) {
      error.date = "Pick a date"
    }
    if (!values.nakshathra) {
      error.nakshathra = "Enter nakshathra"
    }


    return error
  }



  const setRegister = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  };

  const registerSubmit = (event) => {
    console.log(inputs);
    event.preventDefault();
    setformErrors(validate(inputs))
    console.log((formErrors));
    setIssubmit(true)
    if (Object.keys(formErrors).length === 0 && isSubmit) {

      axios.post('http://localhost:2000/api/pooja/bookpooja',inputs).then((datas) => {
        navigate('/bookings')
        // console.log(data.response.data.message);



      }).catch((err) => {
        console.log(err);
        // toast(err.response.data.message, {
        //   position: "bottom-center",
        //   autoClose: 5000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: "light",
        // });
      })
    }
  };
  return (
    <div style={{
      background: "#001714"
    }}>
      <section id="book-a-table" className="book-a-table">
        <div className="container">
          <div className="section-title">
            <h2>
              <br /><br /><f>Schedule</f> <span>a Pooja</span>
            </h2>
          </div>
          <form
            action="forms/book-a-table.php"
            method="post"
            role="form"
            className="php-email-form"
          >
            <div className="row">
              <div className="col-lg-4 col-md-6 form-group">
              <span style={{color:"red"}} > {formErrors.name? formErrors.name :""}</span>
                <input
                  type="text"
                  name="name"
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
                <span style={{color:"red"}} > {formErrors.nakshathra? formErrors.nakshathra :""}</span>
                <select class="form-control" onChange={setRegister} name='nakshathra' id="exampleFormControlSelect1">
                  <option defaultChecked>Nakshathra</option>
                  <option value={'Aswathi'}>Aswathi</option>
                  <option value={'Bharani'}>Bharani</option>
                  <option value={'Karthika'}>Karthika</option>
                  <option value={'Rohini'}>Rohini</option>
                  <option value={'Makyeryam'}>Makyeryam</option>
                  <option value={'Thiruvathira'}>Thiruvathira</option>
                  <option value={'Punartham'}>Punartham</option>
                  <option value={'Pooyam'}>Pooyam</option>
                  <option value={'Aayillyam'}>Aayillyam</option>
                  <option value={'Makam'}>Makam</option>
                  <option value={'Pooram'}>Pooram</option>
                  <option value={'Uthram'}>Uthram</option>
                  <option value={'Chithira'}>Chithira</option>
                  <option value={'Chyothi'}>Chyothi</option>
                  <option value={'Visakam'}>Visakam</option>
                  <option value={'Anizham'}>Anizham</option>
                  <option value={'Thrikketta'}>Thrikketta</option>
                  <option value={'Moolam'}>Moolam</option>
                  <option value={'Pooradam'}>Pooradam</option>
                  <option value={'Uthradam'}>Uthradam</option>
                  <option value={'Thiruvonam'}>Thiruvonam</option>
                  <option value={'Avittam'}>Avittam</option>
                  <option value={'Chathayam'}>Chathayam</option>
                  <option value={'Poororuttathi'}>Poororuttathi</option>
                  <option value={'Uthrattathi'}>Uthrattathi</option>
                  <option value={'Revathi'}>Revathi</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="text"
                  className="form-control"
                  name="amount"
                  id="amount"
                  placeholder="Amount"
                  value={pooja.amound}

                />
                <div className="validate" />
              </div>
              <div className="col-lg-4 col-md-6 form-group mt-3">
              <span style={{color:"red"}} > {formErrors.date? formErrors.date :""}</span>
                <input
                  type="date"
                  onChange={setRegister}
                  name="date"
                  className="form-control"
                  id="date"
                  placeholder="Date"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div className="validate" />
              </div>
            </div>
            <div className="row">

            </div>
            <div className="text-center">
              <button type="submit" onClick={registerSubmit}>Pay & Book</button>
            </div>
          </form>
        </div>
      </section>

    </div>
  )
}

export default Book