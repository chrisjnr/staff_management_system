import React, { Component,  } from 'react'
import {Redirect} from 'react-router-dom'
import {connect } from 'react-redux'
import {deleteLeave, getAbsences} from '../../actions/leaveActions'
import PropTypes from 'prop-types'
import { Container , ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group'


class ViewAllLeave extends Component {


    componentDidMount (){
        this.props.getAbsences();
    }

    //  onDeleteClick = (id)=>{
    //     let path = `newPath`;
    //     this.props.history.push(path);
 
    //     //  alert(id)
    //     // this.props.deleteIntern(id)
    // }


    render() {
        const {items} = this.props.item
        return (
            <div>
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
            </div>
        )
    }
}


ViewAllLeave.propTypes = {
    deleteLeave : PropTypes.func.isRequired,
    getAbsences : PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps = state=>({
    item: state.item
})

export default connect(mapStateToProps, {deleteLeave, getAbsences})(ViewAllLeave)
