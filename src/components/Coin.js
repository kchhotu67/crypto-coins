import React from 'react'
import './styles/coin.css'

function Coin({data, openModal}) {

  const getFormatedDateTime = (time) => {
    const dt = new Date(time);
    return dt.toLocaleString();
  }

  return (
    <tr className="coin" onClick={() => {openModal(data.id)}}>
      <td>
        <img className='icon' src={data.image} alt="" />
      </td>
      <td>
      <div className="name">{data.name}</div>
      </td>
      <td>
      <div className="symbol">{data.symbol}</div>
      </td>
      <td><div className="price"> {'\u0024'} {Math.round(data.current_price*10000)/10000}</div></td>
      <td>
        <div className={data.price_change_percentage_24h > 0 ? 'change-green': 'change-red'}>{Math.round(data.price_change_percentage_24h*100)/100} %</div>

      </td>
      <td>
      <div className="market-cap">{'\u0024'} {data.market_cap}</div>
      </td>
      <td>
      <div className="last-updated">{getFormatedDateTime(data.last_updated)}</div>
      </td>
    </tr>
  )
}

export default Coin