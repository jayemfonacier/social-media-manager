import React from 'react';
import Routes from  './routes/main';
import {BrowserRouter as Router} from 'react-router-dom';

function mainApp(){
  return(
    <>
      <div id="page-container" className="w-full h-full m-0 p-0 bg-gray-100 grid grid-cols-1">
              <Router>
                  <Routes />
              </Router>
      </div>
    </>
  )
}

export default mainApp;