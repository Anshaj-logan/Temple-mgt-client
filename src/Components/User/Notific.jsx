import React from 'react'

const Notific = () => {
  return (
    <div id="schedulhero"
    style={{ background:"#001714"
    }}>
        <br/><br/> <br/> <br/><br/>
        <br/>
        <div className="section-title">
      <h2>
        <span>Notification</span>
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
                  <th>Notification</th>
                  <th>Date</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Thalappoli Maholsav Will be conducted on 21-5-2023</td>
                  <td>12-4-2023</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Notific