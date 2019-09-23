import React, { Component } from 'react'
import { Redirect, Link} from 'react-router-dom'
import { Table, ListGroupItem, ListGroup } from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {connect } from 'react-redux'
import {deleteNsp, getNsp} from '../../actions/nspActions'
import PropTypes from 'prop-types'

export class ViewAll extends Component {

  componentDidMount(){
    this.props.getNsp()
  }

  onClick = (id)=>{
    return <Redirect to="/path?id=42"/>
  }

  render() {
    const {items} = this.props.nsp
    return (
        <div>
          <h1 className="text-center">All Recorded Nsp</h1>
           <Table>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Contact</th>
                <th>Department</th>
                {/*  */}
              </tr>
              {/* <th>Username</th> */}
            </thead>

            <tbody>

            {items.map(({_id , name, contact, dept}) => (
                            // <Link to="/path?id=42">
                              <tr onClick={this.onClick.bind(this, _id)}>
                                
                                 <td>{name}</td>
                                 <td>{contact}</td>
                                 <td>{dept}</td>
                                 <th><a href={"/view-one-nsp?id=" + _id}><span  class="glyphicon glyphicon-eye-open" aria-hidden="true"></span></a></th>

                             </tr>
                            // </Link>
                        ))}

        
              
            </tbody>
          </Table>

        </div>
    )
}
  }

  ViewAll.propTypes = {
    item: PropTypes.object.isRequired,
    getNsp: PropTypes.func.isRequired
}

const mapStateToProps = state=>({
    nsp: state.nsp
})

export default connect(mapStateToProps, {getNsp})(ViewAll)
