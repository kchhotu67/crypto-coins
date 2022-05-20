import React, { useEffect, useState } from 'react'
import './styles/loader.css'

function Loader({message}) {
  const [dot, setDot] = useState('.');
  useEffect(() => {
    setTimeout(() => {
      if(dot.length >=3){
        setDot('.');
      }else if(dot.length>=2){
        setDot('...')
      }else{
        setDot('..');
      }
    }, 300)
  }, [dot]);
  return (
    <div className='loader'>
      <div className='text-message'>{message+dot}</div>
    </div>
  )
}

export default Loader