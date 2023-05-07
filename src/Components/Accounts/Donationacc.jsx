import React from 'react'
import { Link } from 'react-router-dom'
const Donationacc = () => {
  return (
    <div id="schedulhero"
    style={{ background:"#001714"
    }}>
        <br/><br/> <br/> <br/><br/>
        <br/>
        <div className="section-title">
      <h2>
     <span>Donations</span>
      </h2>
    </div>
    <div className="col-md-12">
      <div className="tile">
        <div className="tile-body">
          <div className="table-responsive">
         
            <table className="table table-hover table-bordered" id="sampleTable">
              <thead>
                <tr>
                  <th>slNo.</th>
                  <th>Name</th>
                  <th>House Name</th>
                  <th>Place</th>
                  <th> Amount</th>
                  <th> date</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Sivan</td>
                  <td>Devinandam</td>
                  <td>Sreekrishnapuram</td>
                  <td>1000</td>
                  <td>2011/04/25</td>
                  
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-left">
        <a className='btn'><Link to={'/today'}>Today total</Link></a>
      </div> 
        </div>
      </div>
    </div>
  </div>
  )
}
export default Donationacc