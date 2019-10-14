import React,{Component} from 'react'
import Kartica from './kartica';
import Gde from './gde'
import './kupovina.css'
class Kupovina extends Component{
constructor(props){
    super(props);
    this.state={
        kupljeno:JSON.parse(localStorage.getItem("kupi")),
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
    
    
        localStorage.setItem("kupi",JSON.stringify(niz2))
        var ukupno=0
        for(let i=0;i<niz2.length;i++)
        {  
              console.log(niz2[i])
              var w =document.getElementById("1".concat(JSON.stringify(niz2[i].title))).value
              console.log(w)
              var uInt = parseInt(JSON.parse(w))
              var tk = JSON.stringify(niz2[i].cena)
              console.log(tk)
              var b = tk.replace('.','')
              console.log(b)
              var h = JSON.parse(b)
              console.log(h)
              ukupno+=uInt*parseInt(h)  
              console.log(ukupno)
          
        }
        this.setState({
          kupljeno: niz2
        });
        var n = ukupno.toLocaleString()
        console.log(n)
        // console.log(this.state.kupljeno[i])
        this.setState({
            racun:n
        })
        localStorage.setItem("brojProizvoda",JSON.stringify(niz2.length))
        this.props.azuriraj();
        console.log(niz2.length)
        
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
        this.setState({
         kupljeno:JSON.parse(localStorage.getItem("kupi"))
        })
      }


      promeniCenu=(e)=>{
          var pamti = ""
            var val = e.target.value;
            var niz = this.state.kupljeno
            var niz2 = this.state.kupljeno
            for(let i=0;i<niz.length;i++)
            {
                if("1".concat(JSON.stringify(niz[i].title))===e.target.id)
                {   
                    pamti=JSON.stringify(niz[i].cena)
                    // var k = JSON.stringify(niz[i].cena)
                    // console.log(k)
                    // var a = k.replace('.','')
                    // console.log(a)
                    // var p = JSON.parse(a)
                    // console.log(p)
                    // niz[i].cena=(parseInt(p)*parseInt(val)).toString()
                    // console.log(niz[i].cena);
                }
                   
            }

            var ukupno=0
            for(let i=0;i<niz.length;i++)
            {  
                  var w =document.getElementById("1".concat(JSON.stringify(niz[i].title))).value
                  console.log(w)
                  var uInt = parseInt(JSON.parse(w))
                  var tk = JSON.stringify(niz[i].cena)
                  console.log(tk)
                  var b = tk.replace('.','')
                  console.log(b)
                  var h = JSON.parse(b)
                  console.log(h)
                  ukupno+=uInt*parseInt(h)  
              
            }
        
            var n = ukupno.toLocaleString()
            // console.log(this.state.kupljeno[i])
            this.setState({
                racun:n
            })
            for(let i=0;i<niz.length;i++)
            {
                if("1".concat(JSON.stringify(niz[i].title))===e.target.id)
                niz[i].cena=JSON.parse(pamti)
            }
            console.log(val)
            console.log(this.state.kupljeno)
      }

    render(){
      console.log(localStorage.getItem("kupi"))
        const cena2tekst={
            fontSize:'1.5vw',
            float:'left'
        }
       
        const stil ={
            color:'black',
            width:'100%',
            float:'left',
            
        }

        const error={
          color:'yellow',
          backgroundColor:'rgb(97,97,97)',
          width:'90%',
          margin:'10vw auto',
          padding:'3vw'
        }

        const error2={
          color:'yellow',
          backgroundColor:'rgb(97,97,97)',
          width:'100%',
          margin:'auto',
          padding:'1.25vw 0'

        }
        console.log(this.state.kupljeno)
        if(this.state.kupljeno!==null){
          if(this.state.kupljeno.length!==0)
          {
        return(
            <div>
            <div className="all" style={stil}>
            <h1 style={error2}>Proizvodi koje zelite da kupite</h1>
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
                    KOLICINA : <input id={"1".concat(JSON.stringify(om.title))} type="number" defaultValue="1" onChange={this.promeniCenu} min="1"/>
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
              else{
                return(
<div>
            <div className="all" style={stil}>
            <h1  style={error2}>Proizvodi koje zelite da kupite</h1>
            
            <Gde />
            <div className="des">
             
            <h1 style={error} >Vasa korpa je prazna.<br/>Molimo Vas, stavite zeljene proizvode u korpu!</h1>
            </div>
          
          </div>
                          
                          </div>
                );
              }
            }
            else{
              return(
                <div>
                            <div className="all" style={stil}>
                            <h1  style={error2}>Proizvodi koje zelite da kupite</h1>
                            
                            <Gde />
                            <div className="des">
                             
                            <h1 style={error} >Vasa korpa je prazna.<br/>Molimo Vas, stavite zeljene proizvode u korpu!</h1>
                            </div>
                          
                          </div>
                                          
                                          </div>
                                );
            }
    }
}

export default Kupovina;