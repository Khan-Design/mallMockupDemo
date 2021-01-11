import React, {useState} from 'react';
import {translate} from '../../assets/dictionary';
import './Sales.css';

const Sales = () => {
  const [isPopupActive, setPopupActive] = useState(0);
  return (
    <div className="Sales">
      <div onClick={() => setPopupActive(1)} className="ui red fixedBtn button">
        {translate('campaign')}
      </div>
      <div className={`ui ${isPopupActive === 1 && 'active'} modal`}>
        <div className="header">
          {translate('campaign')}
          <div
            onClick={() => {
              setPopupActive(0);
            }}
            className="ui circular red button">
            X
          </div>
        </div>
        <div className="content">
          <div className="campaign">
            <img
              alt="kampanya"
              className="image"
              src="https://1.bp.blogspot.com/-3bs60LBmN7I/UrBMqJFvMGI/AAAAAAAAPOM/GwVAEfNtbMg/s1600/kampanya.jpg"
            />
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetuer</p>
            </div>
          </div>
          <div className="divider" />
          <div className="campaign">
            <img
              alt="kampanya"
              className="image"
              src="https://1.bp.blogspot.com/-3bs60LBmN7I/UrBMqJFvMGI/AAAAAAAAPOM/GwVAEfNtbMg/s1600/kampanya.jpg"
            />
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetuer</p>
            </div>
          </div>
          <div className="divider" />
          <div className="campaign">
            <img
              alt="kampanya"
              className="image"
              src="https://1.bp.blogspot.com/-3bs60LBmN7I/UrBMqJFvMGI/AAAAAAAAPOM/GwVAEfNtbMg/s1600/kampanya.jpg"
            />
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetuer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
