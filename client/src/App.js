import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="">
        {/* <div className=''>
          <nav className="navbar fixed-top navbar-dark bg-dark">
            <button>Login</button>
          </nav>
        </div> */}
        <div className='imgbac'>
          <div>
            <a className="" href="/"><img className='move-right' alt="logo" src='https://cdn2.iconfinder.com/data/icons/education-5-1/256/School_Diary-512.png' height='70px' /></a>
          </div>
          <div className='header' >
            <h1 className='move-top header-text'>just grab your moments</h1>
            <a href='/' className='move-left butt button-log'>Login</a>
            <a href='/' className='move-right butt button-sign'>Sign Up</a>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
