import './HateOnion.css'
import React, { useState } from 'react';

function HateOnion() {
    var [imageVisible, setImageVisible] = useState(false);
    var [classDiv, setClassDiv] = useState('first-color');
    
    const handleClick = (event) =>{
        let text = event.target.value
        console.log(text)
        setImageVisible(text === 'cebolla');
        setClassDiv('second-color');
        text === 'cebolla'? setClassDiv('second-color'):setClassDiv('first-color')
    }

  return (
    <>
      <div className= {'container ' + classDiv} >
        <p>Ingrese un texto: </p>
        <input type="text" onChange={handleClick}/>
        {imageVisible && <img src='../public/calamar.svg' alt="" />}
        {!imageVisible && <img src='../public/rabbit.svg' id="rabbit" alt="" />}
      </div>
    </>
  )
}

export default HateOnion