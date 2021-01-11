import React, {useState} from 'react';
import {translate} from '../../assets/dictionary';
import './Floors.css';

const Floors = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const checkIndex = (index) => {
    return selectedIndex === index ? ' active' : '';
  };

  return (
    <div className="floors tab">
      <div className="ui top attached tabular menu">
        {Array(6)
          .fill(1)
          .map((value, index) => (
            <div
              onClick={() => setSelectedIndex(index + 1)}
              className={`item ${checkIndex(index + 1)}`}>
              {translate('floor')} {index + 1}
            </div>
          ))}
      </div>
      {Array(6)
        .fill(1)
        .map((value, index) => (
          <div
            className={`ui bottom attached ${checkIndex(
              index + 1
            )} tab segment`}>
            <img
              className="floorMap"
              alt="map"
              src={`http://www.istanbulcevahir.com//images/img_floor${
                index + 1
              }.png`}
            />
          </div>
        ))}
    </div>
  );
};

export default Floors;
