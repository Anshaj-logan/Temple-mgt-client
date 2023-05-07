import React from 'react'

const Daybook = () => {
  return (
    <div 
         id="acchero"
    >
            <br/>
            <section id="book-a-table" className="book-a-table">
      <div className="container">
        <div className="section-title">
          <h2>
            <br/><br/><span>DayBook</span>
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

         {/* <div className="row">
          <div className="col-lg-4 col-md-6 form-group mt-3">
          <label>Selec Account type</label></div>
            <div className="col-lg-4 col-md-6 form-group mt-3">
            <select class="form-control" id="exampleFormControlSelect1">
      <option>Debit</option>
      <option>Credit</option>
      
    </select>
          </div></div> */}

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

export default Daybook