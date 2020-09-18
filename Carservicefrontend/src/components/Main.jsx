import React, { Component } from 'react'

export class Main extends Component {
    constructor(props){
        super (props)
    }
    admin(){
        this.props.history.push('/hoteldetails');
    }
    customer(){
        this.props.history.push('/customerhoteldetails')
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary"onClick={this.admin.bind(this)}>Admin</button>
                <button className="btn btn-danger"onClick={this.customer.bind(this)}>Customer</button>
            </div>
        )
    }
}

export default Main
