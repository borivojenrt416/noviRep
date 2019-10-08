import React, { Component } from "react";
import "./kartica.css";

class Kartica extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      fav:[]
    };
  }





dodajUOmiljeno=(e)=>{
    var objekat=null;
    var niz=[];
    var br=0;
    var indeks=0;
    niz.push(this.state.fav);
   
    for(let i=0;i<this.state.fav.length;i++)
    {
        if(this.state.fav[i].title===e.target.value){
            br=1;
        }
    }


    if(br===1)
    {
        const filtered = this.state.fav.filter(f=>f.id!==e.target.id)
        console.log("filtrirano",filtered)
        this.setState({
            fav:filtered
        })
    }
    if(br===0){

    
    for(let k=0;k<this.props.p.length;k++)
       {
           for(let i=0;i<this.props.p[k].data.length;i++)
           {
               if(e.target.value===this.props.p[k].data[i].title)
                {
                this.setState({
                    fav:[...this.state.fav,this.props.p[k].data[i]]
                })
                console.log(this.props.p[k].data[i]);
                }
           }
       }
   
    }
    }
     

     



  render() {
    // console.log(this.props.p[0].data);
    return (
  
      <div>
        {this.props.p.map(p1 =>
          p1.data.map(d => (
            
            <div className="kartica" key={d.id}>
              <button type="button" className="korpa" value={d.title}>
                🛒
              </button>
              <button type="button" id={d.id} value={d.title} className="fav" onClick={this.dodajUOmiljeno}>
                ♥
              </button>
              <h1 className="ime">{d.title}</h1> <br />
              <div className="opis">
                <h5 className="cont">{d.content}</h5>
                <div className="slika">
                  <img src={d.img} onMouseOver={this.prikazi} />
                  <input type="button" className="vidljivo" value="Detalji" />
                </div>
                <hr />
                <h2 className="cenaTekst">
                  Cena : {d.cena} <span id="cen">RSD</span>
                </h2>
              </div>
            </div>
          ))
        )}
        {/* {this.state.fav.map(f=>(
            <div>
            <h1>{f.title}</h1>
            <h2>{f.content}</h2>
            </div>
        ))} */}
      </div>
    );
  }
}

export default Kartica;
