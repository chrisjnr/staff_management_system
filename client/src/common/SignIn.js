import React, { Component } from 'react'
import '../signin.css'

export default class SignIn extends Component {
    render() {
        return (
            
                <div className="text-center">
                    <link href="/docs/4.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
                    <title>Signin Template · Bootstrap</title>
                    {/* Bootstrap core CSS */}
            
                    <style dangerouslySetInnerHTML={{__html: ".bd-placeholder-img {font-size: 1.125rem;text-anchor: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}@media (min-width: 768px) {.bd-placeholder-img-lg {font-size: 3.5rem;}}"}} />
                    {/* Custom styles for this template */}
                    
                    <form className="form-signin" action='/'>
                        <img className="mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt width={72} height={72} />
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" defaultValue="remember-me" /> Remember me
                        </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2017-2019</p>
                    </form>
                    </div>
        )
    }
}
