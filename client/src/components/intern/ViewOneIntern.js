import React, { Component } from 'react'
import {getOneIntern} from '../../actions/internActions'
import {connect } from 'react-redux'
import PropTypes from 'prop-types'
import {Media, Container} from 'reactstrap'
import {  ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

export class ViewOneIntern extends Component {



    componentDidMount (){
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let token = params.get('id');
        this.props.getOneIntern(token);
        // const query = new URLSearchParams(this.props.location.search);
        // const token = query.get('id')
        //    this.props.getOneIntern(token);
        // alert(token);
        
    }

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

ViewOneIntern.propTypes = {
    getOneIntern : PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}
const mapStateToProps = state=>({
    item: state.item
})


export default connect(mapStateToProps, {getOneIntern})(ViewOneIntern)