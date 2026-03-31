import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Skeleton from 'react-loading-skeleton'
import Header from './components/header'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Favorites from './pages/Favorites'
import Market from './pages/Market'
import CoinCache from './modules/cacheManager.mjs'
import Details from './pages/Details'

import 'react-loading-skeleton/dist/skeleton.css';

function App() {
  const [favorites, setFavorites] = useState([]);
  const [cache, setCache] = useState(null);
  const [wallet, setWallet] = useState({
    "ballance": {
      "held": 20000,
      "value": 1,
    },
    "bitcoin": {
      "held": 200.35,
      "value": 38210.70,
      "hex": "#F7931A"
    },
    "ethereum": {
      "held": 135.47,
      "value": 2547.17,
      "hex": "#627EEA"
    },
    "tether": {
      "held": 214.60,
      "value": 0.98,
      "hex": "#26A17B"
    },
  });
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    async function getCacheData() {
      setCache(await CoinCache);
      setLoading(false);
    }
    
    getCacheData();
  }, []);

  return (
    <BrowserRouter>
      <div className='w-screen h-screen flex flex-col'>
        <Header />
        <div className='flex'>
          <Sidebar />
          <Routes>
            <Route
              path="/" element={<Dashboard favorites={favorites} wallet={wallet} cache={cache} loading={loading} setFavorites={setFavorites} />}
            />
            <Route
              path="/Favorites" element={<Favorites favorites={favorites} cache={cache} loading={loading} />}
            />
            <Route
              path="/Market" element={<Market favorites={favorites} cache={cache} loading={loading} />}
            />
            <Route
              path="/Detail/:coin" element={<Details favorites={favorites} cache={cache} loading={loading} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
