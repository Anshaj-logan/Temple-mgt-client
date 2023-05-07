import React from 'react'

const Register = () => {
  return (
    <div id="reg"style={{ backgroundImage: "url(img/images/diwali-.webp)"  }}>
      {/* // <div className="form"> */}
    {/* <h3>
      &nbsp;&nbsp;<span>Register</span> here
    </h3>
    <br />
    <div className="form-group">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          required=""
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="House Name"
          required=""
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Place"
          required=""
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Pin"
          required=""
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Phone"
          required=""
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          required=""
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Password"
          required=""
        />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Confirm Password"
          required=""
        />
        <br />
        <br />
        <p>
          <button type="button" className="log-btn scrollto">
            Submit
          </button>
        </p>
        <br />
        <br />
      </form>
    </div> */}


<div className="col-md-6">
   {/* <div className="tile">  */}
   <br/><br/><br/><br/><br/><br/>
    <h3 className="tile-title">
      Register
    </h3>
    <div className="tile-body">
      <form className="form-horizontal">
        <div className="form-group row">
          <label className="control-label col-md-3">
            {/* <h3><v>Name</v></h3> */}
          </label>
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              placeholder="Enter full name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">
            {/* <v>Email</v> */}
          </label>
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              placeholder="Enter email address"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">
            {/* <v>House Name</v> */}
          </label>
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              placeholder="Enter house name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">
            {/* <v>Place</v> */}
          </label>
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              placeholder="Enter place"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">
            {/* <v>Pin</v> */}
          </label>
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              placeholder="Enter pin"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">
            {/* <v>Phone</v> */}
          </label>
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              placeholder="Enter phone number"
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="control-label col-md-3">
            {/* <v>Password</v> */}
          </label>
          <div className="col-md-8">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Password"
            />
          </div>
        </div>
      </form>
    </div>
    <div className="tile-footer"><br/><br/>
      <div className="row">
        <div className="col-md-8 col-md-offset-3">
       <a className="log-btn" href="#">
            {/* <i className="fa fa-fw fa-lg fa-times-circle" /> */}
            Register
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="log-btn" href="#">
            {/* <i className="fa fa-fw fa-lg fa-times-circle" /> */}
            Cancel
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 col-md-offset-4"><br/><br/>
          </div></div>
    </div>
  </div>
</div>



  // </div>
//   </div>
  )
}

export default Register