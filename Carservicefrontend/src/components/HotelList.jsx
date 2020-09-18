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

    render() {
        return (
            <div>
                <div className="row">
                    <div className="btn-group">
                        <button className="btn btn-primary"onClick={this.addHotel} style={{marginLeft:"20px"}}>Add Car</button>
                        <button className="btn btn-primary"onClick={this.customerDetails.bind(this)}>Customer Details</button>
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
                                <th>Car Name</th>
                                <th>Car Number</th>
                                <th>PricePerMile</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.hotelList.filter(person => person.carStatus === this.state.statu || person.carStatus === this.state.statu1).map(
                                    hotels=>
                                    <tr>
                                        <td>{hotels.id}</td>
                                        <td>{hotels.driverName}</td>
                                        <td>{hotels.carNumber}</td>
                                        <td>{hotels.pricePerMile}</td>
                                        <td>{hotels.carStatus}</td>
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
