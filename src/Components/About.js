// @ts-nocheck
import React from 'react';

export default function About() {

  return (
    <section id='about'>
      <h3>ABOUT</h3>
      <h5 className="italic center">Lorem ipsum dolor sit amet consectetur</h5>
      <div className="timeline">
        <div className="aboutContainer">
          <div className="aboutBox">
            <h4 className="right">2009-2011</h4>
            <h4 className="right">Our Humble Beginnings</h4>
            <h5 className="right">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus itaque beatae tempore
            reprehenderit nesciunt, officia illo consequatur, porro fugiat natus fugit temporibus ut aliquam nostrum
              iste ullam dolorem sint </h5>
          </div>
          <div className="aboutPicsBox">
            <img className='aboutPics' alt="mountains" src="./media/mountainsAbout.jpg" />
            <div className='line'></div>
          </div>
        </div>
        <div>
          <div className="aboutContainer">
            <div className="aboutPicsBox end">
              <img className='aboutPics' alt="mountains" src="./media/planeAbout.jpg" />
              <div className='line'></div>
            </div>
            <div className="aboutBox">
              <h4 className="left">An Agency is Born</h4>
              <h4 className="left">March 2011</h4>
              <h5 className="left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus itaque beatae
              tempore reprehenderit nesciunt, officia illo consequatur, porro fugiat natus fugit temporibus ut
                aliquam nostrum iste ullam dolorem sint </h5>
            </div>
          </div>
          <div>
            <div className="aboutContainer">
              <div className="aboutBox">
                <h4 className="right">December 2012</h4>
                <h4 className="right">Transition to Full Service</h4>
                <h5 className="right">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus itaque beatae
                tempore reprehenderit nesciunt, officia illo consequatur, porro fugiat natus fugit temporibus ut
                  aliquam nostrum iste ullam dolorem sint </h5>
              </div>
              <div className="aboutPicsBox">
                <img className='aboutPics ' alt="mountains" src="./media/laptopAbout.jpg" />
                <div className='line'></div>
              </div>
            </div>
            <div>
              <div className="aboutContainer">
                <div className="aboutPicsBox end">
                  <img className='aboutPics' alt="mountains" src="./media/mountains2About.jpg" />
                  <div className='line'></div>
                </div>
                <div className="aboutBox">
                  <h4 className="left">July 2014</h4>
                  <h4 className="left">Phase Two Expansion</h4>
                  <h5 className="left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus itaque beatae
                  tempore reprehenderit nesciunt, officia illo consequatur, porro fugiat natus fugit temporibus ut
                            aliquam nostrum iste ullam dolorem sint </h5>
                </div>
              </div>
              <div>
                <div className='storyBox center'>
                  <h4 id="storyCircle">Be Part of Our Story!</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};