import React, { Component } from 'react'
import {addNsp} from '../../actions/nspActions'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, 
    Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
    , Dropdown,DropdownToggle,DropdownItem,DropdownMenu, FormText, Container, Alert } from 'reactstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';

export class NspApply extends Component {

  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
    //   dropdownOpen: false,
        // dob: "",
        gender : "Single"
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

  handleDate_hired = date =>{
      this.setState({
          date_hired : date
      })
  }

  getInitialState(){
    var value = new Date();
    return {
      value: value
    }
  }

onSubmit = e =>{
    e.preventDefault();

    const newItem = {
      name : this.state.name,
      gender: this.state.gender,
      dob: this.state.dob.toISOString(),
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
    // toast.notify(
    // <span style={{color : 'green'}}>Added A New Staff</span>)
    this.props.addNsp(newItem)
    window.location.href = '/view-nsp'

    }


    render() {
        return (
<div className="col-md-6">

  <h3>Apply For The National Service Personnel </h3>

  <Form onSubmit={this.onSubmit}>
                    <FormGroup className="row col-xs-12">
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
                

</div>

        )
    }
}

NspApply.propTypes = {
  addStaff : PropTypes.func.isRequired,

}

const mapStateToProps = state=>({
  item: state.nsp
})

export default connect(mapStateToProps, {addNsp})(NspApply)
