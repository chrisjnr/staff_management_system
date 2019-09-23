import React, { Component } from 'react'
import {getOneNsp} from '../../actions/nspActions'
import PropTypes from 'prop-types'
import {connect } from 'react-redux'
import MUIDataTable from "mui-datatables";
import { makeStyles } from '@material-ui/core/styles';
import { Table, ListGroupItem, ListGroup } from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export class ViewOneNsp extends Component {


  useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  }));

   arr = [];


  createData(name, value) {
    return { name, value};
  }
  
   row = [
    this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    this.createData('Eclair', 262, 16.0, 24, 6.0),
    this.createData('Cupcake', 305, 3.7, 67, 4.3),
    this.createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

 data = {
    name:"name",
    gender: "Gender",
    dob:"Date Of Birth",
    contact:"Phone Number",
    address: "Address",
    institution:"Institution",
    dept:"Department",
    year_of_engagement: "Year of Engagement",
    image:"Picture"

 }

  constructor(props) {
    super(props);

    // this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    }
  }


  componentDidMount (){
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let token = params.get('id');
    this.props.getOneNsp(token);
    for (var key in this.props) {
      this.arr.push(this.props[key]);
    }
   
    
    // const query = new URLSearchParams(this.props.location.search);
    // const token = query.get('id')
    //    this.props.getOneIntern(token);
    // alert(token);
    const options = {
      filterType: "dropdown",
      responsive: "scroll"
    };

    const columns = ["Name", "Title", "Location", "Age", "Salary"];

    
}

render(){
  const {items} = this.props.nsp
  const {name, dob} = items
  return (
    <div>

      <h1 className="text-center">View Nsp Details</h1>
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


  ViewOneNsp.propTypes = {
    getOneNsp : PropTypes.func.isRequired,
    nsp: PropTypes.object.isRequired
}
const mapStateToProps = state=>({
    nsp: state.nsp
})


export default connect(mapStateToProps, {getOneNsp})(ViewOneNsp)