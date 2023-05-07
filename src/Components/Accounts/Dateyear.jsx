import React from 'react'

const Dateyear = () => {
    return (
        <div 
             id="acchero"
        >
                <br/>
                <section id="book-a-table" className="book-a-table">
          <div className="container">
            <div className="section-title">
              <h2>
                <br/><br/><f>Yearly</f> <span>Balancesheet</span>
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
             <label>Select Start Month</label>
    </div>
                <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                className="form-control"
                id="demoDate"
                type="month"
                placeholder="Select Date"
              /></div></div>
              <div className="row">
             <div className="col-lg-4 col-md-6 form-group mt-3">
             <label>Select End Month</label>
    </div>
                <div className="col-lg-4 col-md-6 form-group mt-3">
              <input
                className="form-control"
                id="demoDate"
                type="month"
                placeholder="Select Date"
              /></div></div>
              <div className="row">
             <div className="col-lg-4 col-md-6 form-group mt-3">
             
    </div>
               </div>
              
              <div className="row">
                 
             <div className="text-center">
                <button type="submit">View</button>
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
    
export default Dateyear