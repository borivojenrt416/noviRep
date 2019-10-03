import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './proizvodi.css'
import Side from '../komponente/side.js'

const Proizvod = ({match}) => <p>{match.params.id}</p>
class Proizvodi extends Component{
constructor(props){
    super(props);
    this.state={
        products:{
            pegle:[
            {
            id:"1",
            title:"Pegle",
            content:"pegla pegla pegla pegla"
        }],
        monitori:[{
            id:"2",
            title:"Monitori",
            content:"monitor monitor monitor monitor"
        }],
        misevi:[{
            id:"3",
            title:"Misevi",
            content:"mis mis mis mis"
        }],
        telefoni:[{
            id:"4",
            title:"Telefoni",
            content:"mis mis mis mis"
        }],
        lusteri:[{
            id:"5",
            title:"Lusteri",
            content:"mis mis mis mis"
        }],
        tableti:[{
            id:"6",
            title:"Tableti",
            content:"mis mis mis mis"
        }
    ]}
    }
}

    render()
    {

        return(
            <div>
       
             <h1>Proizvodi</h1>
             <div>
             <Side products={this.state.products} />
             </div>
                

            </div>
        )
    }
}

export default Proizvodi;