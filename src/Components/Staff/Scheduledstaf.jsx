import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Scheduledstaf = () => {
  return (
    <>
    <div id="schedulhero"
      style={{
        background: "#001714"
      }}>
      <br /><br /> <br /> <br /><br />
      <br />
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
                    <th>Mode</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Muttarakkal</td>
                    <td>Kiran</td>
                    <td>Thiruvadhira</td>
                    <td>16-04-2023</td>
                    <td>51</td>
                    <td>Offline</td>
                  </tr>
                   </tbody>
              </table>
            </div>
            <div className="text-left">
              <a className='btn'><Link to={'/today'}> Scheduled Today</Link></a>
            </div>
            
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  
    </>
  )
}

export default Scheduledstaf