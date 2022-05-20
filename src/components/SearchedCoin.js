import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './styles/coin.css'

function SearchedCoin({id, openModal}) {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect( () => {
    fetchData();
  }, [])
  const getFormatedDateTime = (time) => {
    const dt = new Date(time);
    return dt.toLocaleString();
  }
  return (
    <>
    {data ? <tr className="coin" onClick={() => {openModal(data.id)}}>
      <td>
        <img className='icon' src={data.image.large} alt="" />
      </td>
      <td>
      <div className="name">{data.name}</div>
      </td>
      <td>
      <div className="symbol">{data.symbol}</div>
      </td>
      <td><div className="price"> {'\u0024'} {Math.round(data.market_data.current_price.usd*10000)/10000}</div></td>
      <td>
        <div className={data.price_change_percentage_24h > 0 ? 'change-green': 'change-red'}>{Math.round(data.market_data.price_change_percentage_24h*100)/100} %</div>

      </td>
      <td>
      <div className="market-cap">{'\u0024'} {data.market_data.market_cap.bmd}</div>
      </td>
      <td>
      <div className="last-updated">{getFormatedDateTime(data.last_updated)}</div>
      </td>
    </tr> : null}
    </>
  )
}

export default SearchedCoin