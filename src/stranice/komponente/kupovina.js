import React,{Component} from 'react'
import Kartica from './kartica';
import Gde from './gde'
import './kupovina.css'
class Kupovina extends Component{
constructor(props){
    super(props);
    this.state={
        kupljeno:JSON.parse(localStorage.getItem("0")),
        racun:null
    };
    }

ponovo=()=>
{
    var ukupno=0
    if(this.state.kupljeno!==null)
    {
    for(let i=0;i<this.state.kupljeno.length;i++)
    {
        // for(let k=0;k<this.state.kupljeno[i].length)
        var a = JSON.stringify(this.state.kupljeno[i].cena)
        var d = a.replace('.','')
        var s = JSON.parse(d)
        ukupno+=parseInt(s)
    }

    var n = ukupno.toLocaleString()
    // console.log(this.state.kupljeno[i])
    this.setState({
        racun:n
    })
    }
   
}

    removeItem = e => {
        console.log("pritisnuto!");
        let value = e.target.value;
        let objekat = null;
    
        var n = this.state;
    
        let niz = [];
        niz = this.state.kupljeno;
        console.log(niz);
        let niz2 = niz.filter(n => n.title !== value);
    
        this.setState({
          kupljeno: niz2
        });
        localStorage.setItem("0",JSON.stringify(niz2))
        var ukupno=0
    for(let i=0;i<niz2.length;i++)
    {
        // for(let k=0;k<this.state.kupljeno[i].length)
        var a = JSON.stringify(niz2[i].cena)
        var d = a.replace('.','')
        var s = JSON.parse(d)
        ukupno+=parseInt(s)
    }

    var n = ukupno.toLocaleString()
    // console.log(this.state.kupljeno[i])
    this.setState({
        racun:n
    })
   
      };
    
    
      idiNaDetalje=(e)=>{
        console.log(e.target.id)
        var objec=null;
        console.log(this.state.kupljeno[0])
        for(let k=0;k<this.state.kupljeno.length;k++)
               {
                  
                       if(e.target.id===this.state.kupljeno[k].title)
                        {
                       objec=this.state.kupljeno[k]
     
                       
                        }
                   }
               
      
      localStorage.setItem("2",JSON.stringify(objec));
      console.log(localStorage.getItem("2"))
      let path="/product"
      this.props.history.push(path)

      
      }

      componentDidMount(){
        this.ponovo()
      }


      promeniCenu=(e)=>{
          var pamti = ""
            var val = e.target.value;
            var niz = this.state.kupljeno
            for(let i=0;i<niz.length;i++)
            {
                if(niz[i].title===e.target.id)
                {   
                    pamti=JSON.stringify(niz[i].cena)
                    var k = JSON.stringify(niz[i].cena)
                    console.log(k)
                    var a = k.replace('.','')
                    console.log(a)
                    var p = JSON.parse(a)
                    console.log(p)
                    niz[i].cena=(parseInt(p)*parseInt(val)).toString()
                    console.log(niz[i].cena);
                }
                   
            }

            var ukupno=0
            for(let i=0;i<niz.length;i++)
            {
                // for(let k=0;k<this.state.kupljeno[i].length)
                var a = niz[i].cena
                var d = a.replace('.','')
                var s = JSON.parse(d)
                ukupno+=parseInt(s)
            }
        
            var n = ukupno.toLocaleString()
            // console.log(this.state.kupljeno[i])
            this.setState({
                racun:n
            })
            for(let i=0;i<niz.length;i++)
            {
                if(niz[i].title===e.target.id)
                niz[i].cena=JSON.parse(pamti)
            }
            console.log(val)
            console.log(this.state.kupljeno)
      }

    render(){

        const cena2tekst={
            fontSize:'1.5vw',
            float:'left'
        }
       
        const stil ={
            color:'black',
            width:'100%',
            float:'left',
            
        }

        return(
            <div>
            <div className="all" style={stil}>
            <h1>Proizvodi koje zelite da kupite</h1>
            <Gde />
            <div className="des">
              {this.state.kupljeno.map(om => (
                <div className="kartica" key={om.id}>
                  <button type="button" className="korpa" value={om.title} onClick={this.props.dodaj}>
                  ♥
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
                    <div class="kol">
                    KOLICINA : <input id={om.title} type="number" defaultValue="1" onChange={this.promeniCenu} min="1"/>
                    </div>
                  </div>
                </div>

              ))}

            </div>
          
          </div>
                          <div className="r" style={stil}>
                            <h3 style={cena2tekst}>UKUPNO ZA PLACANJE : {this.state.racun} <span id="cen2">RSD</span></h3>
                          </div>
                          </div>
        );
    }
}

export default Kupovina;