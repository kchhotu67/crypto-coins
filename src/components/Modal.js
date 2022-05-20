import React from 'react'
import ReactDOM from 'react-dom';
import './styles/modal.css'

function Modal({open, hide, children}) {
  if(!open) return null;
  return ReactDOM.createPortal(
    <div className='modal-overlay'>
      <div className='modal-container'>
        <div className='close-button'>
          <button onClick={hide}>X</button>
        </div>
        {children}
      </div>
    </div>, document.getElementById('portal')
  )
}

export default Modal