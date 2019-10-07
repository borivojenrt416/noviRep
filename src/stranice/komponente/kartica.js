import React,{Component} from 'react'
import './kartica.css'


class Kartica extends Component{
constructor(props){
    super(props);
}



    render(){
        // console.log(this.props.p);
        return(
           <div >
              {this.props.p.map(p1=>(p1.data.map(d=>(
               <div className="kartica" key={d.id}><h1 className="ime">{d.title}</h1> <br/><div className="opis">
                                    <h5 className="cont">{d.content}</h5><hr />
                                        <h2>Cena : {d.cena} <span id="cen">RSD</span></h2></div> 
                                        </div> 
              ))))}
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