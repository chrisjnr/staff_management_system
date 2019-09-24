import React, { Component } from 'react'
import {getOneStaff} from '../../actions/internActions'
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Media, Container} from 'reactstrap'
import {  ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class ViewOneStaff extends Component {



    componentDidMount (){
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let token = params.get('id');
        this.props.getOneStaff(token);
        // const query = new URLSearchParams(this.props.location.search);
        // const token = query.get('id')
        //    this.props.getOneIntern(token);
        // alert(token);
        
    }

    render(){
        const {items} = this.props.item
        return (
          <div>
      
            <h1 className="text-center">View Staff Details</h1>
            <p></p>
                      <ListGroup>
                      <TransitionGroup className="shopping-list">
                              {items.map(({_id , name, gender, dob,
                              contact, address,institution,year,dept }) => (
                                  <CSSTransition key={_id} timeout ={500} classNames = "fade">
                                   <ListGroup>
                                    <ListGroupItem>{name}</ListGroupItem>
                                    <ListGroupItem>{gender}</ListGroupItem>
                                    <ListGroupItem>{dob}</ListGroupItem>
                                    <ListGroupItem>{contact}</ListGroupItem>
                                    <ListGroupItem>{address}</ListGroupItem>
                                  </ListGroup>
                                  </CSSTransition>
                              ))}
                          </TransitionGroup>
                      </ListGroup>
                  </div>
        );
      }
    }

ViewOneStaff.propTypes = {
    getOneStaff : PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps = state=>({
    item: state.item
})


export default connect(mapStateToProps, {getOneStaff})(ViewOneStaff)