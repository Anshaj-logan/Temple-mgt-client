import React from 'react'

const Expense = () => {
  return (
    <div 
         id="acchero"
    >
            <br/>
            <section id="book-a-table" className="book-a-table">
      <div className="container">
        <div className="section-title">
          <h2>
            <br/><br/><span>Expenses</span>
          </h2>
        </div>
        <form
          action="forms/book-a-table.php"
          method="post"
          role="form"
          className="php-email-form"
        >

        {/* <div className="row">
        <div className="col-md-3"></div> */}
          {/* <div className="col-md-6 mt-3"> */}
      <div className="tile">
         <div className="tile-body">
          
         <div className="row">
         <div className="col-lg-4 col-md-6 form-group mt-3">
         <label>Select the date</label>
</div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
          <input
            className="form-control"
            id="demoDate"
            type="date"
            placeholder="Select Date"
          /></div></div>
          <div className="row">
          <div className="col-lg-4 col-md-6 form-group mt-3">
          <label>Enter Particulars</label></div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
          <input
            className="form-control"
            id="demoDate"
            type="text"
            placeholder="Particulars"
          /></div></div>
          <div className="row">
          <div className="col-lg-4 col-md-6 form-group mt-3">
          <label>Measurement</label></div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
          <input
            className="form-control"
            id="demoDate"
            type="text"
            placeholder="Measurement"
          /></div>
          <div className="col-lg-1 col-md-3 form-group mt-3">
          <select class="form-control" id="exampleFormControlSelect1">
        <option defaultChecked>kg</option>
      <option>g</option>
      <option>l</option>
      <option>pac</option>
        </select>
          </div></div>
          <div className="row">
            <div className="col-lg-4 col-md-6 form-group mt-3">
          <label>Amount</label></div>
          <div className="col-lg-4 col-md-6 form-group mt-3">
          <input
            className="form-control"
            id="demoDate"
            type="text"
            placeholder="Amount"
          />
         </div> 
         <div className="text-center">
            <button type="submit">Add</button>
          </div>
         </div>
         </div>
      </div>
    {/* </div> */}
    {/* </div> */}
    </form>
    </div>
    </section>
      </div>
      )
    }


export default Expense