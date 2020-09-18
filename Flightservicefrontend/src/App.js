import React from 'react';
import './App.css';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import Loginpage from './components/Loginpage';
import Adminpage from './components/Adminpage';
import Modifyflight from './components/Modifyflight';
import Displayflights from './components/Displayflights';
import Successful from './components/Successful';
import Userfirstpage from './components/Userfirstpage';
import Createflight from './components/Createflight';


function App() {
  return (
    <div>
      <Router>
          <div className="container">
            <Switch>
              <Route path='/' exact component={Loginpage}></Route>
              <Route path='/admin' component={Adminpage}></Route>
              <Route path='/user' component={Userfirstpage}></Route> 
  {/*"<Route path='/fmodify' component={Modifyflight}></Route> */}    
              <Route path='/newf' component={Createflight}></Route>
              <Route path='/update/:id' component={Modifyflight}></Route>
              <Route path='/fd/:source/:destination/:date' component={Displayflights}></Route>
              <Route path='/successful/:source/:destination/:id/:seatno/:aid/:date' component={Successful}></Route>
            </Switch>

          </div>
      </Router>
    </div>
  );
}

export default App;
