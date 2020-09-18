import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import HotelList from './components/HotelList';
import CreateHotel from './components/CreateHotel';
import Main from './components/Main';
import CustomerHotelList from './components/CustomerHotelList';
import AdminCustomerDetails from './components/AdminCustomerDetails';
import CustomerSelectHotel from './components/CustomerSelectHotel';
import Log from './components/Log';
import CustomerDetails from './components/CustomerDetails';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Main}></Route>
            <Route path="/main" exact component={Main}></Route>
            <Route path="/hoteldetails" component={HotelList}></Route>
            <Route path="/createhotel" component={CreateHotel}></Route>
            <Route path="/customerhoteldetails" component={CustomerHotelList}></Route>
            <Route path="/admincustomerdetails" component={AdminCustomerDetails}></Route>
            <Route path="/customerselecthotel" component={CustomerSelectHotel}></Route>
            <Route path="/log" component={Log}></Route>
            <Route path="/customerdetails" component={CustomerDetails}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
