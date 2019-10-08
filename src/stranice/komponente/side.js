import React, { Component } from "react";
import "./side.css";
import Kartica from "./kartica";
import Gde from './gde'
var niz = [];

class Side extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pros: [],
      ischk: false,
      // radnje: [{
      //   adresa:'Kirovljeva 17, Banovo Brdo',
      //   broj:'011 3541379'
      // },
      // {
      //   adresa:'Cara Nikolaja II 41, Vračar',
      //   broj:'011 3085715'
      // },
      // {
      //   adresa:'Žička 18-20, Vračar',
      //   broj:'011 6304419'
      // },
      // {
      //   adresa:'Immo Centar, Gandijeva 21, Novi Beograd',
      //   broj:'011 2284014'
      // },
      // {
      //   adresa:'Stadion SC, Zaplanjska 32, Voždovac',
      //   broj:'011 4049111'
      // },]
    };
  }

  show = e => {
    var check = e.target.checked;
    var value = e.target.value;
    var obj=null;
    if(check){
      
      for(let i=0;i<this.props.products.length;i++){
          if(value==this.props.products[i].name)
          {
            obj=this.props.products[i];
          }
        }
        var niz=[];
        // niz.push(this.state.pros);
        // niz=[];
        niz.push(obj);
        this.setState({
          pros:[...this.state.pros,niz]
        })

    } else {
     
      var filtered =  this.state.pros.filter(pro =>  pro[0].name !== value);
      console.log(filtered)
      this.setState({pros : filtered});

    }
  
  }

  
  render() {
      return (
        <div>
          {" "}
          <div className="products">
            <div className="unutra">
            {this.props.products.map(product => (
              <div className="check"  key={product.index}>
                <label htmlFor={product.index}>{product.name}</label>
                <input
                  type="checkbox"
                  id={product.index}
                  value={product.name}
                  onChange={this.show}
                  className={this.state.ischk ? this.state.ischk : ''}
                  defaultChecked={this.state.ischk}

                />
              </div>
            ))}
            </div>
                {/* <div className="gde">
              <h5>GDE NAS MOZETE NACI?</h5><hr />
              {this.state.radnje.map(r=>(
                <div className="radnje">
                <h6>{r.adresa}</h6>
                <h6>{r.broj}</h6><hr/>
                </div>
              ))}
          </div> */}
          <div className="gdee">
          <Gde />
          </div>


            </div>
            <div className="des">
              
            {
              this.state.pros.map(pro=>(
                
                  <Kartica key={pro.id} className="desno" p={pro}/>
                
              ))
            }
        
          </div>
          
        </div>
       
      );

  }
}

export default Side;
