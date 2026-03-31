import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './twoutput.css'
import App from './App.jsx'
import registry from './singleton'
import FavoritesManager from './modules/favoritesManager.mjs'

const favman = new FavoritesManager();
registry.addInstance("favorites", favman);

createRoot(document.getElementById('root')).render(
  <App />
)
