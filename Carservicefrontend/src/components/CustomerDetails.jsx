import React, { Component } from 'react'

export class CustomerDetails extends Component {
    constructor(props){
        super (props);
        this.state = {
            hotelid:""

        }
    }
    ok(){
     window.location.href="http://localhost:3001/hoteldetails";
    }
    book(){
        this.props.history.push('/customerhoteldetails');
    }
    render() {
        const customer = this.props.location.state
        return (
            <div>
                <form className="form">
                    <table >
                        <tr>
                            <th>Source Location</th>
                            <th>:</th>
                            <tr>{customer.sourceLocation}</tr>
                        </tr>
                        <tr>
                            <th>Destination Location</th>
                            <th>:</th>
                            <tr>{customer.destinationLocation}</tr>
                        </tr>
                        <tr>
                            <th>Leaving Date</th>
                            <th>:</th>
                            <tr>{customer.leavingDate}</tr>
                        </tr>
                        <tr>
                            <th>Returning Date</th>
                            <th>:</th>
                            <tr>{customer.returningDate}</tr>
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
                </div>
            </div>
        )
    }
}

export default CustomerDetails
