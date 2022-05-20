import React, { useState } from 'react'
import Modal from './Modal';
import ModalContent from './ModalContent';
import SearchedCoin from './SearchedCoin'

function SearchedCoinList({data}) {
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
        return <SearchedCoin id = {item.id} key={item.id} openModal={(id) => {setModalId(id); setIsOpen(true)}}/>
      })}
      <Modal open={isOpen} hide={() => {setIsOpen(false)}}>
        <ModalContent id={modalId}/>
      </Modal>
      </tbody>
    </table>
  )
}

export default SearchedCoinList