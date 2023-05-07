import React from 'react'

const Login = () => {
  return (
    <div id="bg"
    style={{ backgroundImage: "url(img/slide/travelling-nepal.jpg)"  }}>
     <br/><br/> <br/>
     <br/><div className="container-fluid" id="log"
    >
<div className="row">
<div className="col-sm-4" />
</div>
    <div className="row">
      <div className="col-sm-4" />
      <div className="col-sm-4">
        <h3>
          <br />
          &nbsp;&nbsp;Login
          <br />
          <br />
        </h3>
      </div>
      <div className="col-sm-4" />
    </div>
    <div className="row">
      <div className="col-sm-4" />
      <div className="form-group">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            required=""
          />
          <br />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required=""
          />
          <br />
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="">Forgot Password?</a>
          <br />
          <br />
          <p>
            <button type="button" className="log-btn scrollto">
              Login
            </button>
          </p>
          <br />
          <br />
        </form>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Login