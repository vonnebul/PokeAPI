import React, { useEffect, useState } from 'react'

function Popup(props) {
    
    const style = `popup-inner ${props.type}`;

    const [data, setData] =useState(null)
    useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/evolution-chain/${props.id}/`)
    .then(data => setData(data))
    },[]);

    return(props.trigger) ? (
        <div className="popup">
            <div className={style}>
                <div className="test">
                    <h3> {props.name} | type: {props.type}</h3>
                   
                    
                </div>
                <div className="images">
                    <div className="sous-image">
                        <img src ={props.image} className="imgFront"/>
                        <img src ={props.image2} className="imgBack"/>
                    </div>
                <table className="tableauStat">
                    <thead>
                        <tr>
                            <th className="statCentre">Statistiques</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>HP</td>
                            <td className="statDroite">{props.stVie}</td>
                        </tr>
                        <tr>
                            <td>Attaque</td>
                            <td className="statDroite">{props.stAtq}</td>
                        </tr>
                        <tr>
                            <td>Défense</td>
                            <td className="statDroite">{props.stDef}</td>
                        </tr>
                        <tr>
                            <td>Attaque-spé</td>
                            <td className="statDroite">{props.stAtqSpe}</td>
                        </tr>
                        <tr>
                            <td>Défense-spé</td>
                            <td className="statDroite">{props.stDefSpe}</td>
                        </tr>
                        <tr>
                            <td>Vitesse</td>
                            <td className="statDroite">{props.stVit}</td>
                        </tr>
                    </tbody>
                </table>
                </div>


                <i class="close-btn far fa-times-circle" onClick={()=> props.setTrigger(false)} ></i>

            </div>
        </div>
    ): "";
}

export default Popup