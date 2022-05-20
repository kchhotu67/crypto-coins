import React, { useState } from 'react'
import Coin from './Coin'
import Modal from './Modal'
import ModalContent from './ModalContent';

function CoinList({data, showModal, setShowModal}) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalId, setModalId] = useState('');
  return (
    <table>
      <thead>
        <tr>
          <th>Logo</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Current Price</th>
          <th>24 Hours Change</th>
          <th>Market Cap</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
      {data.map(item => {
        return <Coin data = {item} key={item.id} openModal={(id) => {setModalId(id); setIsOpen(true)}}/>
      })}
      <Modal open={isOpen} hide={() => {setIsOpen(false)}}>
        <ModalContent id={modalId}/>
      </Modal>
      </tbody>
    </table>
  )
}



export default CoinList