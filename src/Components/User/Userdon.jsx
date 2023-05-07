import React from 'react'

const Userdon = () => {
  return (
    <div style={{ background:"#001714"
}}>
    <section id="book-a-table" className="book-a-table">
<div className="container">
<div className="section-title">
  <h2>
    <br/><br/> <span>Donation</span>
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
      <input
        type="text"
        name="hname"
        className="form-control"
        id="hname"
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
        id="place"
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
  <div className="text-center">
    <button type="submit">Pay</button>
  </div>
</form>
</div>
</section>

</div>
  )
}

export default Userdon