/**
* Compoente que retorna un boton con una imagen.
* @version 1.0.0
* @created 23-10-2019
* @lastUpdate 24-10-2019
* @author [Ricardo Blancas Tapia]
*/

import React from 'react';
import './App.css';

function ImgButton(props) {
  //console.log(props);
  return(
    <button className="Img-button" onClick={props.onPress}>
      <img src={props.logo} className="App-button" alt="Jugada" />
    </button>
  );
};

export default ImgButton;
