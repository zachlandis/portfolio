import React from 'react'


function Home() {


  return (
    <div className='home'>
        <div>
            <img 
              src='src/assets/zach.PNG'
              alt='zach-headshot'
              className='zach-headshot'
            />
            <h1>Zach Landis</h1>
            <p><a href='tel:+13033301169'>(303) 330-1169</a>   |   <a href='mailto:zachlandis91@gmail.com'>ZachLandis91@gmail.com</a>   |   <a href='https://maps.app.goo.gl/xtWz7mHK6BCDH9Yr6'>Arvada, CO</a></p>
        </div>
        <div>
          <a 
            target="_blank"
            href='https://www.linkedin.com/in/zach-landis'>
              <img
                src='src/assets/LI_logo.png'
                alt='linkedin-logo'
                className='social-logo'
              />
          </a>
          <a 
            target="_blank"
            href='https://github.com/zachlandis'>
              <img
                src='src/assets/github.png'
                alt='github-logo'
                className='social-logo'
              />
          </a>
        </div>
    </div>
  )
}

export default Home