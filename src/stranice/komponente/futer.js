import React,{Component} from 'react'
import './futer.css'

class Futer extends Component{


    render(){
            return(
<div className="futer">
    <div className="call">
                <h2>📞CALL CENTAR</h2>
                <h4>Fizička lica<br />
                011 44 14 000</h4>
                <h4>Pozivi sa mobilne mreže<br />
                066 6 67 67 67</h4>
                <h4>Pravna lica<br />
                011 44 14 010</h4>

    </div>
    <div className="newsletter">
                <h3>Prijavite se na Newsletter</h3>
                <form className="forma">
                    <input type="email" placeholder="upisite vasu email adresu"/><button type="submit">Prijavi se </button>
                </form>
    </div>
    <div className="radnoVremeCall">
            <h3>Radno vreme Call Centra</h3>
            <h4>Ponedeljak - Petak:<br/> od 08h do 20h<br/>
Subota:<br/> od 09h do 17h<br/>
Nedelja:<br/> neradni dan </h4>
    </div>
</div>

            );
    }
}

export default Futer;