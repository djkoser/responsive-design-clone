import React from 'react';

export default function Header() {
  return (
    <header>
      <div className="navLinksBox">
        <a href='#top' id='logoLink'>
          <img id='navBarLogo' alt="Start Bootstrap" src="./media/navbar-logo.svg" />
        </a>
        <nav>
          <a href='#services' className="navLinks">SERVICES</a>
          <a href='#portfolio' className="navLinks">PORTFOLIO</a>
          <a href='#about' className="navLinks">ABOUT</a>
          <a href='#amzTeam' className="navLinks">TEAM</a>
          <a href='#contact' className="navLinks">CONTACT</a>
        </nav>
      </div>
      <section className='niceMeet'>
        <h2 className='italic'>Welcome To Our Studio!</h2>
        <h1>IT'S NICE TO MEET YOU</h1>
        <a className='button' href='#services'>TELL ME MORE</a>
      </section>
    </header>
  )
};