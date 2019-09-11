import React, { Component } from 'react'

export class JobApplication extends Component {
    render() {
        return (
            <div className="col-md-6">
  <form role="form">
    <div className="box-body">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputFile">File input</label>
        <input type="file" id="exampleInputFile" />
        <p className="help-block">Example block-level help text here.</p>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" /> Check me out
        </label>
      </div>
    </div>
    {/* /.box-body */}
    <div >
      <button type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form>
</div>
        )
    }
}

export default JobApplication
