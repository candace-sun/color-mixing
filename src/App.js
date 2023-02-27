import './App.css';
import Color from './components/color.js';
import Board from './components/board.js';
import Add from './components/add.js';
import Canvas from './components/canvas.js';
import { HelmetProvider } from 'react-helmet-async';
import React, { useState } from 'react';

function App() {
  const [state, setState] = useState({hex: '#000000', colors: ['#000000'], count: [0]});

  const colorItems = state.count.map(count => <Color key={count} number={count} 
    color={state.colors[count]}
    addNewColor = {(value, number) => {
      addNewColor(value, number);
  }}/>);

  const addNewColor = (value, number) =>{ 
    const colors = state.colors.slice();
    colors[number] = value;

    //setState({hex: value, colors: colors, count: state.count}); 
    mixColors(colors);
  }

  function rgbToHex(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length === 1)
      r = "0" + r;
    if (g.length === 1)
      g = "0" + g;
    if (b.length === 1)
      b = "0" + b;

    return "#" + r + g + b;
  }

  function hexToRgb(hex) {
    var bigint = parseInt(hex.slice(1), 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return [r, g, b];
  }
   
  function mixColors(colors) {
    var [r, g, b] = [0, 0, 0];

    for (var i = 0; i < colors.length; i++) {
      var rgbArray = hexToRgb(colors[i]);
      r += rgbArray[0];
      g += rgbArray[1];
      b += rgbArray[2];
    }

    r = Math.round(r / colors.length);
    g = Math.round(g / colors.length);
    b = Math.round(b / colors.length);

    setState({hex: rgbToHex(r, g, b), colors: colors, count: state.count});
  }

  return (
    <HelmetProvider>
      <div className='app-container'>
        <Board hex={state.hex} />
          <Canvas pState={{state, setState}} rgbToHex={rgbToHex}/>
        <div className='colors-grid'>          
          {colorItems}
          <Add pState={{state, setState}} />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
