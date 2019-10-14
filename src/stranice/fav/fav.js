import React, { Component } from "react";
import Gde from "../komponente/gde";


class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      omiljeno: JSON.parse(localStorage.getItem("fav1"))
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
    localStorage.setItem("fav1",JSON.stringify(niz2))
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
  componentDidMount(){
    this.setState({
      omiljeno:JSON.parse(localStorage.getItem("fav1"))
    })
  }
  render(){
    const visina = {
      height:'23.5vw'
    };
    const error={
      color:'yellow',
      backgroundColor:'rgb(97,97,97)',
      width:'90%',
      margin:'10vw auto',
      padding:'3vw',
      clear:'left',


    }
    const stil ={
      color:'black',
      width:'100%',
      float:'left',
      
  }
  const error2={
    color:'yellow',
    backgroundColor:'rgb(97,97,97)',
    width:'100%',
    margin:'auto',
    padding:'1.25vw 0'

  }

    console.log(this.state.omiljeno);
    if(this.state.omiljeno!==null)
    {
      if(this.state.omiljeno.length!==0)
      {
    return (
      <div>
        <div className="all" style={stil}>
         <h1  style={error2}>Vasi omiljeni proizvodi</h1>
        <Gde />
        <div className="des">
          {this.state.omiljeno.map(om => (
            <div className="kartica" style={visina} key={om.id}>
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
      </div></div>
    );
    }
    else
    {
      return(
        <div>
        <div className="all" style={stil}>
        <h1  style={error2}>Vasi omiljeni proizvodi</h1>
        
        <Gde />
        <div className="des">
         
        <h1 style={error} >Vasa lista sa omiljenim proizvodima je prazna!<br/>Molimo Vas, selektujte proizvode koji vam se dopadaju!</h1>
        </div>
      
      </div>
                      
                      </div>
            );
        
    }
  }
          else
          {
            return(
              <div>
              <div className="all" style={stil}>
              <h1  style={error2}>Vasi omiljeni proizvodi</h1>
              
              <Gde />
              <div className="des">
               
              <h1 style={error} >Vasa lista sa omiljenim proizvodima je prazna!<br/>Molimo Vas, selektujte proizvode koji vam se dopadaju!</h1>
              </div>
            
            </div>
                            
                            </div>
            );
          }
  }
}

export default Fav;
