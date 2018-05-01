import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let temLens = [];

class lens {
  constructor(xCenter, x, y, f, kind, name){
    this.xCenter = xCenter;
    this.x = x;
    this.y = y;
    this.f = f;
    this.kind = kind;
    this.name = name;
  }
}

//              xCenter, WIDTH, y, f, kind, name
temLens[0] = new lens(0,0,-10,5, 'source', 'Electron Gun');
temLens[1] = new lens(0,0,55,55, 'lens', 'Gun lens');
temLens[2] = new lens(0,0,100,90, 'label', 'Gun Deflection 1');
temLens[3] = new lens(0,20,130,0, 'label', 'Gun Deflection 2');
temLens[4] = new lens(0,0,210,60, 'lens', 'Condenser Lens 1');
temLens[5] = new lens(0,0,260,6.1, 'aperture', 'C1 Aperture');
temLens[6] = new lens(0,0,305,75, 'lens', 'Condenser Lens 2');
temLens[7] = new lens(0,0,330,25, 'aperture', 'C2 Aperture');
temLens[8] = new lens(0,0,337,5, 'label', 'Condenser Stigmator');
temLens[9] = new lens(0,0,343,55, 'label', 'Beam Deflection X');
temLens[10] = new lens(0,0,349,9, 'label', 'Beam Deflection Y');
temLens[11] = new lens(0,0,356,24, 'lens', 'Minicondenser Lens');
temLens[12] = new lens(0,0,417,30, 'lens', 'Objective UpperPolepiece');
temLens[13] = new lens(0,0,458,-10, 'sample', 'Specimen');
temLens[14] = new lens(0,0,510,40, 'lens', 'Objective LowerPolepiece');
temLens[15] = new lens(0,0,550,16, 'aperture', 'Objective Aperture');
temLens[16] = new lens(0,0,570,16, 'label', 'Objective Stigmator');
temLens[17] = new lens(0,0,576,100, 'label', 'Image Deflection 1');
temLens[18] = new lens(0,0,582,10, 'label', 'Image Deflection 2');
temLens[19] = new lens(0,0,588,15, 'label', 'Diffraction Stigmator');
temLens[20] = new lens(0,0,594,24, 'aperture', 'SAED Aperture');
temLens[21] = new lens(0,0,630,45, 'lens', 'Diffraction Lens');
temLens[22] = new lens(0,0,700,30, 'lens', 'Intermediate Lens');
temLens[23] = new lens(0,0,773,25, 'lens', 'Projection lens 1');
temLens[24] = new lens(0,0,805,60, 'lens', 'Projection Lens 2');
temLens[25] = new lens(0,0,1090,5, 'screen', 'Viewing Screen');

//creates the labels for the lenses
let zoomedOutLabels = [];
for(let i = 0; i < temLens.length; i++){
  zoomedOutLabels[i] = document.createElement('div');
  zoomedOutLabels[i].name = temLens[i].name;
  zoomedOutLabels[i].number = i;
  zoomedOutLabels[i].classList.add(temLens[i].kind);
  zoomedOutLabels[i].classList.add('columnZoomButton');
  zoomedOutLabels[i].style.position = 'absolute';
  zoomedOutLabels[i].style.border= 'white solid 2px';
  zoomedOutLabels[i].style.padding = '0px 0px 0px 0px';
  zoomedOutLabels[i].style.background = '#000';
  zoomedOutLabels[i].style.color = '#fff';
  zoomedOutLabels[i].style.width = zoomedOutLabels[i].name.length * 5 + 7 + 'px';
  zoomedOutLabels[i].style.height = 11 + 'px';
  zoomedOutLabels[i].innerHTML = zoomedOutLabels[i].name;
  zoomedOutLabels[i].style.font = '10px Arial';
  zoomedOutLabels[i].style.textAlign = 'center';
}

class Label extends Component {
  render(name) {
    return (
      <p>{name}</p>
    )
  }
}

class App extends Component {
  renderLabel(name){
    return <Label />
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Electron Gun</p>
        {this.renderLabel('Gun lens')}
      </div>
    );
  }
}

export default App;
