import React, { Component } from 'react'
import AdminService from '../services/AdminService';

export class CreateHotel extends Component {
    constructor(props){
    super(props)
    this.state = {
        driverName:'',
        pricePerMile:'',
        carNumber:''
    }
    this.changeHotelNameHandler=this.changeHotelNameHandler.bind(this);
    this.changeRoomNumberHandler=this.changeRoomNumberHandler.bind(this);
    this.changePricePerNightHandler=this.changePricePerNightHandler.bind(this);
    this.saveHotel=this.saveHotel.bind(this);

    }

    saveHotel=(e)=>{
        e.preventDefault();
        let Hotel={driverName: this.state.driverName,carNumber: this.state.carNumber,pricePerMile:this.state.pricePerMile,carStatus:'UnBooked'};
        console.log('hotel=>'+JSON.stringify(Hotel));

        AdminService.createHotel(Hotel).then((res)=>{
            this.props.history.push('/hoteldetails');
        });
    }
    changeHotelNameHandler=(event) => {
        this.setState({driverName:event.target.value});
    }
    changeRoomNumberHandler=(event)=>{
        this.setState({carNumber:event.target.value});
    }
    changePricePerNightHandler=(event)=>{
        this.setState({pricePerMile:event.target.value});
    }
    cancel(){
        this.props.history.push('/hoteldetails');
    }

    render() {
        return (
            <div>
               <div className="container">
                   <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h1 className="text-center">Add Car</h1>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Car Name</label>
                                    <input placeholder="Car name" name="hotelName" className="form-control"value={this.state.driverName} onChange={this.changeHotelNameHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Car Number</label>
                                    <input placeholder="Car Number" name="roomNumber" className="form-control"value={this.state.carNumber} onChange={this.changeRoomNumberHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Price Per Mile</label>
                                    <input placeholder="Price Per Mile" name="pricePerMile" className="form-control"value={this.state.pricePerMile} onChange={this.changePricePerNightHandler}/>
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
