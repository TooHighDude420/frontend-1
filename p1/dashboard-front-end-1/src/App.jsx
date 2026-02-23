import { useState } from 'react'

import Header from './components/header'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

function App() {
  const [activePage, setActivePage] = useState("Dashboard")
   
  return (
    <>
    <div className='w-screen h-screen flex flex-col'>
        <Header activePage={activePage}/>
        <div className='flex'>
          <Sidebar />
          <Dashboard />
      </div>
    </div>

    </>
  )
}

export default App
