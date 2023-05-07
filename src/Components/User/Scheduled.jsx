import React from 'react'

const Scheduled = () => {
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
    <div className="col-md-12">
      <div className="tile">
        <div className="tile-body">
          <div className="table-responsive">
         
            <table className="table table-hover table-bordered" id="sampleTable">
              <thead>
                <tr>
                  <th>slNo.</th>
                  <th>Pooja</th>
                  <th>Name</th>
                  <th>Nakshathra</th>
                  <th> date</th>
                  <th>Amount</th>
                  <th>Receipt</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ganapathihomam</td>
                  <td>Sivan</td>
                  <td>Pooram</td>
                  <td>25-05-2023</td>
                  <td>61</td>
                  <td></td>
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

export default Scheduled