import React, { Component } from 'react';
import admin from '../images/admin.png';
class Loginpage extends Component {
    constructor(props)
    {
        super(props)
        this.state=
        {

        }
        this.userlogin=this.userlogin.bind(this)
        this.Adminlogin=this.Adminlogin.bind(this)
    }
    userlogin()
    {
        this.props.history.push('/user')
    }
    Adminlogin()
    {
        this.props.history.push('/admin')
    }

    render() {
        return (
            <div style={{backgroundImage:`url(${admin})`,backgroundSize:"cover"}}>
               <div className="row">
                   <div className="btn-group">
                   <button style={{marginTop:"325px",marginLeft:"470px"}}className="btn btn-success btn-lg" onClick={this.userlogin}>User login</button>
                   <button style={{marginTop:"325px",marginLeft:"10px",}}className="btn btn-danger btn-lg" onClick={this.Adminlogin}>Admin login</button>
                   </div>
               </div>
            </div>
        );
    }
}

export default Loginpage;
