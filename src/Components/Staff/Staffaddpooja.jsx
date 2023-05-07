import React from 'react'

const Staffaddpooja = () => {
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
          <option defaultChecked>Category</option>
          <option>Kubera</option>      
          <option>Ganapathy</option>
          <option>General</option>
          <option>Special</option>
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
            </div>
          <div className="text-center">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    </section>
    
        </div>
      )
    }
    

export default Staffaddpooja