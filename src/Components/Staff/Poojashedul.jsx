import React from 'react'

const Poojashedul = () => {
    return (
        <div style={{ background:"#001714"
        }}>
            <section id="book-a-table" className="book-a-table">
      <div className="container">
        <div className="section-title">
          <h2>
            <br/><br/><f>Schedule</f> <span>a Pooja</span>
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
              <input
                type="text"
                name="name"
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
        <select class="form-control" id="exampleFormControlSelect1">
        <option defaultChecked>Nakshathra</option>
      <option>Aswathi</option>
      <option>Bharani</option>
      <option>Karthika</option>
      <option>Rohini</option>
      <option>Makyeryam</option>
      <option>Thiruvathira</option>
      <option>Punartham</option>
      <option>Pooyam</option>
      <option>Aayillyam</option>
      <option>Makam</option>
      <option>Pooram</option>
      <option>Uthram</option>
      <option>Chithira</option>
      <option>Chyothi</option>
      <option>Visakam</option>
      <option>Anizham</option>
      <option>Thrikketta</option>
      <option>Moolam</option>
      <option>Pooradam</option>
      <option>Uthradam</option>
      <option>Thiruvonam</option>
      <option>Avittam</option>
      <option>Chathayam</option>
      <option>Poororuttathi</option>
      <option>Uthrattathi</option>
      <option>Revathi</option>
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
    
              />
              <div className="validate" />
            </div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="date"
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
            <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="text"
                className="form-control"
                name="pooja"
                id="pooja"
                placeholder="Pooja"
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars"
              />
              <div className="validate" />
            </div>
            </div>
          <div className="text-center">
            <button type="submit">Pay</button>
          </div>
        </form>
      </div>
    </section>
    
        </div>
      )
    }

export default Poojashedul