import React, { Component } from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Form from './components/Form';
import Home from './components/Home';
import InternApply from './jobs/InternApply';
import GuestHeader from './components/GuestHeader';
import SignIn from './common/SignIn';
import JobApply from './jobs/JobApply';
import InternForm from './components/intern/InternForm';
import ViewOneIntern from './components/intern/ViewOneIntern';
import ViewAllInterns from './components/intern/ViewAllInterns';
import {Provider } from 'react-redux'
import store from './store'
import {Container} from 'reactstrap'
import ApplyForLeave  from './components/leave/ApplyForLeave';
import ViewAllStaff  from './components/staff/ViewAllStaff';
import  CreateStaff  from './components/staff/CreateStaff';
import ViewAllLeave from './components/leave/ViewAllLeave';
import ViewAll from './components/nsp/ViewAll';
import ViewOneNsp from './components/nsp/ViewOneNsp';


export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <Router>
      <div>
        <Route exact path = '/' render = {
          props =>(
            <React.Fragment>
               <Header/>
              <div className="content-wrapper" >
              <Home/>
              <Menu/>
              </div>
              
                

            </React.Fragment>
          )
        } />
        {/* ViewAllStaff */}
        <Route path = '/view-staff' render = {
          props =>(
            <React.Fragment>
                <Header/>
             <div className="content-wrapper" >
               <Container>
                  <ViewAllStaff/>
               </Container>
              
              <Menu/>
              
              </div>
            </React.Fragment>
          )
        }/>
             <Route path = '/add-staff' render = {
          props =>(
            <React.Fragment>
                <Header/>
             <div className="content-wrapper" >
               <Container>
                  <CreateStaff/>
               </Container>
              
              <Menu/>
              
              </div>
            </React.Fragment>
          )
        }/>
        <Route path = '/view-interns' render = {
          props =>(
            <React.Fragment>
                <Header/>
             <div className="content-wrapper" >
               <Container>
                  <ViewAllInterns/>
               </Container>
              
              <Menu/>
              
              </div>
            </React.Fragment>
          )
        }/>
        <Route path = '/view-one-intern' render = {
          props =>(
            <React.Fragment>
                <Header/>
             <div className="content-wrapper" >
              <ViewOneIntern/>
              <Menu/>
              
              </div>
            </React.Fragment>
          )
        }/>

        <Route path = '/view-one-nsp' render = {
                  props =>(
                    <React.Fragment>
                        <Header/>
                    <div className="content-wrapper" >
                      <ViewOneNsp/>
                      <Menu/>
                      
                      </div>
                    </React.Fragment>
                  )
                }/>

        <Route path = '/view-nsp' render = {
                  props =>(
                    <React.Fragment>
                        <Header/>
                    <div className="content-wrapper" >
                      <Container>
                         <ViewAll/>
                      </Container>
                      
                      <Menu/>
                      
                      </div>
                    </React.Fragment>
                  )
                }/>
        <Route path = '/form' component = {Form}/>
        <Route path = '/signin' component = {SignIn}/>
        <Route path = '/apply-intern' render = {
          props =>(
            <React.Fragment>
                <Header/>
             <div className="content-wrapper" >
              <InternForm/>
              <Menu/>
              
              </div>
            </React.Fragment>
          )
        }/>
         <Route path = '/add-leave' render = {
          props =>(
            <React.Fragment>
                <Header/>
             <div className="content-wrapper" >
              <ApplyForLeave/>
              <Menu/>
              
              </div>
            </React.Fragment>
          )
        }/>

      <Route path = '/view-leave' render = {
                props =>(
                  <React.Fragment>
                      <Header/>
                  <div className="content-wrapper" >
                    <ViewAllLeave/>
                    <Menu/>
                    
                    </div>
                  </React.Fragment>
                )
              }/>
        <Route path = '/apply-job' render = {
          props =>(
            <React.Fragment>
              <GuestHeader/>
             <div class="content-wrapper" >
              <JobApply/>
              
              </div>
            </React.Fragment>
          )
        }/>
        
        {/* <Footer/> */}
      </div>
      </Router>
      </Provider>
    )
  }
}

