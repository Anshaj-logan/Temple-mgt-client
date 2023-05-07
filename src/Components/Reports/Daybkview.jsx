import React from 'react'

const Daybkview = () => {
  return (
    
        <div id="schedulhero"
        style={{ background:"#001714"
        }}>
            <br/>
            <section id="book-a-table" className="book-a-table">
      <div className="container">
        <div className="section-title">
          <h2>
            <br/><br/><span>Daybook</span>
          </h2>
        </div>
        <form
          action="forms/book-a-table.php"
          method="post"
          role="form"
          className="php-email-form"
        >
      <div className="tile">
         <div className="tile-body">
          
         <div className="row">
         <div className=" col-md-1 form-group mt-3">
         <label>Opening Balance</label>
</div>
            <div className="col-md-3 form-group mt-3">
          <input
            className="form-control"
            id="demoDate"
            type="text"/>
            </div>
            <div className="col-md-1 form-group mt-3"></div>
          <div className="col-md-1 form-group mt-4">
          <label>Date</label></div>
            <div className="col-md-3 form-group mt-3">
          <input
            className="form-control"
            id="demoDate"
            type="date"/>
            </div>
        
            <div className="table-responsive">
      
      <table className="table table-hover table-bordered" id="sampleTable">
        <thead>
          <tr>
            <th>slNo.</th>
            <th>Particular</th>
            <th>Account</th>
            <th> Amount</th>  
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>special Pooja</td>
            <td>Credit</td>
            <td>2011</td>      
          </tr>
          <tr>
            <td>2</td>
            <td>stationary</td>
            <td>Debit</td>
            <td>200</td></tr>
        </tbody>
      </table>
    </div>

            <div className=" col-md-1 form-group mt-3">
          <label>Closing Balance</label></div>
          <div className=" col-md-3 form-group mt-3">
          <input
            className="form-control"
            id="demoDate"
            type="text"
          />
         </div> 
         </div>
      </div>
      </div>
    </form>
    </div>
    </section>

        </div>
      
      )
    } 

export default Daybkview