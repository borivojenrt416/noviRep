import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./proizvodi.css";
import Side from "../komponente/side.js";
import { withRouter } from "react-router-dom";

const Proizvod = ({ match }) => <p>{match.params.id}</p>;
class Proizvodi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products:JSON.parse(localStorage.getItem("pr")),
      kup: JSON.parse(localStorage.getItem("0")),
      fav: JSON.parse(localStorage.getItem("1"))
    };
  }

  ubaci=()=>
  {
    console.log(this.state.products)
    var niz = [this.state.products.map(pr=>pr.data.filter(d=>d.best===true))]
    console.log(niz)
    localStorage.setItem("best",JSON.stringify(niz))

  }

  componentDidMount(){
    this.ubaci()
  }

  dodajUOmiljeno = e => {
    console.log(this.state.fav);
    var niz = [];

    niz = this.state.fav;

    var objekat = null;
    var br = 0;
    var indeks = 0;

    if (this.state.fav.length !== 0) {
      for (let i = 0; i < this.state.fav.length; i++) {
        if (this.state.fav[i].title === e.target.value) {
          br = 1;
        }
      }
    }

    var objekat = null;
    // this.setState({
    //   fav:[]
    // })
    if (br === 0) {
      for (let k = 0; k < this.state.products.length; k++) {
        for (let i = 0; i < this.state.products[k].data.length; i++) {
          if (e.target.value === this.state.products[k].data[i].title) {
            objekat = this.state.products[k].data[i];
            console.log(this.state.products[k].data[i]);
          }
        }
      }
    }
    this.setState({
      fav: [...this.state.fav, objekat]
    });
    niz = this.state.fav;
    niz.push(objekat);
    const k = niz.filter(n => n !== null);
    localStorage.setItem("1", JSON.stringify(k));
    console.log("session storage items", localStorage.getItem("1"));
    this.setState({
      fav: k
    });
  };

  kupi = e => {
    console.log(this.state.kup);
    var niz = [];

    niz = this.state.kup;

    var objekat = null;
    var br = 0;
    var indeks = 0;
    if(this.state.kup!==null){
    if (this.state.kup.length !== 0) {
      for (let i = 0; i < this.state.kup.length; i++) {
        if (this.state.kup[i].title === e.target.value) {
          br = 1;
        }
      }
    }
  }
  var objekat = null;
  // this.setState({
  //   fav:[]
  // })
  if (br === 0) {
    for (let k = 0; k < this.state.products.length; k++) {
      for (let i = 0; i < this.state.products[k].data.length; i++) {
        if (e.target.value === this.state.products[k].data[i].title) {
          objekat = this.state.products[k].data[i];
          console.log(this.state.products[k].data[i]);
        }
      }
    }
  }
  this.setState({
    kup: [...this.state.kup, objekat]
  });
  niz = this.state.kup;
  niz.push(objekat);
  const k = niz.filter(n => n !== null);
  localStorage.setItem("0", JSON.stringify(k));
  console.log("session storage items", localStorage.getItem("0"));
  this.setState({
    kup: k
  });
  };

  idiNaDetalje = e => {
    console.log(e.target.id);
    var objec = null;
    for (let k = 0; k < this.state.products.length; k++) {
      for (let i = 0; i < this.state.products[k].data.length; i++) {
        if (e.target.id === this.state.products[k].data[i].title) {
          objec = this.state.products[k].data[i];
          console.log(this.state.products[k].data[i]);
        }
      }
    }

    localStorage.setItem("2", JSON.stringify(objec));
    console.log(localStorage.getItem("2"));
    let path = "/product";
    this.props.history.push(path);
  };

  render() {
    return (
      <div>
        <h1>Proizvodi</h1>
        <div>
          <Side
            products={this.state.products}
            dod={this.dodajUOmiljeno}
            idi={this.idiNaDetalje}
            kupovina={this.kupi}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Proizvodi);
