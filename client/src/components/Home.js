import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div>
     <section className="content-header">
  <h1>
    Dashboard
    <small>Control panel</small>
  </h1>
  <ol className="breadcrumb">
    <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
    <li className="active">Dashboard</li>
  </ol>
</section>

<section className="content">
  {/* Small boxes (Stat box) */}
  <div className="row">
    <div className="col-lg-3 col-xs-6">
      {/* small box */}
      <div className="small-box bg-aqua">
        <div className="inner">
          <h3>150</h3>
          <p>Staff On Leave</p>
        </div>
        <div className="icon">
          <i className="ion ion-bag" />
        </div>
        <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
      </div>
    </div>

    <div className="col-lg-3 col-xs-6">
      {/* small box */}
      <div className="small-box bg-yellow">
        <div className="inner">
          <h3>44</h3>
          <p>New Applications</p>
        </div>
        <div className="icon">
          <i className="ion ion-person-add" />
        </div>
        <a href="#" className="small-box-footer">More info <i className="fa fa-arrow-circle-right" /></a>
      </div>
    </div>
    {/* ./col */}

    {/* ./col */}
  </div>
        </section>


            </div>
        )
    }
}

export default Home
