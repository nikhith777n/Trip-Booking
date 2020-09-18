import React, { Component } from 'react'
import AdminService from '../services/AdminService'
import Log from './Log';

export class AdminCustomerDetails extends Component {
    constructor(props){
        super (props)
        this.state = {
            customersdetails: []
        }
    }
    componentDidMount(){
        AdminService.getCustomers().then(res => {
            this.setState({customersdetails:res.data});
        });
    }
    hotelList(){
        this.props.history.push('/hoteldetails');
    }
    logout(){
        window.location.href="http://localhost:3000";
    }
    render() {
        return (
            <div>
                <div className="row">
                    <button className="btn btn-primary"onClick={this.hotelList.bind(this)} style={{marginLeft:"20px"}}>Hotel List</button>
                    
                    <button className="btn btn-success"onClick={this.logout.bind(this)}style={{marginLeft:"80%"}}>Logout</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Hotel Name</th>
                                <th>Room Number</th>
                                <th>Check In Date</th>
                                <th>Check Out date</th>
                                <th>No Of days</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customersdetails.map(
                                    customers=>
                                    <tr>
                                        <td>{customers.id}</td>
                                        <td>{customers.hotelName}</td>
                                        <td>{customers.roomNumber}</td>
                                        <td>{customers.checkInDate}</td>
                                        <td>{customers.checkOutDate}</td>
                                        <td>{customers.nbOfDays}</td>
                                    </tr>
                                )
                            }
                        </tbody>

                    </table>

                </div>
            </div>
        )
    }
}

export default AdminCustomerDetails

