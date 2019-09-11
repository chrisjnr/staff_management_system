import React, { Component } from 'react'
import '../guest.css'

export default class GuestHeader extends Component {
    render() {
        return(
            <div>
  <div className="topnav">
    <a className="active" href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
    <div className="login-container">
      {/* <form action="/action_page.php">
        <button type="submit">Login</button>
      </form> */}
    </div>
  </div>
</div>


        )
    }

    
}
