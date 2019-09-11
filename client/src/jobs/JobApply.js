import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, 
    Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
    , Dropdown,DropdownToggle,DropdownItem,DropdownMenu, FormText, Container } from 'reactstrap'
export class JobApply extends Component {


    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
          startDate: new Date()
        };
      }

      handleChange = date => {
        this.setState({
          startDate: date
        });
      }

      getInitialState(){
        var value = new Date().toISOString();
        return {
          value: value
        }
      }
    
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    render() {
        return (
            <div>
                 <Container>
                     <h1>Add For a Position</h1>
                <Form>
                    <FormGroup className="row col-xs-8">
                        <Label for="name">Name</Label>
                            <Input type="email" name="text" id="name" placeholder="with a placeholder" />
                        <Label for="exampleEmail">Contact</Label>
                            <Input type="email" name="text" id="exampleEmail" placeholder="with a placeholder" />
                        <p>
                        <Label for="dob">Date of Birth</Label>
                                <DatePicker  id="dob" selected={this.state.startDate} onChange={this.handleChange}/>
                        </p>
                        <Label for="exampleEmail">Institution Attended</Label>
                            <Input type="email" name="text" id="exampleEmail" placeholder="with a placeholder" />
                        <Label for="exampleEmail">Program Studied</Label>
                            <Input type="email" name="text" id="exampleEmail" placeholder="with a placeholder" />
                        <Label for="exampleEmail">Year of Company Engagement</Label>
                            <Input type="email" name="text" id="exampleEmail" placeholder="with a placeholder" />
                        <Label for="exampleEmail">Department Attached to:</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        <Label for="exampleEmail">Duration with Company</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    
                        <Label for="examplePassword">Address</Label>
                            <Input type="text" name="password" id="examplePassword" placeholder="password placeholder" />
                
                        <Label for="exampleSelect">Gender</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Male</option>
                                <option>Female</option>
                            </Input>
                        <Label for="profileImage">Profile Image</Label>
                            <Input type="file" name="file" id="profileImage" />
 
                    
                        <Label for="exampleText">Additional Skills</Label>
                            <Input type="textarea" name="text" id="exampleText" />
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

export default JobApply
