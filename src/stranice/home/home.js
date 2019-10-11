import React,{Component} from 'react'
import Gde from '../komponente/gde'

class Home extends Component{
constructor(props){
    super(props);
    this.state={
        best:JSON.parse(localStorage.getItem("best"))
    }
}
idiNaDetalje=(e)=>{
    console.log(e.target.id)
    var objec=null;
    console.log(this.state.best[0])
    for(let k=0;k<this.state.best.length;k++)
           {
              for(let j=0;j<this.state.best[k].length;j++){
                  console.log(this.state.best[k][j])
                    for(let o=0;o<this.state.best[k][j].length;o++)
                    {
                       if(this.state.best[k][j][o].title===e.target.id)
                       {
                           objec = this.state.best[k][j][o]
                       }
                    }
                //    if(e.target.id===this.state.best[k].title)
                //     {
                //    objec=this.state.best[k]
 
                   
                //     }
               }
           
  console.log(objec)
  localStorage.setItem("2",JSON.stringify(objec));
  console.log(localStorage.getItem("2"))
  let path="/product"
  this.props.history.push(path)
  
  }
}
    render(){
        const st={
            float:'left',
            width:'70%'
        }
        const karta = {
            height:'23vw'
        }
        console.log(this.state.best)
        return(
            <div>
            <h1>Home page</h1>
            <Gde />
            <div style={st}>
            {
                this.state.best.map(bes=>(
                    bes.map(be=>be.map(b=>(
                        <div className="kartica" style = {karta}key={b.id}>
                        <button type="button" className="korpa" value={b.title}>
                          🛒
                        </button>
                        <button type="button" id={b.id} value={b.title} className="fav" onClick={this.props.dodaj}>
                ♥
              </button>
                        <h1 className="ime">{b.title}</h1> <br />
                        <div className="opis">
                        <br/><br/><br/><br/>
                          <div className="slika">
                            <img src={b.img} onMouseOver={this.prikazi} />

                          </div>
                          <hr />
                          <h2 className="cenaTekst">
                            Cena : {b.cena} <span id="cen">RSD</span>
                          </h2>
                        </div><br/>
                        <input type="button" id={b.title} className="obicno" value="Detalji" onClick={this.idiNaDetalje}/>
                      </div>
                    ))
                )
                ))
            }
            </div>
            </div>
 
        );
    }
}

export default Home;