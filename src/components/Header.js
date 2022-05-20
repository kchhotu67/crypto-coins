import React, { useState } from 'react'
import './styles/header.css';
import refresh_icon from '../assets/images/refresh-icon.png';
import search_icon from '../assets/images/search-icon.png';

function Header({onRefresh, onSearch}) {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const refreshData = () => {
    setText('');
    onRefresh();
  }
  const searchFunc = () => {
    if(text.length <1 ){
      return;
    }
    onSearch(text);
  }
  return (
    <div className='header'>
      <h2 className='title'>Crypto Coins</h2>
      <div className='search-area'>
        <div className='search-container'>
          <input placeholder='Type here' type="text" value={text} onChange={handleChange} className="search-box" />
          <button className='search-btn' onClick={searchFunc}><img src={search_icon} alt="search"/></button>
        </div>
        <button className='refresh-btn' onClick={refreshData}><img src={refresh_icon} alt="refresh"/></button>
      </div>
    </div>
  )
}

export default Header