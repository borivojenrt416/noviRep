import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './stranice/home/home'
import Error from './stranice/Error/error'
import Onama from './stranice/onama/onama'
import Proizvodi from './stranice/proizvodi/proizvodi'
import Heder from './stranice/komponente/heder'
import { Switch } from 'react-router/esm/react-router';
import './stranice/proizvodi/proizvodi.css'
import Futer from './stranice/komponente/futer'
import Omiljeno from './stranice/komponente/omiljeno'
import Fav from './stranice/fav/fav'
import Product from './stranice/komponente/product'
import Kupovina from './stranice/komponente/kupovina';

class App extends React.Component {

  render(){

  
  return (

    <div className="App">
      <Heder />
      <div className="naziv">
      <Switch>
      <Route exact path="/" component={Home}/>
       <Route exact path="/home" component={Home}/>
       <Route exact path="/onama" component={Onama}/>
       <Route exact path="/proizvodi" component={Proizvodi}/>
       <Route exact path="/omiljeno" component={Fav}/>
       <Route exact path="/kupovina" component={Kupovina}/>
       <Route exact path="/product" component={Product} />
       <Route component={Error}/>
     </Switch>
     </div>
    <Futer />
    </div>
 
  );
}
}

export default App;
