import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, 
    Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
    , Dropdown,DropdownToggle,DropdownItem,DropdownMenu, FormText, Container, Alert } from 'reactstrap'
import {connect} from 'react-redux'
import{addALeave} from '../../actions/leaveActions'
import {addIntern } from '../../actions/internActions'
import PropTypes from 'prop-types'



export class ApplyForLeave extends Component {


    constructor(props) {
        super(props);
        
    
        // this.toggle = this.toggle.bind(this);
        this.state = {
        //   dropdownOpen: false,
            start: new Date(),
            end: new Date()
     
        };
      }

      onChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
    }

      changeStartDate = date => {
        this.setState({
            start: date,
        });
      }

      changeEndDate = date => {
        this.setState({
            end: date
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

        const newItem = {
            name : this.state.name,
            start: this.state.start,
            end: this.state.end
        }

        // Add Item via addItemAction
        this.props.addLeave(newItem)



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
                     <h1>Add New Staff on Leave</h1>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup className="row col-xs-8">
                        <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" onChange={this.onChange} placeholder="Full Name" />
                        
                        <p>
                        <Label for="start">Leave Starting Date</Label>
                                <DatePicker  id="start" selected={this.state.start} onChange={this.changeStartDate}/>
                        </p>

                        <p>
                        <Label for="end">Leave Starting Date</Label>
                                <DatePicker  id="end" selected={this.state.end} onChange={this.changeEndDate}/>
                        </p>
                        
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

ApplyForLeave.propTypes = {
    addALeave : PropTypes.func.isRequired,
}

const mapStateToProps = state=>({
    items: state.item
})

export default connect(mapStateToProps, {addALeave})(ApplyForLeave)
