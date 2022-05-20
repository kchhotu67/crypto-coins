import axios from 'axios';
import React, { useEffect, useState } from 'react';
import KeyValue from './KeyValue';
import Loader from './Loader';
import './styles/modalContent.css'
function ModalContent({id}){
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

  const percentRound = (value) => {
    return Math.round(value*100)/100;
  }

  const getClassName = (value) => {
    if(value >0){
      return 'value-green';
    }
    return 'value-red';
  }
  return (
    <>
      {data && 
      (
        <div className='modal-content' style={{background: `url(${data.image.large})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
          {/* <img className='icon' src={data.image.large} alt={data.name}/> */}
          <div className='content' >
          <div className='modal-header'>
            <div className="left">
            <img src={data.image.large} alt={data.name}/>
            <div className="name-price">
                <div className='name'>{data.name} ({data.symbol})</div>
                <div className='price'>{'\u0024'} {percentRound(data.market_data.current_price.bmd)}</div>
            </div>
            </div>
            <div className="right">
              <div>Market Cap <span className='bold-value'>{'\u0024'} {percentRound(data.market_data.market_cap.bmd)}</span></div>
              <div>Rank <span className='bold-value'>{data.market_cap_rank}</span></div>
            </div>
          </div>

      
          <KeyValue
            keys={'Market Cap change in 24h'}
            value={`${'\u0024'} ${percentRound(data.market_data.market_cap_change_24h)} (${percentRound(data.market_data.market_cap_change_percentage_24h)}%)`}
            classNames={getClassName(data.market_data.market_cap_change_24h)}
          />
          <KeyValue
            keys={'Price change in 24h'}
            value={`${'\u0024'} ${percentRound(data.market_data.price_change_24h)} (${percentRound(data.market_data.price_change_percentage_24h)}%)`}
            classNames={getClassName(data.market_data.price_change_24h)}
          />

          <KeyValue
            keys={'24 hours High'}
            value={`${'\u0024'} ${percentRound(data.market_data.high_24h.bmd)}`}
            classNames={getClassName()}
          />
          <KeyValue
            keys={'24 hours Low'}
            value={`${'\u0024'} ${percentRound(data.market_data.low_24h.bmd)}`}
            classNames={getClassName()}
          />
          <KeyValue
            keys={'Price change in 1 Week'}
            value={`${percentRound(data.market_data.price_change_percentage_7d)}%`}
            classNames={getClassName(data.market_data.price_change_percentage_7d)}
          />
          <KeyValue
            keys={'Price change in 2 Week'}
            value={`${percentRound(data.market_data.price_change_percentage_14d)}%`}
            classNames={getClassName(data.market_data.price_change_percentage_14d)}
          />
          <KeyValue
            keys={'Price change in 1 Month'}
            value={`${percentRound(data.market_data.price_change_percentage_30d)}%`}
            classNames={getClassName(data.market_data.price_change_percentage_30d)}
          />
          <KeyValue
            keys={'Price change in 2 Month'}
            value={`${percentRound(data.market_data.price_change_percentage_60d)}%`}
            classNames={getClassName(data.market_data.price_change_percentage_60d)}
          />
          <KeyValue
            keys={'Price change in 6 Month'}
            value={`${percentRound(data.market_data.price_change_percentage_200d)}%`}
            classNames={getClassName(data.market_data.price_change_percentage_200d)}
          />
          <KeyValue
            keys={'Price change in 1 Year'}
            value={`${percentRound(data.market_data.price_change_percentage_1y)}%`}
            classNames={getClassName(data.market_data.price_change_percentage_1y)}
          />
          </div>
        </div>
      )}

      {!data && 
        <div className='modal-loader-container'>
          <Loader message={'Loading'}/>
        </div>
      }

    </>
  )
}

export default ModalContent;