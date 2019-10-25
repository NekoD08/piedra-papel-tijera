/**
* App principal
* @version 1.0.0
* @created 23-10-2019
* @lastUpdate 24-10-2019
* @author [Ricardo Blancas Tapia]
*/

import React from 'react';
import piedra from './assets/piedra.jpg';
import papel from './assets/papel.jpg';
import tijera from './assets/tijera.jpg';
import './App.css';
import ImgButton from './img-button.js';

class App extends React.Component {
  constructor (props) {
     super(props);
     this.state = {
       jugador: "",
       pc: "",
       wPc: 0,
       wJugador: 0,
       mensaje: "",
     };
  }

  render () {

    const play = (selected) => {
      let jugada = Math.floor(Math.random()*3, 0);
      let jugadas = ['Piedra', 'Papel', 'Tijeras'];
      this.setState({
        pc: jugadas[jugada],
        jugador: selected,
      }, () => {
        setTimeout(() => {
          evaluate();
        }, 1000);})
    }

    const evaluate = () => {
      const { pc, jugador } = this.state;
      let { wPc, wJugador } = this.state;
      let mensaje = "";
      if((jugador === "Papel" && pc === "Piedra") || (jugador === "Piedra" && pc === "Tijeras") || (jugador === "Tijeras" && pc === "Papel")){
        wJugador = wJugador + 1;
        mensaje = "¡Ganaste!";
      }
      //if(jugador === "Piedra" && pc === "Tijeras"){wJugador = wJugador + 1}
      //if(jugador === "Tijeras" && pc === "Papel"){wJugador = wJugador + 1}

      if((jugador === "Papel" && pc === "Tijeras") || (jugador === "Piedra" && pc === "Papel") || (jugador === "Tijeras" && pc === "Piedra")){
        wPc = wPc + 1;
        mensaje = "Perdiste";
      }
      //if(jugador === "Piedra" && pc === "Papel"){wPc = wPc + 1}
      //if(jugador === "Tijeras" && pc === "Piedra"){wPc = wPc + 1}

      this.setState({wJugador, wPc, mensaje},
        () => {
          setTimeout(() => {
            this.setState({mensaje: "", pc: "", jugador: ""});
          }, 1000)
        });
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Piedra, Papel o Tijera
          </p>
        </header>
        <header className="App-score">
          <p>
            {`${this.state.wJugador} - ${this.state.wPc}`}
          </p>
        </header>
        <header className ="Score">
          <p>
            marcador
          </p>
        </header>

        <div className="App-body">
          <div className="Column-contain-left">
            <header className ="Header-mid">
              <p>
                Tú <br/> Selecciona una opción
              </p>
            </header>
            <div className="Container">
              <div className="Column-contain">
                <ImgButton onPress={() => play("Papel")} logo={papel}/>
                <ImgButton onPress={() => play("Piedra")} logo={piedra}/>
                <ImgButton onPress={() => play("Tijeras")} logo={tijera}/>
              </div>
            </div>

          </div>

          <div className="Column-contain-center">

            {this.state.mensaje === "" ?
              <div className="Container">
                <div className="Result-contain">
                  {this.state.jugador !== "" ?
                    <img
                      src={this.state.jugador === "Piedra" ? piedra : this.state.jugador === "Papel" ? papel : this.state.jugador === "Tijeras" ? tijera : null}
                      className="Image" alt="Jugador" />
                    : <div></div>}
                  <p>
                    {this.state.jugador !== "" ? this.state.jugador : ""}
                  </p>
                </div>
                <hr/>
                <div className="Result-contain">
                  {this.state.pc !== "" ?
                    <img
                      src={this.state.pc === "Piedra" ? piedra : this.state.pc === "Papel" ? papel : this.state.pc === "Tijeras" ? tijera : null}
                      className="Image" alt="Jugador" />
                    : <div></div>}
                  <p>
                    {this.state.pc !== "" ? this.state.pc : ""}
                  </p>
                </div>
              </div>
            :
              <p>{this.state.mensaje}</p>
            }

          </div>


          <div className="Column-contain-rigth">
            <header className ="Header-mid">
              <p>Computadora</p>
            </header>
            <div className="Container">
              <div className="Column-contain">
                <img src={papel} className="Image-small" alt="logo" />
                <img src={piedra} className="Image-small" alt="logo" />
                <img src={tijera} className="Image-small" alt="logo" />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
