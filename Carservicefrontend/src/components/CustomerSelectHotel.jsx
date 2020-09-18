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
        let Customer={sourceLocation: this.state.hotelName,destinationLocation: this.state.roomNumber,leavingDate:this.state.checkInDate,returningDate:this.state.checkOutDate,nbOfDays:this.state.nbOfDays};
        let hotel={carStatus:"Booked",carNumber:"",hotelId:"",driverName:"",pricePerMile:""};
        AdminService.updateHotel(hotel,this.state.hotelId);
        console.log('hotel=>'+JSON.stringify(Customer));
        CustomerService.createHotel(Customer).then((res)=>{
            this.props.history.push({
                pathname : '/customerdetails',
                state :{sourceLocation: this.state.hotelName,destinationLocation: this.state.roomNumber,leavingDate:this.state.checkInDate,returningDate:this.state.checkOutDate,nbOfDays:this.state.nbOfDays}} );
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
    hotelNameHandle =(event)=>{
        this.setState({hotelName:event.target.value});
    }
    roomNumberHandler =(event)=>{
        this.setState({roomNumber:event.target.value});
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
                        <h1 className="text-center">Book Car</h1>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Source Location</label>
                                    <input placeholder="From where?" name="hotelName" className="form-control"value={this.state.sourceLocation} onChange={this.hotelNameHandler.bind(this,hotels.hotelName,hotels.hotelId)} />
                                </div>
                                <div className="form-group">
                                    <label>Destination Location</label>
                                    <input placeholder="Where to?" name="roomNumber" className="form-control"value={this.state.destinationLocation} onChange={this.roomNumberHandler.bind(this,hotels.roomNumber)} />
                                </div>
                                <div className="form-group">
                                    <label>Leaving Date</label>
                                    <input placeholder="Leaving on" name="checkInDate" className="form-control"value={this.state.checkInDate} onChange={this.changeCheckInDateHandler}/>
                                </div>
                                <div className="form-group">
                                    <label>Returning Date</label>
                                    <input placeholder="Returning on" name="checkOutDate" className="form-control"value={this.state.checkOutDate} onChange={this.changeCheckOutDateHandler}/>
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
