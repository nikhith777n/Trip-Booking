import React, { Component } from 'react'
import AdminService from '../services/AdminService';
import Log from './Log';

export class CustomerHotelList extends Component {
    constructor(props){
        super(props);
        this.state = {
            priceLessThan:100000000,
            priceGreaterThan:0,
            hotelList: []
        }
            }
    componentDidMount(){
        AdminService.getHotels().then((res)=>{
            this.setState({hotelList:res.data});
        });
    }

    selectHotel(hotelId,hotelName,roomNumber){
        console.log(hotelId,hotelName,roomNumber);
        this.props.history.push({
            pathname : '/customerselecthotel',
            state :{hotelId,hotelName,roomNumber}} );


    }
    logout(){
        window.location.href="http://localhost:3000/";
    }

    myChangeHandler = (event) => {
        this.setState({priceLessThan: event.target.value});
      }
    myChangeHandler2=(event)=>{
        this.setState({priceGreaterThan:event.target.value});
    }

    render() {

        return (
            <div>
                <div className="row">
                    <button className="btn btn-success"onClick={this.logout.bind(this)}style={{marginLeft:"90%"}}>Logout</button>
                </div>
                <div>
                    <table id="table">
                        <tr>
                            <th>Car Price Per Mile Less Than or Equal</th>
                            <td><input type='text'onChange={this.myChangeHandler}/></td>
                        </tr>
                        <tr>
                            <th>Car Price Per Mile Greater Than</th>
                            <td><input type='text'onChange={this.myChangeHandler2}/></td>
                        </tr>
                    </table>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Car Name</th>
                                <th>Car Number</th>
                                <th>Car Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.hotelList.filter(person => person.carStatus === "UnBooked" && person.pricePerMile<=this.state.priceLessThan && person.pricePerMile>this.state.priceGreaterThan).map(
                                    hotels=>
                                    <tr>
                                        <td>{hotels.id}</td>
                                        <td>{hotels.driverName}</td>
                                        <td>{hotels.carNumber}</td>
                                        <td>{hotels.pricePerMile}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={this.selectHotel.bind(this,hotels.id,hotels.driverName,hotels.carNumber)}>Book Car</button>
                                        </td>
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

export default CustomerHotelList
