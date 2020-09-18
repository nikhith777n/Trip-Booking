import React, { Component } from 'react';

class Userfirstpage extends Component {
    constructor(props)
    {
        super(props)
        console.log("done");
        this.state={
            source: '',
            destination:'',
            date:'',
            
        }
        this.ssource=this.ssource.bind(this);
        this.ddate=this.ddate.bind(this);
        this.ddestination=this.ddestination.bind(this);
        this.search=this.search.bind(this);
        this.logout=this.logout.bind(this);
    }

    logout()
    {
this.props.history.push("/");
    }
    ssource=(event)=>
    {
this.setState({source:event.target.value});
    }

    ddate=(event)=>
    {
this.setState({date:event.target.value});
    }
    ddestination=(event)=>
    {
this.setState({destination:event.target.value});
    }
    cancel()
    {
    this.props.history.push("/user");  
    }
    search(){
       // console.log("going");
        this.props.history.push(`/fd/${this.state.source}/${this.state.destination}/${this.state.date}`);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3" style={{marginTop:"150px"}}>
                        <h3 className="text-center" style={{marginTop:"20px"}}>Book Flight</h3>
                        <div className="card-body">
                        <button className="btn btn-success"  style={{marginLeft:"90%"}}onClick={this.logout}>Logout</button>
                            <form>
                                <div className="form-group">
                                    <label>Source </label>
                                    <input placeholder="source" name="source" className="form-control"
                                         value={this.state.source} onChange={this.ssource}/>
                                    <label>Destination </label>
                                    <input placeholder="destination" name="destination" className="form-control"
                                         value={this.state.destination} onChange={this.ddestination}/>
                                    <label>Date </label>
                                    <input placeholder="Date:dd/mm/yy" name="date" className="form-control"
                                         value={this.state.date} onChange={this.ddate}/>
                                </div>
                                <button className="btn btn-success" onClick={()=>this.search()}>search</button>
                                <button className="btn btn-danger" onClick={()=>this.cancel.bind(this)} style={{marginleft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Userfirstpage;