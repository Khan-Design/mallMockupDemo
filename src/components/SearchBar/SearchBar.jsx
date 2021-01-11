import React, {useState} from 'react';
import {ShopList} from '../../assets/ShopList';
import './SearchBar.css';

const SearchBar = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [currentVal, setCurrentVal] = useState('');

  const handleChange = (value) => {
    setCurrentVal(value);
    if (value.length > 0) {
      setShowOptions(true);
    }
  };

  const handleSelect = (shop) => {
    setCurrentVal(shop.title);
    setShowOptions(false);
  };

  return (
    <div className="searchContainer">
      <div className="input">
        <input
          className="searchInput"
          onChange={(e) => handleChange(e.target.value)}
          value={currentVal}
        />
      </div>
      {showOptions && (
        <div className="options">
          {ShopList.filter((shop) =>
            shop.title.toLowerCase().includes(currentVal.toLowerCase())
          ).map((shop) => (
            <div
              key={shop.title}
              className="option"
              onClick={() => handleSelect(shop)}>
              <span className="category">{shop.category} </span>
              <span className="titles">{shop.title}</span>
            </div>
          ))}
        </div>
      )}
      <div className="iconContainer">
        <i className="ui search icon"></i>
      </div>
    </div>
  );
};

export default SearchBar;
