import React, { Component } from "react";
import Gde from "../komponente/gde";


class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      omiljeno: JSON.parse(localStorage.getItem("1"))
    };
  }

  removeItem = e => {
    console.log("pritisnuto!");
    let value = e.target.value;
    let objekat = null;

    var n = this.state;

    let niz = [];
    niz = this.state.omiljeno;
    console.log(niz);
    let niz2 = niz.filter(n => n.title !== value);

    this.setState({
      omiljeno: niz2
    });
    localStorage.setItem("1",JSON.stringify(niz2))
  };


  idiNaDetalje=(e)=>{
    console.log(e.target.id)
    var objec=null;
    console.log(this.state.omiljeno[0])
    for(let k=0;k<this.state.omiljeno.length;k++)
           {
              
                   if(e.target.id===this.state.omiljeno[k].title)
                    {
                   objec=this.state.omiljeno[k]
 
                   
                    }
               }
           
  
  localStorage.setItem("2",JSON.stringify(objec));
  console.log(localStorage.getItem("2"))
  let path="/product"
  this.props.history.push(path)
  
  }

  render() {
    console.log(this.state.omiljeno);
    
    return (
      <div>
        <h1>Vasa lista zelja</h1>
        <Gde />
        <div className="des">
          {this.state.omiljeno.map(om => (
            <div className="kartica" key={om.id}>
              <button type="button" className="korpa" value={om.title}>
                🛒
              </button>
              <button
                type="button"
                className="fav"
                value={om.title}
                onClick={this.removeItem}
              >
                ✘
              </button>
              <h1 className="ime">{om.title}</h1> <br />
              <div className="opis">
                <h5 className="cont">{om.content}</h5>
                <div className="slika">
                  <img src={om.img} onMouseOver={this.prikazi} />
                  <input type="button" id={om.title} className="vidljivo" value="Detalji" onClick={this.idiNaDetalje}/>
                </div>
                <hr />
                <h2 className="cenaTekst">
                  Cena : {om.cena} <span id="cen">RSD</span>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Fav;
