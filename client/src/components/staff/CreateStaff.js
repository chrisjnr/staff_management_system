import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, 
    Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
    , Dropdown,DropdownToggle,DropdownItem,DropdownMenu, FormText, Container, Alert } from 'reactstrap'
import {connect} from 'react-redux'
import {addStaff} from '../../actions/internActions'
import PropTypes from 'prop-types'



export class CreateStaff extends Component {


    constructor(props) {
        super(props);
    
        // this.toggle = this.toggle.bind(this);
        this.state = {
        //   dropdownOpen: false,
            dob: new Date().toISOString(),
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
            dob: this.state.dob,
            contact : this.state.contact,
            address : this.state.address,
            marital_status : this.state.marital_status,
            email: this.state.email,
            dept : this.state.dept,
            date_hired : this.state.date_hired,
            functions : this.state.functions,
            image : this.state.image
        }

        // Add Item via addItemAction
        this.props.addStaff(newItem)



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
                     <h1>Add a New National Service Personnel</h1>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup className="row col-xs-8">
                        <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" onChange={this.onChange} placeholder="with a placeholder" />
                        <Label for="contact">Contact</Label>
                            <Input type="text" name="contact" id="contact" onChange={this.onChange} placeholder="with a placeholder" />
                        <p>
                        <Label for="dob">Date of Birth</Label>
                                <DatePicker  id="dob" selected={this.state.startDate} onChange={this.handleChange}/>
                        </p>

                        <p>
                        <Label for="dob">Date Hired</Label>
                                <DatePicker  id="date_hired" selected={this.state.date_hired} onChange={this.handleDate_hired}/>
                        </p>
                        <Label for="institution">Email</Label>
                            <Input type="email" name="email" id="email"  onChange={this.onChange} placeholder="with a placeholder" />
                        <Label for="dept">Department Attached to:</Label>
                            <Input type="text" name="dept" id="dept" onChange={this.onChange} placeholder="with a placeholder" />
                    
                        <Label for="address">Address</Label>
                            <Input type="text" name="address" id="address" onChange={this.onChange} placeholder="Address" />
                
                        <Label for="gender">Marital Status</Label>
                            <Input type="select" name="marital_status" onChange={this.onChange} id="marital_status">
                                <option>Married</option>
                                <option>Single</option>
                            </Input>
                            <Label for="gender">Gender</Label>
                            <Input type="select" name="gender" onChange={this.onChange} id="gender">
                                <option>Male</option>
                                <option>Female</option>
                            </Input>
                        <Label for="profileImage">Profile Image</Label>
                            <Input type="file" name="profileImage" onChange={this.onChange} id="profileImage" />
 
                    
                        <Label for="skills">Functions</Label>
                            <Input type="textarea" onChange={this.onChange} name="functions" id="functions" />
                        <p>
                            <Button style={{backgroundColor : 'green', color: '#fff', textAlign: 'center'}} block className="col-xs-4">Add New Staff</Button>

                        </p>
                    </FormGroup>
                    
                </Form>
                </Container>
            </div>
        )
    }
}

CreateStaff.propTypes = {
    addStaff : PropTypes.func.isRequired,

}

const mapStateToProps = state=>({
    item: state.item
})

export default connect(mapStateToProps, {addStaff})(CreateStaff)