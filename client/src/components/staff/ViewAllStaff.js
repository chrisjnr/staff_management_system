import React, { Component,  } from 'react'
import {Redirect} from 'react-router-dom'
import {connect } from 'react-redux'
import {getStaff, deleteStaff, addStaff} from '../../actions/internActions'
import PropTypes from 'prop-types'
import { Container , ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group'


class ViewAllStaff extends Component {



    state = {
        redirect: false
      }
    componentDidMount (){
        this.props.getStaff();
    
    }

    addStaff = ()=>{
        this.setState({ redirect: true })
    }

    //  onDeleteClick = (id)=>{
    //     let path = `newPath`;
    //     this.props.history.push(path);
 
    //     //  alert(id)
    //     // this.props.deleteIntern(id)
    // }


    render() {

        const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/add-staff'/>;
     }
        const {items} = this.props.item
        return (
            <div>

                 {/* if(items.length > 0){ */}
                    <ListGroup>
                        <TransitionGroup className="shopping-list">
                            
                                {items.map(({_id , name}) => (
                                    <CSSTransition key={_id} timeout ={500} classNames = "fade">
                                        <ListGroupItem tag="a" href={"/view-one-intern?id="+ _id} > 
                                            {/* <Button
                                                className="remove-btn"
                                                color= "danger"
                                                size= "sm"
                                                onClick= { this.onDeleteClick.bind(this,  _id)
                                                    // () => {
                                                    //     this.setState(state =>({
                                                    //         items : state.items.filter(items=> items.id !== id)
                                                    //     }))
                                                    // }
                                                }>
                                                    &times;
                                                </Button> */}
                                        
                                        {name}
                                        </ListGroupItem>
                                    </CSSTransition>
                                ))}
                            </TransitionGroup>
                    </ListGroup>
                {/* } */}


                       <Button
                            className="remove-btn"
                            color= "danger"
                            size= "sm"
                            onClick= { this.addStaff}
                                // () => {
                                //     this.setState(state =>({
                                //         items : state.items.filter(items=> items.id !== id)
                                //     }))
                                // }
                            >
                                Add New Staff
                            </Button>
            </div>
        )
    }
}


ViewAllStaff.propTypes = {
    getStaff : PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps = state=>({
    item: state.item
})

export default connect(mapStateToProps, {getStaff, deleteStaff, addStaff})(ViewAllStaff)
