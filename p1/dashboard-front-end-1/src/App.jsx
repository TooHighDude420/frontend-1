import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from './components/header'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Favorites from './pages/Favorites'
import Market from './pages/Market'

function App() {
  const [favorites, setFavorites] = useState([]);
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

  function addFavorite(value) {
    favorites.push(value)
  }

  return (
    <BrowserRouter>
      <div className='w-screen h-screen flex flex-col'>
        <Header />
        <div className='flex'>
          <Sidebar />
          <Routes>
            <Route
              path="/" element={<Dashboard favorites={favorites} wallet={wallet} />}
            />
            <Route
              path="/Favorites" element={<Favorites favorites={favorites} />}
            />
            <Route
              path="/Market" element={<Market favorites={favorites} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
