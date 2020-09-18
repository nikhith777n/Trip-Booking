import React, { Component } from 'react';
import Flightservice from '../services/Flightservice';
class Adminpage extends Component {
    constructor(props)
    {
        super(props)
        this.state={

            flights:[]

        }
        this.modify=this.modify.bind(this);
        this.delete=this.delete.bind(this);
        this.add=this.add.bind(this);
        this.logout=this.logout.bind(this);
    }


    componentDidMount()
    {
        Flightservice.getflight().then((res) => {
            this.setState({flights: res.data});
        });
    }
    logout()
    {
        this.props.history.push('/');
    }
    add()
    {
        this.props.history.push('/newf');
    }
    modify(id)
    {
        console.log('going');
   this.props.history.push(`/update/${id}`);
    }
    delete(id)
    {
    
        Flightservice.deleteflight(id).then(res =>{
            this.setState({flights:this.state.flights.filter(flight=>flight.id!==id)});
        });
        this.props.history.push("/admin");
    }
 
  rc()
    {
        window.location.href="http://localhost:3001/hoteldetails";
   }
    render() {
        return (
            <div style={{backgroundColor:""}}>
                <h2 className="text-center" style={{color:"blue",fontWeight:"bold",marginTop:"30px"}}>Available Flights</h2>
                <div className="row">
                    <button onClick={()=>this.add()} className="btn btn-primary">Add Flight</button>
                  <button style={{marginLeft:"10px"}} onClick={this.rc.bind(this)} className="btn btn-success">Hotel Details</button>
                    <button style={{marginLeft:"850px",backgroundColor:"brown"}} onClick={()=>this.logout()} className="btn btn-danger">Logout</button>
                   

                    <table className = "table table-striped table-bordered" style={{marginTop:"50px"}}>
                       
                            <tr>
                                <th style={{width:"30px"}}>id</th>
                                <th style={{width:"30px"}}>Aid</th>
                                <th style={{width:"30px"}}>source</th>
                                <th style={{width:"30px"}}>destination</th>
                                <th style={{width:"30px"}}>tseats</th>
                                <th style={{width:"30px"}}>as</th>
                                <th style={{width:"30px"}}>date</th>
                                <th style={{width:"30px"}}>price</th>
                                <th style={{width:"30px"}}>Actions</th>
                            </tr>
                      
                        <tbody>
                            {
                            this.state.flights.map(
                                fo =>
                                <tr>
                                    <td>{fo.id}</td>
                                    <td>{fo.aid}</td>
                                    <td>{fo.source}</td> 
                                    <td>{fo.destination}</td> 
                                    <td>{fo.tseats}</td>
                                    <td>{fo.as}</td> 
                                    <td>{fo.date}</td> 
                                    <td>{fo.price}</td>  
                                    <td>
                                    <button onClick={()=>this.modify(fo.id)} className="btn btn-info">Update Flight</button>
                         {/*        <button style={{marginLeft:"10px"}} className="btn-btn-primary" onClick={this.delete(fo.id)}>Delete</button>*/}
                                    <button style={{marginLeft:"10px"}} onClick={()=>this.delete(fo.id)} className="btn btn-danger">Delete Flight</button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
           
            </div>
        );
    }
}

export default Adminpage;