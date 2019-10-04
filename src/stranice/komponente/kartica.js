import React,{Component} from 'react'
import './kartica.css'


class Kartica extends Component{
constructor(props){
    super(props);
}



    render(){
        console.log(this.props.p);
        return(
           <div>
               <h1>{this.props.p}</h1>
               {/* {this.props.p.map((pp)=>(
                    <div className="kartica">
                        <div className="title">
                    <h1>{pp.title}</h1>
                    </div>
                    <div className="cont">
                        <h4>{pp.content}</h4>
                    </div>
                     </div>
               ))} */}
               </div>
        );
    }
}


export default Kartica;