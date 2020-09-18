import React, { Component } from 'react'
import AdminService from '../services/AdminService';

export class HotelList extends Component {
    constructor(props){
        super(props);
        this.state = {
            statu:"Booked",
            statu1:"UnBooked",
            hotelList: []
        }
    this.addHotel=this.addHotel.bind(this);
    this.deleteHotel=this.deleteHotel.bind(this);
        }
    componentDidMount(){
        AdminService.getHotels().then((res)=>{
            this.setState({hotelList:res.data});
        });
    }
    addHotel(){
        this.props.history.push('/createhotel');
    }

    deleteHotel(id){
        AdminService.deleteHotel(id).then(res=>{
            this.setState({hotelList:this.state.hotelList.filter(hotels=> hotels.id !== id)});
        });
    }
    customerDetails(){
        this.props.history.push('/admincustomerdetails');
    }
    logout(){
        window.location.href="http://localhost:3000/";
    }
    all(){
        this.setState({statu: "Booked"});
        this.setState({statu1:"UnBooked"});
    }
    booked(){
        this.setState({statu:"Booked"});
        this.setState({statu1:""});
    }
    unbooked(){
        this.setState({statu:"UnBooked"});
        this.setState({statu1:""});
    }
    cardetails()
    {
window.location.href="http://localhost:3002/hoteldetails";
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="btn-group">
                        <button className="btn btn-primary"onClick={this.addHotel} style={{marginLeft:"20px"}}>Add Hotel</button>
                        <button className="btn btn-primary"onClick={this.customerDetails.bind(this)}>Customer Details</button>
                        <button className="btn btn-primary"onClick={this.cardetails.bind(this)} style={{marginLeft:"40px"}}>Car Details</button>
                    </div>
                    <button className="btn btn-success"onClick={this.logout.bind(this)}style={{marginLeft:"70%"}}>Logout</button>
                </div>
                <div className="btn-group">
                    <button className="btn btn-info "onClick={this.all.bind(this)}>All</button>
                    <button className="btn btn-info "onClick={this.booked.bind(this)}>Booked</button>
                    <button className="btn btn-info "onClick={this.unbooked.bind(this)}>UnBooked</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Hotel Name</th>
                                <th>Room Number</th>
                                <th>Room Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.hotelList.filter(person => person.roomStatus === this.state.statu || person.roomStatus === this.state.statu1).map(
                                    hotels=>
                                    <tr>
                                        <td>{hotels.id}</td>
                                        <td>{hotels.hotelName}</td>
                                        <td>{hotels.roomNumber}</td>
                                        <td>{hotels.pricePerNight}</td>
                                        <td>{hotels.roomStatus}</td>
                                        <td><button className="btn btn-danger"onClick={()=>this.deleteHotel(hotels.id)}>Delete</button></td>
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

export default HotelList
