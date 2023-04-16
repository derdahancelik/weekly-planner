import React from 'react';
import './Header.css';

const Header = ({ setView, addNote }) => {
  const handleChange = (event) => {
    setView(event.target.value);
  };

  const handleClick = () => {
    // burada not ekleme işlemleri yapılabilir
  };

  return (
    <div className="header">
      <h1>Program Takvimi</h1>
      <div className="buttons">
        <button onClick={handleClick}>Not Ekle</button>
        <select onChange={handleChange}>
          <option value="month">Ay</option>
          <option value="week">Hafta</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
