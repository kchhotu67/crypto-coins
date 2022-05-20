import React from 'react'
import './styles/pager.css';

function Pager({prevPage, pageNo, nextPage}) {
  return (
    <div className='pager'>
      <button onClick={prevPage}>Prev</button>
      <span>{pageNo}</span>
      <button onClick={nextPage}>Next</button>
    </div>
  )
}

export default Pager