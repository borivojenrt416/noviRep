import React, { Component } from "react";
import "./kartica.css";
import Fav from '../fav/fav'
class KarticaOmiljeno extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      fav:[]
    };
  }







  render() {
  
    // console.log(this.props.p[0].data);
    return (
  
      <div>
        {/* {this.props.p.map(p1 =>
          p1.data.map(d => (
            
            <div className="kartica" key={d.id}>
              <button type="button" className="korpa" value={d.title}>
                🛒
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
        )} */}


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

export default KarticaOmiljeno;
