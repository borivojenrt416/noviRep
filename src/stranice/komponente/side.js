import React, { Component } from "react";
import "./side.css";
import Kartica from "./kartica";
var niz = [];

class Side extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pros: [],
      ischk: false,
      num:0
    };
  }

  show = e => {

    var n = e.target.value;
    for(let i in this.props.products)
    {
        if (i.name === n)
        {
            niz.push(i.data)
        }
    }
    if (!e.target.defaultChecked) {
      this.setState({
        pros: niz,
        ischk: !this.state.ischk,
  
      });
    } else
      this.setState({
        pros: null,
        ischk: !this.state.ischk
      });
    console.log(this.state.pros);
  };

  render() {
    console.log(this.props.products[0].data);
    // console.log(this.props.products);
    if (this.state.pros === null) {
      return (
        <div>
          {" "}
          <div className="products">
            {this.props.products.map(product => (
              <div className="check">
                <label for={product.index}>{product.name}</label>
                <input
                  type="checkbox"
                  id={product.index}
                  value={product.name}
                  onChange={this.show}
                  className={this.state.ischk}
                  defaultChecked={this.state.ischk}
                />
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {" "}
          <div className="products">
            {this.props.products.map(product => (
              <div className="check">
                <label for={product.index}>{product.name}</label>
                <input
                  type="checkbox"
                  id={product.index}
                  value={product.name}
                  onChange={this.show}
                  className={this.state.ischk}
                  defaultChecked={this.state.ischk}
                />
              </div>
            ))}
          </div>
          <div className="side">
            <Kartica p={this.state.pros} />
          </div>
        </div>
      );
    }
  }
}

export default Side;
