import React, { useState } from 'react'
import Popup from './Popup'


    const PokemonMiniature = ({id, name, image, image2, type, stVie, stAtq, stDef, stAtqSpe, stDefSpe,stVit}) =>  {
    const style = `mini-container ${type}`
    const [buttonPopup, SetButtonPopup] = useState(false);

    
    
    return(
        
        <div className={style}>
            <button className="vide" onClick={()=>SetButtonPopup(true)}>
            <div className="nombre">
                <small>#0{id}</small>
            </div>
            <img src ={image} alt={name}/>
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
            </div>
            </button>
            <Popup 
        trigger={buttonPopup}
        setTrigger={SetButtonPopup}
        id={id}
        name={name}
        image={image}
        image2={image2}
        type = {type}
        stVie={stVie}
        stAtq={stAtq}
        stDef={stDef}
        stAtqSpe={stAtqSpe}
        stDefSpe={stDefSpe}
        stVit={stVit}
       >

        </Popup>
        
        </div>
      

    )
}
export default PokemonMiniature