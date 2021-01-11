import './Language.css';
import React from 'react';

const Language = () => {
  return (
    <div className="langcomp">
      <div className="ui images">
        <img
          alt="flag"
          onClick={() => {
            localStorage.setItem('lang', 'tr');
            window.location.reload();
          }}
          className="flag"
          src="https://cdn.countryflags.com/thumbs/turkey/flag-waving-250.png"></img>
        <img
          alt="flag"
          className="flag"
          onClick={() => {
            localStorage.setItem('lang', 'en');
            window.location.reload();
          }}
          src="https://cdn.countryflags.com/thumbs/united-kingdom/flag-waving-250.png"></img>
      </div>
    </div>
  );
};

export default Language;
