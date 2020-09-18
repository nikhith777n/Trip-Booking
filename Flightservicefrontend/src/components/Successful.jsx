import React, { Component } from 'react';
class Successful extends Component {

    constructor(props)
    {
        super(props)
        this.state={
            source:this.props.match.params.source,
            destination:this.props.match.params.destination,
            flightid:this.props.match.params.id,
            seatno:this.props.match.params.seatno,
            aid:this.props.match.params.aid,
            date:this.props.match.params.date

        }
    }

    bc()
    {
        window.location.href="http://localhost:3001/customerhoteldetails";
    }
    render() {
        return (
            <div>
            <h1 style={{marginTop:"30px",marginLeft:"400px"}}>Booking Successful</h1>
            <form className="form">
                    <table style={{marginTop:"150px",marginLeft:"470px"}} >
                    <label style={{marginLeft:"50px",fontWeight:"bold"}}>Details</label>
                        <tr>
                            <th>Source</th>
                            <th>: </th>
                            <tr style={{fontWeight:"bold"}}>{this.state.source}</tr>
                        </tr>
                        <tr>
                            <th>Destination</th>
                            <th>: </th>
                            <tr  style={{fontWeight:"bold"}}>{this.state.destination}</tr>
                        </tr>
                        <tr>
                            <th>Date</th>
                            <th>: </th>
                            <tr  style={{fontWeight:"bold"}}>{this.state.date}</tr>
                        </tr>
                        <tr>
                            <th>FlightId</th>
                            <th>: </th>
                            <tr  style={{fontWeight:"bold"}}>{this.state.aid+this.state.flightid}</tr>
                        </tr>
                        <tr>
                            <th>SeatNo</th>
                            <th>: </th>
                            <tr  style={{fontWeight:"bold"}}>{this.state.seatno}</tr>
                        </tr>
                    </table>
                                    </form>
                                    <button style={{color:"blue",marginTop:"150px",marginLeft:"505px"}}className="btn btn-success" onClick={this.bc.bind(this)}>Book Hotel</button>

            </div>
        );
    }
}

export default Successful;
