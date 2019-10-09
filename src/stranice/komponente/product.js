import React,{Component} from 'react'
import Gde from './gde'
import { withRouter} from 'react-router-dom'

class Product extends Component{
    constructor(props){
        super(props);
    
        this.state={
                obj:JSON.parse(localStorage.getItem("2"))
        }
    }
    
idiNazad=()=>{
    this.props.history.push("/proizvodi")

}

render(){
    const bgc = {
        backgroundColor:"white",
        color:"black",
        padding:"0.8vw",
        margin:"0",
        clear:"both"
    }
    console.log(this.state.obj);
    return(
<div style={bgc}>

    <h1>
        {this.state.obj.title}
    </h1>
    <div className="img">
        <img src={this.state.obj.img} />
    </div>
        <h5>{this.state.obj.content}</h5>
        <h3>{this.state.obj.cena}<span>RSD</span></h3>
        <button type="button" value="NAZAD" onClick={this.idiNazad}>IDI NA STRANICU SA PROIZVODIMA</button>
</div>
    );
}

}
export default withRouter(Product);