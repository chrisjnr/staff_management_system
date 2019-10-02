import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, 
    Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
    , Dropdown,DropdownToggle,DropdownItem,DropdownMenu, FormText, Container, Alert } from 'reactstrap'
import {connect} from 'react-redux'
import{addIntern} from '../../actions/internActions'
import PropTypes from 'prop-types'
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../firebaseConfig'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';



export class InternForm extends Component {


    constructor(props) {
        super(props);
        // firebase.initializeApp(firebaseConfig);

       
    
        // this.toggle = this.toggle.bind(this);
        this.state = {
        //   dropdownOpen: false,
            // dob: new Date(),
            // gender : "female"
        };
      }

      onChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }

      handleChange = date => {
        this.setState({
          dob: date
        });
      }

      getInitialState(){
        var value = new Date();
        return {
          value: value
        }
      }

    onSubmit = e =>{
        e.preventDefault();
        // var storage = firebase.storage();

        const newItem = {
            name : this.state.name,
            gender: this.state.gender,
            dob: this.state.dob,
            contact : this.state.contact,
            address : this.state.address,
            institution : this.state.institution,
            program: this.state.program,
            year_of_engagement : this.state.year_of_engagement,
            dept : this.state.dept,
            duration : this.state.duration,
            skills : this.state.skills,
            image : this.state.image
        }

        // Add Item via addItemAction
        this.props.addIntern(newItem)
        // this.props.router.history.push('/view-interns')
        // return <Redirect to="/"/>

        window.location.href = '/view-interns'

        // close modal
        // this.toggle()
    }
    
    //   toggle() {
    //     this.setState({
    //       dropdownOpen: !this.state.dropdownOpen
    //     });
    //   }
    render() {
        return (
            <div>
                 <Container>
                 <Alert color="secondary">
                    This is a secondary alert — check it out!
                 </Alert>
                     <h1>Add a New Intern</h1>

                <Form onSubmit={this.onSubmit}>
                    <FormGroup className="row col-xs-8">
                        <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" onChange={this.onChange} placeholder="with a placeholder" />
                        <Label for="contact">Contact</Label>
                            <Input type="text" name="contact" id="contact" onChange={this.onChange} placeholder="with a placeholder" />
                        <p>
                        <Label for="dob">Date of Birth</Label>
                                <DatePicker  id="dob" selected={this.state.dob} onChange={this.handleChange}/>
                        </p>
                        <Label for="institution">Institution Attended</Label>
                            <Input type="text" name="institution" id="institution"  onChange={this.onChange} placeholder="with a placeholder" />
                        <Label for="program">Program Studied</Label>
                            <Input type="text" name="program" id="program"  onChange={this.onChange} placeholder="with a placeholder" />
                        <Label for="year_of_engagement">Year of Company Engagement</Label>
                            <Input type="text" name="year_of_engagement" id="year_of_engagement"  onChange={this.onChange} placeholder="with a placeholder" />
                        <Label for="dept">Department Attached to:</Label>
                            <Input type="text" name="dept" id="dept" onChange={this.onChange} placeholder="with a placeholder" />
                        <Label for="duration">Duration with Company</Label>
                            <Input type="text" name="duration" id="duration" onChange={this.onChange} placeholder="with a placeholder" />
                    
                        <Label for="address">Address</Label>
                            <Input type="text" name="address" id="address" onChange={this.onChange} placeholder="Address" />
                
                        <Label for="gender">Gender</Label>
                            <Input type="select" name="gender" onChange={this.onChange} id="gender">
                                <option>Male</option>
                                <option>Female</option>
                            </Input>
                        <Label for="profileImage">Profile Image</Label>
                            <Input type="file" name="profileImage" onChange={this.onChange} id="profileImage" />
 
                    
                        <Label for="skills">Additional Skills</Label>
                            <Input type="textarea" onChange={this.onChange} name="skills" id="skills" />
                        <p>
                            <Button style={{backgroundColor : 'green', color: '#fff', textAlign: 'center'}} block className="col-xs-4">Add New Intern</Button>

                        </p>
                    </FormGroup>
                    
                </Form>
                
                
                </Container>
            </div>
        )
    }
}

InternForm.propTypes = {
    addIntern : PropTypes.func.isRequired,
}

const mapStateToProps = state=>({
    item: state.item
})

export default connect(mapStateToProps, {addIntern})(InternForm)