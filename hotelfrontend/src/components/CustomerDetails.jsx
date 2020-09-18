import React, { Component } from 'react'

export class CustomerDetails extends Component {
    constructor(props){
        super (props);
        this.state = {
            hotelid:""
            
        }
    }
    ok(){
        window.location.href="http://localhost:3000";
    }
    book(){
        this.props.history.push('/customerhoteldetails');
    }
    carbooking()
    {
        window.location.href="http://localhost:3002/customerhoteldetails";
    }
    render() {
        const customer = this.props.location.state
        return (
            <div>
                <form className="form">
                    <table >
                        <tr>
                            <th>Hotel Name</th>
                            <th>:</th>
                            <tr>{customer.hotelName}</tr>
                        </tr>
                        <tr>
                            <th>Room Number</th>
                            <th>:</th>
                            <tr>{customer.roomNumber}</tr>
                        </tr>
                        <tr>
                            <th>Check In Date</th>
                            <th>:</th>
                            <tr>{customer.checkInDate}</tr>
                        </tr>
                        <tr>
                            <th>Check Out Date</th>
                            <th>:</th>
                            <tr>{customer.checkOutDate}</tr>
                        </tr>
                        <tr>
                            <th>Number Of days</th>
                            <th>:</th>
                            <tr>{customer.nbOfDays}</tr>
                        </tr>
                    </table>
                   
                </form>
                <div>
                    <button className="btn btn-success"onClick={this.ok.bind(this,customer.hotelId,this.state.hotelStatus)}>Ok</button>
                    <button className="btn btn-primary" onClick={this.book.bind(this)}>Book One More Room</button>
                    <button className="btn btn-success"onClick={this.carbooking.bind(this)} style={{marginTop:"200px",marginLeft:"200px"}}>Car Booking</button>
                </div>
            </div>
        )
    }
}

export default CustomerDetails
