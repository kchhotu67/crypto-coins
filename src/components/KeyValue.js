import React from 'react'
import './styles/keyvalue.css'

function KeyValue({keys, value, classNames}) {
  return (
    <div className="key-value">
      <div className="key">{keys}</div>
      <div className={classNames}>{value}</div>
    </div>
  )
}

export default KeyValue