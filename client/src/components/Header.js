import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
<header className="main-header">
  {/* Logo */}
  <a href="index2.html" className="logo">
    {/* mini logo for sidebar mini 50x50 pixels */}
    <span className="logo-mini"><b>A</b>LT</span>
    {/* logo for regular state and mobile devices */}
    <span className="logo-lg"><b>Admin</b>LTE</span>
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
