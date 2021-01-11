import './App.css';
import React from 'react';
import Floors from './components/Floors/Floors';
import Language from './components/Language/Language';
import SearchBar from './components/SearchBar/SearchBar';
import Sales from './components/Sales/Sales';

const App = () => {
  return (
    <div className="app">
      <header>
        <Sales />
        <div className="lang">
          <Language />
        </div>
      </header>

      <div className="components">
        <div className="search">
          <SearchBar />
        </div>
      </div>
      <div className="floorButtons">
        <Floors />
      </div>
    </div>
  );
};

export default App;

// var mapboxgl = require ('mapbox-gl/dist/mapbox-gl.js');

// mapboxgl.accessToken =
//   'pk.eyJ1IjoibWZpbmMiLCJhIjoiY2tqbDYxaXl6MDVkbjJ4dGZva2ZkeWE1dCJ9.SMPIZGtGaSiKfvspki0l-Q';
// var map = new mapboxgl.Map ({
//   container: 'mapContainer',
//   style: 'mapbox://styles/mapbox/indoor',
// });
