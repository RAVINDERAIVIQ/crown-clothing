import React from 'react'; 
import {Route, Switch} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () =>(
  <div>
    <h1> HATS PAGE </h1>
  </div>
)
const Jackets = () =>(
  <div>
    <h1>Jackets page</h1>
  </div>
)

function App() {
  return  (
   <div>
     <Switch>
       <Route exact path='/' component = {HomePage} />
       <Route path='/hats' component = {HatsPage} />
       <Route path='/jackets' component ={Jackets}/>
     </Switch>
   </div>
  )
}

export default App;
