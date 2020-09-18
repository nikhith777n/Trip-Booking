import React, { Component } from 'react'
import AdminService from '../services/AdminService';

export class CreateHotel extends Component {
    constructor(props){
    super(props)
    this.state = {
        hotelName:'',
        pricePerNight:'',
        roomNumber:'',
        roomStatus:'UnBooked'
    }
    this.changeHotelNameHandler=this.changeHotelNameHandler.bind(this);
    this.changeRoomNumberHandler=this.changeRoomNumberHandler.bind(this);
    this.changePricePerNightHandler=this.changePricePerNightHandler.bind(this);
    this.saveHotel=this.saveHotel.bind(this);

    }

    saveHotel=(e)=>{
        e.preventDefault();
        let Hotel={hotelName: this.state.hotelName,roomNumber: this.state.roomNumber,pricePerNight:this.state.pricePerNight,roomStatus:this.state.roomStatus};
        console.log('hotel=>'+JSON.stringify(Hotel));
        
        AdminService.createHotel(Hotel).then((res)=>{
            this.props.history.push('/hoteldetails');
        });
    }
    changeHotelNameHandler=(event) => {
        this.setState({hotelName:event.target.value});
    }
    changeRoomNumberHandler=(event)=>{
        this.setState({roomNumber:event.target.value});
    }
    changePricePerNightHandler=(event)=>{
        this.setState({pricePerNight:event.target.value});
    }
    cancel(){
        this.props.history.push('/hoteldetails');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h1 className="text-center">Create Hotel</h1>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Hotel Name</label>
                                    <input placeholder="Hotel name" name="hotelName" className="form-control"value={this.state.hotelName} onChange={this.changeHotelNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Room Number</label>
                                    <input placeholder="Room Number" name="roomNumber" className="form-control"value={this.state.roomNumber} onChange={this.changeRoomNumberHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Price Per Night</label>
                                    <input placeholder="Price Per Night" name="pricePerNight" className="form-control"value={this.state.pricePerNight} onChange={this.changePricePerNightHandler}/>
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

export default CreateHotel
