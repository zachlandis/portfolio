import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav-container'>
      <div className='nav-link'>
        <Button component={Link} to="/" variant="outlined">
          Home
        </Button>
      </div>
      <div className='nav-link'>
        <Button component={Link} to="/technical-resume" variant="outlined">
          Technical Resume
        </Button>
      </div>
      <div className='nav-link'>
        <Button component={Link} to="/about-me" variant="outlined">
          About Me
        </Button>
      </div>
    </div>
  )
}

export default Navbar