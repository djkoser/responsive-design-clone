import React from 'react';

export default function Portfolio() {
  return (
    <section>
      <div id='portfolio'>
        <h3>PORTFOLIO</h3>
        <h5 className='italic'>Lorem ipsum dolor sit amet consectetur</h5>
        <div className="prtPicsContainer">
          <div className="portPics">
            <img className="portPics" src="media/hangers.jpg" />
            <h4>Threads</h4>
            <h5 className='italic'>Illustration</h5>
          </div>
          <div className="portPics">
            <img className="portPics" src="media/keepExploring.jpg" />
            <h4>Explore</h4>
            <h5 className='italic'>Graphic Design</h5>
          </div>
          <div className="portPics">
            <img className="portPics" src="media/finish.jpg" />
            <h4>Finish</h4>
            <h5 className='italic'>Identity</h5>
          </div>
          <div className="portPics">
            <img className="portPics" src="media/lines.jpg" />
            <h4>Lines</h4>
            <h5 className='italic'>Branding</h5>
          </div>
          <div className="portPics">
            <img className="portPics" src="media/southwest.jpg" />
            <h4>Southwest</h4>
            <h5 className='italic'>Website Design</h5>
          </div>
          <div className="portPics">
            <img className="portPics" src="media/window.jpg" />
            <h4>Window</h4>
            <h5 className='italic'>Photography</h5>
          </div>
        </div>
      </div>
    </section>
  )
};