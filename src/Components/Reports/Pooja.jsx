import React from 'react'
import { Link } from 'react-router-dom'
const Pooja = () => {
    return (
        <div id="schedulhero"
        style={{ background:"#001714"
        }}>
            <br/><br/> <br/> <br/><br/>
            <br/>
            <div className="section-title">
          <h2>
            <f>Scheduled</f> <span>Pooja</span>
          </h2>
        </div>
        <center>
        <div className="col-md-6">
          <div className="tile">
            <div className="tile-body">
            <div className="row">
            <div className="col-md-1 form-group mt-4">
          <label>From</label></div>
            <div className="col-md-3 form-group mt-3">
          <input
            className="form-control"
            id="demoDate"
            type="date"/>
            </div>
            <div className="col-md-1 form-group mt-4">
          <label>To</label></div>
            <div className="col-md-3 form-group mt-3">
          <input
            className="form-control"
            id="demoDate"
            type="date"/>
            </div>
            </div>
              <div className="table-responsive">
             
                <table className="table table-hover table-bordered" id="sampleTable">
                  <thead>
                    <tr>
                      <th>slNo.</th>
                      <th>Pooja</th>
                      <th> Count</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Muttarakkal</td>
                      <td>5</td>
                      <td>75</td>
                      {/* <td><button class="btn-primary">Daybook</button></td> */}

                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Ganapathihomam</td>
                      <td>2</td>
                      <td>202</td>
                      {/* <td><button class="btn-primary">Daybook</button></td> */}

                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Pushpanjali</td>
                      <td>32</td>
                      <td>320</td>
                      {/* <td><button class="btn-primary">Daybook</button></td> */}

                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="text-left">
        <a className='btn'><Link to={'/today'}>Add to Daybook</Link></a>
      </div>
      <div className="text-left">
        <a className='btn'><Link to={'/today'}>Add to Monthly Reoprt</Link></a>
      </div> 
            </div>
          </div>
        </div>
        </center>
      </div>
      )
    }
export default Pooja