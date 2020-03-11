import React from 'react';
import logo from './logo.svg';
import baby_european from './assets/baby_european.png'
import logo_babypoom from './assets/logo-babypoom.png'
import gender from './assets/gender.svg';
import baby from './assets/baby.svg';
import stork from './assets/stork.svg';
import cubes from './assets/cubes.svg';
import right_arrow from './assets/right-arrow.svg';
// import gender from './assets/gender.png';
// import baby from './assets/baby.png';
// import stork from './assets/stork.png';
// import cubes from './assets/cubes.png';
// import right_arrow from './assets/right-arrow.png';
import './App.css';

function App() {
  return (
    <div className="grad-bg">
      <div className="container">
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 set-m-mobile" style={{ backgroundColor: 'white', marginTop: '70px', borderRadius: '5px' }}>
            <center>
              <img src={logo_babypoom} width="120" style={{ borderRadius: '50% 50% 0px 0px', padding: '10px', backgroundColor: 'white', position: 'relative', top: -30 }} />
              <br />
              <img src={baby_european} className="baby-photo" />
            </center>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
        </div>

        {/* 2nd row */}
        <div className="row" style={{ textAlign: 'center' }}>

          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" >

            <div className="row justify-content-md-center" style={{ borderBottom: '1px solid white', padding: '10px' }}>
              {/* <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div> */}
              <div className="col-xs-2 col-sm-3 col-md-2 col-lg-2 col-sm-3 col-3  cl-2-mg" style={{ color: 'white', padding: '5px' }}>
                <span>Genre</span>
                <div style={{ backgroundColor: '#93cbca', borderRadius: '5px' }}>
                  <img src={gender} style={{ width: '100%', padding: '10px' }} className="img-fluid " />
                </div>
              </div>
              <div className="col-xs-2 col-sm-3 col-md-2 col-lg-2 col-sm-3 col-3 cl-2-mg" style={{ color: 'white', padding: '5px' }}>
                <span>Apparence</span>
                <div style={{ backgroundColor: '#93cbca', borderRadius: '5px' }}>
                  <img src={baby} style={{ width: '100%', padding: '10px' }} className="img-fluid " />
                </div>
              </div>
              <div className="col-xs-2  col-md-2 col-lg-2 col-sm-3 col-3 cl-2-mg" style={{ color: 'white', padding: '5px' }}>
                <span>Naissance</span>
                <div style={{ backgroundColor: '#93cbca', borderRadius: '5px' }}>
                  <img src={stork} style={{ width: '100%', padding: '10px' }} className="img-fluid " />
                </div>
              </div>
              <div className="col-xs-2 col-sm-3 col-md-2 col-lg-2 col-3 cl-2-mg" style={{ color: 'white', padding: '5px' }}>
                <span>Prenom</span>
                <div style={{ backgroundColor: '#93cbca', borderRadius: '5px' }}>
                  <img src={cubes} style={{ width: '100%', padding: '10px' }} className="img-fluid " />
                </div>
              </div>
              <div className="col-xs-3 col-sm-6 col-md-3 col-lg-3 col-3-mg" style={{ color: 'white', padding: '5px' }}>
                <div className="light-pink">
                  <span>J'ai fini<img src={right_arrow} className="arrow-img" /></span>

                </div>
              </div>

              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            </div>
            {/* end row */}
            <div style={{ textAlign: 'center', color: 'white', margin: '20px' }}>Babypoom.c'est quoi ?</div>
          </div>
          {/* end 6 col */}
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>

        </div>
        {/* end row */}
      </div>
    </div>
  );
}

export default App;
