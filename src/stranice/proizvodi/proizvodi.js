import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './proizvodi.css'
import Side from '../komponente/side.js'

const Proizvod = ({match}) => <p>{match.params.id}</p>
class Proizvodi extends Component{
constructor(props){
    super(props);
    this.state={
        products:[{
            name:'pegle',
            index:1,
            data:[
            {
            id:"p1",
            title:"Pegla1",
            content:"pegla1 pegla1 pegla1 pegla1"
        },
        {
            id:"p2",
            title:"Pegla2",
            content:"pegla2 pegla2 pegla2 pegla2"
        },
        {
            id:"p3",
            title:"Pegla3",
            content:"pegla3 pegla3 pegla3 pegla3"
        }]},
        {
        name:'monitori',
        index:2,
        data:[{
            id:"m1",
            title:"Monitor1",
            content:"monitor1 monitor1 monitor1 monitor1"
        },
        {
            id:"m2",
            title:"Monitor2",
            content:"monitor2 monitor2 monitor2 monitor2"
        },
        {
            id:"m3",
            title:"Monitor3",
            content:"monitor3 monitor3 monitor3 monitor3"
        }]},
        {
        name:'misevi',
        index:3,
        data:[{
            id:"mi1",
            title:"Mis1",
            content:"mis1 mis1 mis1 mis1"
        },
        {
            id:"mi2",
            title:"Mis2",
            content:"mis2 mis2 mis2 mis2"
        },
        {
            id:"mi3",
            title:"Mis3",
            content:"mis3 mis3 mis3 mis3"
        }]},
        {
        name:'telefoni',
        index:4,
        data:[{
            id:"t1",
            title:"Telefon1",
            content:"telefon1 telefon1 telefon1 telefon1"
        },
        {
            id:"t2",
            title:"Telefon2",
            content:"telefon2 telefon2 telefon2 telefon2"
        },
        {
            id:"t3",
            title:"Telefon3",
            content:"telefon3 telefon3 telefon3 telefon3"
        }]},
        {
        name:'lusteri',
        index:5,
        data:[{
            id:"l1",
            title:"Luster1",
            content:"luster1 luster1 luster1 luster1"
        },
        {
            id:"l2",
            title:"Luster2",
            content:"luster2 luster2 luster2 luster2"
        },
        {
            id:"l3",
            title:"Luster3",
            content:"luster3 luster3 luster3 luster3"
        }]},
        {
        name:'tableti',
        index:6,
        data:[
            {
            id:"tab1",
            title:"Tablet1",
            content:"tablet1 tablet1 tablet1 tablet1"
        },
        {
            id:"tab2",
            title:"Tablet2",
            content:"tablet2 tablet2 tablet2 tablet2"
        },
        {
            id:"tab3",
            title:"Tablet3",
            content:"tablet3 tablet3 tablet3 tablet3"
        }
    ]}]
    }
}

    render()
    {

        return(
            <div>
       
             <h1>Proizvodi</h1>
             <div>
             <Side products={this.state.products} />
             </div>
            </div>

            
        )
    }
}

export default Proizvodi;