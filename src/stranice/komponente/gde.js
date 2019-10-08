import React,{Component} from 'react'
import './gde.css'

class Gde extends Component{
constructor(props){
    super(props);
    this.state={
        radnje: [{
            adresa:'Kirovljeva 17, Banovo Brdo',
            broj:'011 3541379'
          },
          {
            adresa:'Cara Nikolaja II 41, Vračar',
            broj:'011 3085715'
          },
          {
            adresa:'Žička 18-20, Vračar',
            broj:'011 6304419'
          },
          {
            adresa:'Immo Centar, Gandijeva 21, Novi Beograd',
            broj:'011 2284014'
          },
          {
            adresa:'Stadion SC, Zaplanjska 32, Voždovac',
            broj:'011 4049111'
          }]
    }
}

    render(){
       return(
       <div className="gde">
       <h5>GDE NAS MOZETE NACI?</h5><hr />
       {this.state.radnje.map(r=>(
         <div className="radnje">
         <h6>{r.adresa}</h6>
         <h6>{r.broj}</h6><hr/>
         </div>
       ))}
   </div>
   );
    }
}

export default Gde;