import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'


export function App() {

  return (
    <div className="App" id="app">
      <header>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />

    </div>
  )
}
