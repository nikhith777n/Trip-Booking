import React, { Component } from 'react';
import Flightservice from '../services/Flightservice'
class Modifyflight extends Component {
ismounted=false;
    constructor(props)
    {
        super(props)
        this.state={
            id:this.props.match.params.id,
            source: '',
            destination: '',
            tseats: 0,
            as: 0,
            aid:'',
            date:'',
            price:0

        }
        
        this.ssource=this.ssource.bind(this);
        this.Aid=this.Aid.bind(this);
        this.ddestination=this.ddestination.bind(this);
        this.ttseats=this.ttseats.bind(this);
        this.aas=this.aas.bind(this);
        this.ddate=this.ddate.bind(this);
        this.pprice=this.pprice.bind(this);
    }

    componentDidMount()
    {
        this.ismounted=true;
        Flightservice.getflightbyid(this.state.id).then((res)=>{
            let flight=res.data;
            this.setState({source: flight.source,destination: flight.destination,tseats: flight.tseats,as:flight.as,price:flight.price,aid:flight.aid,date:flight.date});
        });
    }
    componentWillUnmount()
    {
        this.ismounted=false;

    }
    updateflight = (e) =>
    {
        
        e.preventDefault();
        let flight={aid:this.state.aid,source: this.state.source,destination: this.state.destination,tseats: this.state.tseats,as:this.state.as,price:this.state.price,date:this.state.date};
        console.log('flight=>'+JSON.stringify(flight));
            Flightservice.aupdateflight(flight,this.state.id).then(res =>{
               this.props.history.push('/admin');
            });
            
        }
    
        Aid=(event)=>
    {
        this.setState({aid:event.target.value});
    }
    aas=(event)=>
    {
        this.setState({as:event.target.value});
    }
    ddate=(event)=>
    {
        this.setState({date:event.target.value});
    }
    pprice=(event)=>
    {
        this.setState({price:event.target.value});
    }

    ssource= (event)=>
    {
        this.setState({source:event.target.value});
    }
    ddestination= (event)=>
    {
        this.setState({destination:event.target.value});
    }
    
    ttseats= (event)=>
    {
        this.setState({tseats:event.target.value});
    }
    cancel()
    {
        this.props.history.push('/admin');
    }
    render() {
        return (
            <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                 <h3 className="text-center">Update Flight</h3>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                            <input placeholder="AirportId" name="AirportId" className="form-control"
                                     value={this.state.aid} onChange={this.Aid}/>
                                <input placeholder="source" name="source" className="form-control"
                                     value={this.state.source} onChange={this.ssource}/>
                                <input placeholder="destination" name="destination" className="form-control"
                                     value={this.state.destination} onChange={this.ddestination}/>
                                <input placeholder="tseats" name="tseats" className="form-control"
                                     value={this.state.tseats} onChange={this.ttseats}/>
                                 <input placeholder="availableseats" name="Availableseats" className="form-control"
                                     value={this.state.as} onChange={this.aas}/>
                                <input placeholder="Date-dd/mm/yy" name="date" className="form-control"
                                     value={this.state.date} onChange={this.ddate}/>
                                 <input placeholder="price" name="price" className="form-control"
                                     value={this.state.price} onChange={this.pprice}/>
                            </div>
                            <button className="btn btn-success" onClick={this.updateflight.bind(this)}>Modify</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginleft:"10px"}}>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
        );
    }
}

export default Modifyflight;