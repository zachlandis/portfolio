import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Home'
import Navbar from './Navbar';
import TechnicalResume from './TechnicalResume/TechnicalResume';
import AboutMe from './AboutMe';

function App() {
  const [page, setPage] = useState('/')

  return (
    <>
        <div>
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/technical-resume" element={<TechnicalResume />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
      </div>
    </>
  )
}

export default App
