import React, { Component } from 'react';
import Flightservice from '../services/Flightservice';
class Createflight extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            source: '',
            destination: '',
            aid:'',
            tseats: '',
            as: '',
            date:'',
            price:''
        }
        this.source=this.source.bind(this);
        this.Aid=this.Aid.bind(this);
        this.destination=this.destination.bind(this);
        this.tseats=this.tseats.bind(this);
        this.aas=this.aas.bind(this);
        this.pprice=this.pprice.bind(this);
        this.ddate=this.ddate.bind(this);
        this.saveflight= this.saveflight.bind(this); 
    }
    ddate=(event)=>
    {
        this.setState({date:event.target.value});
    }
    aas=(event)=>
    {
        this.setState({as:event.target.value});
    }
    Aid=(event)=>
    {
        this.setState({aid:event.target.value});
    }
    pprice=(event)=>
    {
        this.setState({price:event.target.value});
    }
    source= (event)=>
    {
        this.setState({source:event.target.value});
    }
    destination= (event)=>
    {
        this.setState({destination:event.target.value});
    }
    
    tseats= (event)=>
    {
        this.setState({tseats:event.target.value});
    }
    cancel()
    {
        this.props.history.push('/admin');
    }
    saveflight = (e) =>
    {
        
        e.preventDefault();
        let flight={aid:this.state.aid,source: this.state.source,destination: this.state.destination,tseats: this.state.tseats,as:this.state.as,price:this.state.price,date:this.state.date};
        Flightservice.addflight(flight).then(res =>{
            console.log('flight=>'+JSON.stringify(flight));
            this.props.history.push('/admin');
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Add Flight</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                <input placeholder="source" name="source" className="form-control"
                                     value={this.state.source} onChange={this.source}/>
                                <input placeholder="destination" name="destination" className="form-control"
                                     value={this.state.destination} onChange={this.destination}/>
                                <input placeholder="totalseats" name="tseats" className="form-control"
                                     value={this.state.tseats} onChange={this.tseats}/>
                                 <input placeholder="availableseats" name="Availableseats" className="form-control"
                                     value={this.state.as} onChange={this.aas}/>
                                <input placeholder="AirportId" name="AirportId" className="form-control"
                                     value={this.state.aid} onChange={this.Aid}/>
                                 <input placeholder="price" name="price" className="form-control"
                                     value={this.state.price} onChange={this.pprice}/>
                                <input placeholder="Date-dd-mm-yy" name="date" className="form-control"
                                     value={this.state.date} onChange={this.ddate}/>
                            
                                </div>
                                <button className="btn btn-success" onClick={this.saveflight}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginleft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Createflight;
