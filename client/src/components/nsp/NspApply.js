import React, { Component } from 'react'

export class NspApply extends Component {
    render() {
        return (
<div className="col-md-6">

  <h3>Apply For The National Service Personnel </h3>
  <form role="form">
    <div className="box-body">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
      </div>

      <div className="form-group">
        <label htmlFor="InputLastName">Last Name</label>
        <input type="email" className="form-control" id="InputLastName" placeholder="Enter Your First Name" />
      </div>

      <div className="form-group">
        <label htmlFor="InputFirstName">First Name</label>
        <input type="email" className="form-control" id="InputFirstName" placeholder="Enter Your Last Name" />
      </div>

      <div className="form-group">
        <label htmlFor="InputAddress">Address</label>
        <input type="email" className="form-control" id="InputAddress" placeholder="Enter Your Full Address" />
      </div>
      {/* <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div> */}

      <div class="form-group">
                  <label>Select Type Of Application</label>
                  <select class="form-control">
                    <option>Internship</option>
                    <option>Full Time Employment</option>
                    {/* <option>option 3</option>
                    <option>option 4</option>
                    <option>option 5</option> */}
                  </select>
                </div>
      <div className="form-group">
        <label htmlFor="exampleInputFile">Resume/C.V</label>
        <input type="file" id="exampleInputFile" />
        <p className="help-block">Please upload only PDF,DOC,RTF only </p>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" /> Agree to terms of usage
        </label>
      </div>
    </div>
    {/* /.box-body */}
    <div >
      <button type="submit" className="btn btn-primary">Apply</button>
    </div>
  </form>
</div>

        )
    }
}

export default NspApply
