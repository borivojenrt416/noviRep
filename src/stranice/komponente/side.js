import React,{Component} from 'react'
import './side.css'

class Side extends Component{
    constructor(props){
        super(props);
    }

  
    render(){
     
    
        console.log(this.props.products)
        return(
        <div className="products">
     
{this.props.products.map((product,index)=>(
 <div className="check" key={index}>
 <label>{product.title}</label> 
 <input type="checkbox" />
 </div>
                     ))}    
            </div>
          );

    }
}

export default Side;