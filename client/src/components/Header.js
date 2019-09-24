import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
<header className="main-header">
  {/* Logo */}
  <a href="index2.html" className="logo">
    {/* mini logo for sidebar mini 50x50 pixels */}
    {/* <div className="pull-left image"> */}
          <img src="dist/img/company_logo.jpeg" height= "50"  className="img-circle logo-lg " alt="Company Logo" />
        {/* </div> */}
    <span className="logo-mini"><b>V.L</b>T.C</span>
    {/* logo for regular state and mobile devices */}
    <span className="logo-lg"><b>Volta Lake</b> T.C</span>
  </a>
  {/* Header Navbar: style can be found in header.less */}
  <nav className="navbar navbar-static-top">
    {/* Sidebar toggle button*/}
    <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
      <span className="sr-only">Toggle navigation</span>
    </a>
    {/* Navbar Right Menu */}
    <div className="navbar-custom-menu">

    </div>
  </nav>
</header>

        )
    }
}
