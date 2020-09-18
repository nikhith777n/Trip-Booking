import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';
import AdminService from '../services/AdminService';

export class CustomerSelectHotel extends Component {
    constructor(props){
        super (props)
        this.state = {
            hotelId:"",
            hotelName:"",
            roomNumber:"",
            checkInDate:"",
            checkOutDate:"",
            nbOfDays:""
        }
        this.changeCheckInDateHandler=this.changeCheckInDateHandler.bind(this);
        this.changeCheckOutDateHandler=this.changeCheckOutDateHandler.bind(this);
        this.changeNbOfDaysHandler=this.changeNbOfDaysHandler.bind(this);
    }

    saveHotel=(e)=>{
        e.preventDefault();
        let Customer={hotelName: this.state.hotelName,roomNumber: this.state.roomNumber,checkInDate:this.state.checkInDate,checkOutDate:this.state.checkOutDate,nbOfDays:this.state.nbOfDays};
        let hotel={roomStatus:"Booked",roomNumber:"",hotelId:"",hotelName:"",pricePerNight:""};
        AdminService.updateHotel(hotel,this.state.hotelId);
        console.log('hotel=>'+JSON.stringify(Customer));
        CustomerService.createHotel(Customer).then((res)=>{
            this.props.history.push({
                pathname : '/customerdetails',
                state :{hotelId:this.state.hotelId,hotelName: this.state.hotelName,roomNumber: this.state.roomNumber,checkInDate:this.state.checkInDate,checkOutDate:this.state.checkOutDate,nbOfDays:this.state.nbOfDays}} );
        });
    }

    changeCheckInDateHandler=(event) => {
        this.setState({checkInDate:event.target.value});
    }
    changeCheckOutDateHandler=(event)=>{
        this.setState({checkOutDate:event.target.value});
    }
    changeNbOfDaysHandler=(event)=>{
        this.setState({nbOfDays:event.target.value});
    }
    hotelNameHandler(hotelName,hotelId){
        this.setState({hotelName:hotelName,hotelId:hotelId});
    }
    roomNumberHandler(roomNumber){
        this.setState({roomNumber: roomNumber});
    }

    cancel(){
        this.props.history.push('/customerhoteldetails');
    }
    


    render() {
        const hotels = this.props.location.state
        return (
            <div>
                <div className="container">
                   <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h1 className="text-center">Create Hotel</h1>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Hotel Name</label>
                                    <input placeholder="Hotel name" name="hotelName" className="form-control"value={hotels.hotelName} onChange={this.hotelNameHandler.bind(this,hotels.hotelName,hotels.hotelId)} />
                                </div>
                                <div className="form-group">
                                    <label>Room Number</label>
                                    <input placeholder="Room Number" name="roomNumber" className="form-control"value={hotels.roomNumber} onChange={this.roomNumberHandler.bind(this,hotels.roomNumber)} />
                                </div>
                                <div className="form-group">
                                    <label>Check In Date</label>
                                    <input placeholder="Check In" name="checkInDate" className="form-control"value={this.state.checkInDate} onChange={this.changeCheckInDateHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Check Out Date</label>
                                    <input placeholder="Check Out" name="checkOutDate" className="form-control"value={this.state.checkOutDate} onChange={this.changeCheckOutDateHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Number Of Days</label>
                                    <input placeholder="Days" name="nbOfDays" className="form-control"value={this.state.nbOfDays} onChange={this.changeNbOfDaysHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.saveHotel}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>
                            </form>
                        </div>
                   </div>
               </div>
            </div>
        )
    }
}

export default CustomerSelectHotel
