import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CoinList from './CoinList'
import Header from './Header'
import Loader from './Loader';
import Pager from './Pager';
import SearchedCoinList from './SearchedCoinList';
import './styles/home.css'

function Home() {
  const [coins, setCoins] = useState([]);
  const [searchedCoins, setSearchedCoins] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [searchedTab, setSearchedTab] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [searchMessage, setSearchMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const getCoinsData = async () => {
    setLoadingData(true);
    try {
      const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${pageNo}&sparkline=false`);
      if(res.data){
        setCoins(res.data);
        setLoadingData(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const refreshData = () => {
    getCoinsData();
    setSearchedTab(false);
  }
  const prevPage = () => {
    if(pageNo === 1){
      return;
    }else{
      setPageNo(pageNo-1);
    }
  }
  const nextPage = () => {
    setPageNo(pageNo+1);
  }
  useEffect(() => {
    getCoinsData();
  }, [pageNo]); 

  const getSearchedCoins = async (text) => {
    setLoadingData(true);
    setSearchMessage(`Result for '${text}'`);
    try {
      const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${text}`)
      setSearchedCoins(res.data.coins);
      setSearchedTab(true);
      setLoadingData(false);
    } catch (error) {
      console.log(error);
    }
  }

  const searchCoin = (text) => {
    getSearchedCoins(text);
  }
  return (
    <div className='home'>
      <Header onRefresh = {refreshData} onSearch={searchCoin}/>
      {
        searchedTab ? (
          <>
            { !loadingData && 
              <>
                <div className='search-message'>{searchMessage}</div>
                <SearchedCoinList data={searchedCoins}/>
              </>
            }
            {
              loadingData && 
              <Loader message={'Loading Please Wait'}/>
            }
          </>
        ) : (
          <>
            { !loadingData && 
              <>
                <CoinList data={coins} showModal={showModal}  setShowModal={setShowModal}/>
                {
                  coins.length>0 && 
                  <Pager prevPage={prevPage} nextPage={nextPage} pageNo={pageNo}/>
                }
              </>
            }
            {
              loadingData && 
              <Loader message={'Loading Please Wait'}/>
            }
          </>
        ) 
      }
      
    </div>
  )
}

export default Home