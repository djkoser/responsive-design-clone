import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wPosition: 0,
    }
    window.addEventListener("scroll", ()=>
    this.setState({
      wPosition: window.pageYOffset
    }))
  }

  render() {
    let { wPosition } =this.state;
    return (
      <header>
        <div className={`navLinksBox ${wPosition>=60 ? "navBarFinish" : "navBarStart"}`}>
          <a href='#top' id='logoLink'>
            <img className={`navBarLogo ${wPosition>=60 ? "logoFinish" : "logoStart"}`} id='navBarLogo' alt="Start Bootstrap" src="./media/navbar-logo.svg" />
          </a>
          <nav>
            <a href='#services ' className={`navLinks ${wPosition>=60 ? "navLinksFinish" : "navLinksStart"}`}>SERVICES</a>
            <a href='#portfolio' className={`navLinks ${wPosition>=60 ? "navLinksFinish" : "navLinksStart"}`}>PORTFOLIO</a>
            <a href='#about' className={`navLinks ${wPosition>=60 ? "navLinksFinish" : "navLinksStart"}`}>ABOUT</a>
            <a href='#amzTeam' className={`navLinks ${wPosition>=60 ? "navLinksFinish" : "navLinksStart"}`}>TEAM</a>
            <a href='#contact' className={`navLinks ${wPosition>=60 ? "navLinksFinish" : "navLinksStart"}`}>CONTACT</a>
          </nav>
        </div>
        <section className='niceMeet'>
          <h2 className='italic'>Welcome To Our Studio!</h2>
          <h1>IT'S NICE TO MEET YOU</h1>
          <a className='button' href='#services'>TELL ME MORE</a>
        </section>
      </header>
    )
  }
};